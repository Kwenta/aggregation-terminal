import { GraphQLClient } from 'graphql-request'
import nullthrows from 'nullthrows'

import endpoints from '@/src/subgraph/subgraph-endpoints.json'
import { ChainsValues } from '@/types/chains'

// import { SdkWithHooks, getSdkWithHooks } from '@/types/generated/subgraph'

// export type AllSDK = Record<ChainsValues, SdkWithHooks>

export enum SubgraphName {
  Rentals = 'rentals',
}

export function getSubgraphSdkByNetwork(
  chainId: ChainsValues,
  subgraphName: SubgraphName,
): ReturnType<any> {
  return {}
}
