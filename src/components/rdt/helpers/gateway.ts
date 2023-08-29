import { ResultAsync, err } from 'neverthrow'
import { rdt } from '../rdt'

export const getEntityDetails = (address: string) =>
    ResultAsync.fromPromise(
      rdt.gatewayApi.state.getEntityDetailsVaultAggregated(address),
      (e: unknown) => e as Error
    );