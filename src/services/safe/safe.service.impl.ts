import { SafeService } from "./safe.service";
import { ServiceResponse } from "../core/service-response";
import { AccountStoreImpl, stores } from "../../store";
import { Service } from "../core/service";
import { Types } from "@safient/core";

export class SafeServiceImpl extends Service implements SafeService {

  private readonly accountStore: AccountStoreImpl;

  constructor() {
    super();
    this.accountStore = stores?.accountStore;
  }

  // Creating a signaling based seed phrase safe for Safient wallet
  // TODO: Update all the contants while creating the safe
  async create(
    beneficiary: string,
    data: string,
    onchain: boolean,
  ): Promise<ServiceResponse<string>> {
    try {
      const secretSafe: Types.SecretSafe = {
        seedPhrase: data,
        privateKey: null,
        keyStore: null,
      }
      const cryptoSafe: Types.CryptoSafe = {
        data: secretSafe,
      }
      const safeData: Types.SafeStore = {
        safe: cryptoSafe,
      }

      const safe = await this.accountStore.safient.createSafe(
        this.accountStore.safientUser.did,
        beneficiary,
        safeData,
        onchain,
        0,
        0,
        0,
      )

      return this.success<string>(safe.data as string)
    } catch (e: any) {

      return this.error<string>(e.error)
    }
  }

  async get(safeId: string): Promise<ServiceResponse<Types.Safe>> {
    try {
      const safe = await this.accountStore.safient.getSafe(safeId)
      return this.success<Types.Safe>(safe.data as Types.Safe)
    } catch (e: any) {
      return this.error<Types.Safe>(e.error)
    }
  }

  //Currently signal based claim
  async claim(safeId: string): Promise<ServiceResponse<number>> {
    try {
      const file = {
        name: 'dummy.pdf',
      }
      const disputeId = await this.accountStore.safient.createClaim(
        safeId,
        file,
        'Claim evidence',
        'Lorsem Text',
      )
      return this.success<number>(disputeId.data!)
    } catch (e: any) {
      return this.error<number>(e)
    }
  }

  async signal(safeId: string): Promise<ServiceResponse<boolean>> {
    try {
      let status: boolean
      const txReceipt = await this.accountStore.safient.createSignal(safeId)
      if (txReceipt.data?.status === 1) {
        status = true
      } else {
        status = false
      }
      return this.success<boolean>(status)
    } catch (e: any) {
      return this.error<boolean>(e)
    }
  }

  async recover(safeId: string): Promise<ServiceResponse<string>> {
    try {
      const recoveredData = await this.accountStore.safient.recoverSafeByBeneficiary(
        safeId,
        this.accountStore.safientUser.did,
      )
      return this.success<string>(recoveredData.data.safe.data)
    } catch (e: any) {
      return this.error<string>(e)
    }
  }

}
