import { RadixDappToolkit, DataRequestBuilder } from "@radixdlt/radix-dapp-toolkit";

export const rdt = RadixDappToolkit({
    dAppDefinitionAddress:
        'account_tdx_d_1295e4znmu5lm4kwd804u7r5chlld9hqduwx0vl378yje74pwsg65as',
    networkId: 13,
})
  
rdt.walletApi.setRequestData(
    DataRequestBuilder.accounts().atLeast(1)
)
  