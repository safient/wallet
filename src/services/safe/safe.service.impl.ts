import { SafeService } from './safe.service';
import { ServiceResponse } from '../core/service-response';
import { AccountStoreImpl, SafeStoreImpl, stores } from '../../store';
import { Service } from '../core/service';
import { Types } from '@safient/core';

export class SafeServiceImpl extends Service implements SafeService {
  private readonly accountStore: AccountStoreImpl;
  private readonly safeStore: SafeStoreImpl;

  constructor() {
    super();
    this.accountStore = stores?.accountStore;
    this.safeStore = stores?.safeStore;
  }

  // Creating a signaling based seed phrase safe for Safient wallet
  // TODO: Update all the contants while creating the safe
  async create(
    name: string,
    description: string,
    beneficiary: string,
    data: string,
    onchain: boolean
  ): Promise<ServiceResponse<Types.EventResponse>> {
    try {
      const secretSafe: Types.SecretSafe = {
        seedPhrase: data,
        privateKey: null,
        keyStore: null,
      };
      const cryptoSafe: Types.CryptoSafe = {
        data: secretSafe,
      };
      const safeData: Types.SafeStore = {
        safe: cryptoSafe,
      };

      const safe = await this.accountStore.safient.createSafe(
        name,
        description,
        this.accountStore.safientUser.did,
        safeData,
        onchain,
        0,
        300,
        0,
        { email: beneficiary }
      );

      // Adding the new safe to the local SafeMeta store
      this.accountStore.safientUser.safes.push({safeName: name,
        safeId: safe.data?.id!,
        type: 'creator',
        decShard: null})

      return this.success<Types.EventResponse>(safe.data as Types.EventResponse)
    } catch (e: any) {

      return this.error<Types.EventResponse>(e.error);
    }
  }

  async get(safeId: string): Promise<ServiceResponse<Types.Safe>> {
    try {
      const safe = await this.accountStore.safient.getSafe(safeId);
      this.safeStore.setSafe(safe.data as Types.Safe);
      return this.success<Types.Safe>(safe.data as Types.Safe)
    } catch (e: any) {
      return this.error<Types.Safe>(e.error);
    }
  }

  //Currently signal based claim
  async claim(safeId: string): Promise<ServiceResponse<Types.EventResponse>> {
    try {
      const file = {
        name: 'dummy.pdf',
      };
      const disputeId = await this.accountStore.safient.createClaim(safeId, file, 'Claim evidence', 'Lorsem Text');
      return this.success<Types.EventResponse>(disputeId.data!);
    } catch (e: any) {
      console.log(e);
      return this.error<Types.EventResponse>(e);
    }
  }

  async signal(safeId: string): Promise<ServiceResponse<boolean>> {
    try {
      let status: boolean;
      const txReceipt = await this.accountStore.safient.createSignal(safeId);
      if (txReceipt.data?.status === 1) {
        status = true;
      } else {
        status = false;
      }
      return this.success<boolean>(status);
    } catch (e: any) {
      return this.error<boolean>(e);
    }
  }

  async recover(safeId: string, role: string): Promise<ServiceResponse<Types.SecretSafe>> {
    try {
      let recoveredData, secretData;

      if (role == 'creator') {
        recoveredData = await this.accountStore.safient.recoverSafeByCreator(safeId);
        secretData = recoveredData.data.data.safe.data;
      } else {
        recoveredData = await this.accountStore.safient.recoverSafeByBeneficiary(
          safeId,
          this.accountStore.safientUser.did
        );
        secretData = recoveredData.data.safe.data;
      }
      return this.success<Types.SecretSafe>(secretData);
    } catch (e: any) {
      return this.error<Types.SecretSafe>(e);
    }
  }
}
