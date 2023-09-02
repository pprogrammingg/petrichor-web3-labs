import { RadixDappToolkit, DataRequestBuilder } from "@radixdlt/radix-dapp-toolkit";

export const rdt = RadixDappToolkit({
    dAppDefinitionAddress:
        'account_tdx_d_1295e4znmu5lm4kwd804u7r5chlld9hqduwx0vl378yje74pwsg65as',
    networkId: 13,
})
 
rdt.walletApi.setRequestData(
    DataRequestBuilder.accounts().atLeast(1)
)

// create a BehaviourSubject initialized with value empty object
// study how hooks are used in rdt.ts if at all, seems like hooks are directly used in FCs not from rdt.ts
// this subject will be running an async function called getEntityDetails every 5 seconds
// it will have a unsubscribe and timer cleanup function to exist the subscription properly
// it need to utilize createObservableHook
// createObservableHook for entityState is happening in Entity/state, Rdt just gets the 
// const entityDetailsSubject = new BehaviorSubject<any>({});

// const level = useRef();