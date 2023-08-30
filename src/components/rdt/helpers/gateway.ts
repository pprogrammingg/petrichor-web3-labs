import { rdt } from '../rdt'

type ResourceData = {
    resourceAddress: string;
    metadata: Record<string, any>;
    amount: number;
  };

type VaultFungibleItem = {
    amount: String;
    last_updated_at_state_version: number,
    vault_address: String
}; 
  
  const getMetadata = async (accountAddr: string) => {
    const api = rdt.gatewayApi.state;
    const resources: ResourceData[] = [];
    const res = await api.getEntityDetailsVaultAggregated(accountAddr);
    res.fungible_resources.items.forEach((i: VaultItem) => {
      if (i.aggregation_level === "Vault") {
        const amount = i.vaults.items.reduce(
          (acc: String, curr: String) => acc + Number(curr.amount),
          0
        );
        const metadata = i.explicit_metadata || {};
        const resourceAddress = i.resource_address;
        resources.push({ amount, metadata, resourceAddress });
      }
    });
    return resources;
  };