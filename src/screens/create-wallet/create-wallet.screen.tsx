// @ts-nocheck - no overload matched this call error.
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RoutePath } from "navigation/route-path";
import { useServices } from "services";
import { useStores } from "store";
import { observer } from "mobx-react-lite";
import dayjs from "dayjs";
import {
  Box,
  NoticeLoader,
  DateTimePicker,
  IconSvg,
  DropDown,
  Alert,
  ToggleSwitch,
  Text,
} from "components/primitive";
import {
  FormContainer,
  HomeScreenContainer,
  StyledButton,
  StyledInput,
  WalletCreateFormContainer,
  WalletCreateFormBox,
  WalletCreateText,
  Label,
  SignnalingInput,
} from "./create-wallet.screen.styles";
import { claimTypes, getClaimName } from "utils";
import { useNavigate } from "hooks";

export const CreateWalletScreen = observer(() => {
  const { safeService, walletService } = useServices();
  const { safeStore, accountStore } = useStores();
  let history = useHistory();

  const [walletName, setWalletName] = useState("");
  const [walletDescription, setWalletDescription] = useState("");

  const [walletBeneficiary, setWalletBeneficiary] = useState(
    safeService.getDefaultConfig()?.beneficiary
  );
  const [signalingPeriod, setSignalingPeriod] = useState(300);

  const [claimType, setClaimType] = useState();
  const [DdayTime, setDdayTime] = useState(0);

  const [date, setDate] = useState(null);
  const [isTopupToggleChecked, setIsTopupToggleChecked] = useState(false);

  const [topupValue, setTopupValue] = useState<any>("");

  const [selectWallet, setSelectWallet] = useState([]);
  const [options, setOptions] = useState(selectWallet);

  const [seedPhrase, setSeedPhrase] = useState<any>("");
  const [balanceLoader, setBalanceLoader] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [validator, setValidator] = useState(false);

  const [disableBtn, setDisableBtn] = useState(true);
  const [topupError, setTopupError] = useState(false);

  const [isBeneficiaryChecked, setIsBeneficiaryChecked] = useState(false);
  const [claimToggle, setClaimToggle] = useState(false);

  useEffect(() => {
    if (walletName) {
      setValidator(false);
      setDisableBtn(false);
    }
  }, [walletName]);

  const getAllWallets = () => {
    const wallets = accountStore.safientUser?.safes.map((safes) => ({
      label: safes.safeName,
      value: safes.safeId,
    }));

    setSelectWallet(wallets);
  };

  const loadBalance = async () => {
    setBalanceLoader(true);
    safeStore.setRole("creator");
    const safeData = await safeService.recover(options, "creator");

    setSeedPhrase(safeData.data?.seedPhrase);
    if (safeData.hasData()) {
      if (safeData.data?.seedPhrase)
        await walletService.load(safeData.data?.seedPhrase);
    }

    setBalanceLoader(false);
  };

  const createWallet = async () => {
    if (!walletName) {
      setDisableBtn(true);
      setValidator(true);
    } else {
      setValidator(false);
      try {
        if (
          topupValue.length > 0 &&
          topupValue >= safeStore.walletInfo?.balance.eth
        ) {
          setTopupError(true);
        } else {
          safeStore.setFetching(true);

          const wallet = await walletService.create();

          let topupAddress = wallet.data?.address;

          await walletService.info();
          await walletService.load(seedPhrase);
          await walletService.send(topupAddress, topupValue);
          safeStore.setStatusMessage("Initiating your wallet... 👷 ");

          if (wallet.hasData()) {
            const safe = await safeService.create(
              walletName,
              walletDescription,
              isBeneficiaryChecked ? walletBeneficiary : null,
              wallet.data!.mnemonic,
              claimType,
              signalingPeriod,
              DdayTime,
              true
            );
            safeStore.setStatusMessage("Creating Wallet... 🚀");

            await walletService.load(wallet.data!.mnemonic);

            if (safe.hasData()) {
              await safeService.get(safe.data?.id!);
              safeStore.setStatusMessage("Wallet Created Successfully ✅");
              history.push(RoutePath.walletOverview);
              safeStore.setStatusMessage("");
            } else {
              history.push(RoutePath.createWallet);
            }

            if (safe.hasError()) {
              setErrorMessage(
                `Something went wrong while creating the wallet. ${safe.getErrorMessage()}`
              );
              safeStore.setCustomError(0);
            }
          }

          safeStore.setFetching(false);
        }
      } catch (e: any) {
        console.log(e);
      }
    }
  };

  const dateConverter = (date: any) => {
    setDate(date);
    const presentTime = Date.now() / 1000;
    const futureTime = dayjs(date).valueOf() / 1000;
    const timeDifference = futureTime - presentTime;
    setDdayTime(Math.floor(timeDifference));
  };

  return (
    <HomeScreenContainer>
      {safeStore.fetching && (
        <NoticeLoader
          label={{ tx: "wallet.creatingLabel" }}
          helperText={{
            text: `${
              safeStore.getStatusMessage() ||
              "Creating Wallet... 🚀 Please sign the message if prompted"
            }`,
          }}
        />
      )}
      <Box hCenter vCenter>
        {errorMessage.length > 0 && (
          <Alert label={{ text: errorMessage }} variant={"error"} icon />
        )}
      </Box>

      <WalletCreateFormContainer>
        <FormContainer>
          <Box row vCenter>
            <Box onClick={() => useNavigate(history)} flex={1} marginTop={0.3}>
              <IconSvg name="arrowLeft" />
            </Box>
            <Box flex={5} vCenter>
              <WalletCreateText
                variant="contentHeader"
                center
                tx="common.createWallet"
              />
            </Box>
          </Box>
          <WalletCreateFormBox marginBottom={2}>
            <StyledInput
              type="text"
              label="Wallet Name"
              placeholder="Satoshi Wallet"
              onChange={(e: any) => {
                setWalletName(e.target.value);
              }}
              error={validator}
              errorMsg="Please Enter a Valid Wallet Name"
            />
            <StyledInput
              type="text"
              label="Wallet Description"
              placeholder="Satoshi Wallet Details"
              onChange={(e: any) => setWalletDescription(e.target.value)}
            />
          </WalletCreateFormBox>

          {/* bebeficiary */}

          <Box row hCenter marginTop={3} justify={"between"}>
            <Text variant="small" text={"Add a Beneficaiary "} bold600 />
            <ToggleSwitch
              toggleID={"beneficiary"}
              checked={isBeneficiaryChecked}
              onChange={(e: any) => {
                setIsBeneficiaryChecked(!isBeneficiaryChecked);
                getAllWallets();
              }}
            />
          </Box>

          {isBeneficiaryChecked && (
            <Box marginTop={2}>
              <StyledInput
                type="text"
                label="Beneficiary Email or DID"
                placeholder={"satoshi@safient.com"}
                value={walletBeneficiary}
                onChange={(e: any) => setWalletBeneficiary(e.target.value)}
                errorMsg={"Enter a Valid Email ID"}
                error={validator}
              />
            </Box>
          )}

          {/* claim type */}

          <Box row hCenter marginTop={3} justify={"between"}>
            <Text variant="small" text={"Add a Claim Type "} bold600 />
            <ToggleSwitch
              toggleID={"selectClaimType"}
              checked={claimToggle}
              onChange={(e: any) => {
                setClaimToggle(!claimToggle);
              }}
            />
          </Box>

          {claimToggle && (
            <>
              <Box marginTop={2}>
                <Label>Select Claim Type</Label>
                <DropDown
                  placeholder="Select Claim Type"
                  value={getClaimName(claimType)?.label}
                  options={claimTypes}
                  onChange={(e: any) => setClaimType(e.value)}
                />
              </Box>

              {claimType === 0 && (
                <Box row hCenter marginTop={2} justify={"between"}>
                  <Label>Signaling Period</Label>
                  <SignnalingInput
                    type="text"
                    placeholder={signalingPeriod.toString()}
                    onChange={(e: any) =>
                      setSignalingPeriod(parseInt(e.target.value))
                    }
                  />
                </Box>
              )}
              {claimType === 2 && (
                <Box row hCenter marginTop={2} justify={"between"}>
                  <DateTimePicker
                    label="Select DDay Date (Seconds)"
                    placeholder="DDay Date"
                    value={date}
                    onChange={(date: any) => dateConverter(date)}
                  />
                </Box>
              )}
            </>
          )}

          {/* topup */}
          <Box row hCenter marginTop={3} justify={"between"}>
            <Text variant="small" text={"Top up the wallet "} bold600 />
            <ToggleSwitch
              toggleID={"topup"}
              checked={isTopupToggleChecked}
              onChange={(e: any) => {
                setIsTopupToggleChecked(!isTopupToggleChecked);
                getAllWallets();
              }}
            />
          </Box>

          {isTopupToggleChecked && (
            <>
              <Box marginTop={2}>
                <Label>Select the wallet</Label>
                <DropDown
                  placeholder="Select the wallet"
                  value={options}
                  options={selectWallet}
                  onChange={(e: any) => {
                    setOptions(e.value);
                    loadBalance();
                  }}
                />
              </Box>

              {balanceLoader ? (
                <Box marginTop={1}>
                  <Label>Loading Wallet Balance...</Label>
                </Box>
              ) : (
                <Box marginTop={1}>
                  <Label>
                    Wallet's Balance is{" "}
                    {`${safeStore.walletInfo?.balance.eth} ETH`}
                  </Label>
                </Box>
              )}

              <Box row hCenter marginTop={2} justify={"between"}>
                <Label>Enter Topup Value</Label>
                <StyledInput
                  type="text"
                  placeholder={"Enter the Topup value"}
                  value={topupValue}
                  onChange={(e: any) => setTopupValue(e.target.value)}
                  error={topupError}
                  errorMsg={`topup value should be less than ${safeStore.walletInfo?.balance.eth} ETH.`}
                />
              </Box>
            </>
          )}
          <Box marginTop={2}>
            <Alert
              variant="info"
              icon
              label={{
                text: 'This will create a wallet using signaling method with 300 sec signaling period. Click on "Add a Claim Type" to update',
              }}
            />
          </Box>
          <StyledButton
            variant="primary"
            label={{ text: safeStore.fetching ? "Creating.." : "Create 🙌" }}
            onClick={createWallet}
            color="primaryGradient"
            disabled={disableBtn}
          />
        </FormContainer>
      </WalletCreateFormContainer>
    </HomeScreenContainer>
  );
});
