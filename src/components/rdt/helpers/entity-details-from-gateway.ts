import { rdt } from '../rdt'

export interface ResourceData  {
    resourceAddress?: string;
    metadata?: Record<string, any>;
    amount?: number;
    nft_ids?: String[];
    nft_total_count?: number;
  };

export interface StateEntityDetailsOptions  {
    explicitMetadata?: string[];
    ancestorIdentities?: true;
    nonFungibleIncludeNfids?: true;
    packageRoyaltyVaultBalance?: false;
    componentRoyaltyVaultBalance?: false;
 };

export interface EntityDetailsSuccess  {
  fungible_resources?: ResourceData[];
  non_fungible_resources?: ResourceData[];
};

export interface EntityDetailsError  {
  message?: String;
  raw_error?: String;
};


export const getEntityDetails = async () : Promise<EntityDetailsSuccess | EntityDetailsError> => {
  console.log("rdt in entity-details is ");
  console.log(rdt);

  let options: StateEntityDetailsOptions = {
      explicitMetadata: ["name", "description", "symbol"]
  }
    
  let accountAddr = "account_tdx_d_1295e4znmu5lm4kwd804u7r5chlld9hqduwx0vl378yje74pwsg65as";

  const api = rdt.gatewayApi.state;
  
  console.log("Initiate calling api.getEntityDetailsVaultAggregated(accountAddr, options)")
  const entityDetailsPromise = api.getEntityDetailsVaultAggregated(accountAddr, options);
  console.log("Entity Details promise is");
  console.log(entityDetailsPromise);
  return entityDetailsPromise;
};


/**
 * Process success response from getEntityDetailsVaultAggregated API
 * @param response 
 * @returns EntityDetailsSuccess type representing the processed successful response
 */
const processGetEntityDetailsSuccessResponse = (response: any) => {

  let res_fungible_resources: ResourceData[] = [];
  let res_non_fungible_resources: ResourceData[] = [];
  
  response.fungible_resources.items.forEach((i: any) => {
    if (i.aggregation_level === "Vault") {
      const amount = i.vaults.items.reduce(
        (acc: number, curr: any) => acc + parseInt(curr.amount),
        0
      );
      const metadata = i.explicit_metadata || {};
      const resourceAddress = i.resource_address;
      res_fungible_resources.push({ amount, metadata, resourceAddress });
    }
  });

  response.non_fungible_resources.items.forEach((i: any) => {
      if (i.aggregation_level === "Vault") {
        const nft_total_count = i.vaults.total_count;
        const nft_ids = i.vaults.items[0].items;
        const metadata = i.explicit_metadata || {};
        const resourceAddress = i.resource_address;
        res_non_fungible_resources.push({ nft_ids, nft_total_count, metadata, resourceAddress });
      }
    });

  let entityDetailsSuccessResult: EntityDetailsSuccess = {
      fungible_resources: res_fungible_resources,
      non_fungible_resources: res_non_fungible_resources
  };

  console.log("entity-details-from-gateway: entityDetailsSuccessResult is ");
  console.log(entityDetailsSuccessResult);
  return entityDetailsSuccessResult;
};

export const randomApi =  async (apiAddress: string): Promise<any> => {
  // const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
  const response = await fetch(apiAddress);
  console.log(response);

  const randomDelay = Math.floor(Math.random() * 3000) + 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate success or error response based on random condition
      if (Math.random() < 0.7) {
        resolve(response);
      } else {
        resolve({
          message: 'An error occurred while fetching entity details.',
          raw_error: 'Some error message',
        });
      }
    }, randomDelay);
  });
}