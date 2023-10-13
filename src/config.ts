import { RadixNetworkConfig } from '@radixdlt/radix-dapp-toolkit'

if (!import.meta.env.VITE_PUBLIC_NETWORK)
  throw new Error('NETWORK env var not set')
if (!import.meta.env.VITE_PUBLIC_DAPP_DEFINITION_ADDRESS)
  throw new Error('DAPP_DEFINITION_ADDRESS env var not set')

const network =
  RadixNetworkConfig[
    import.meta.env.VITE_PUBLIC_NETWORK as keyof typeof RadixNetworkConfig
  ]!

if (!network) throw new Error('Invalid network')

export type ResourceAddresses = typeof config.addresses

const dAppDefinitionAddress = import.meta.env
  .VITE_PUBLIC_DAPP_DEFINITION_ADDRESS

export const config = {
  network,
  dAppDefinitionAddress,
  addresses: {
    packageAddress:
      'package_tdx_2_1p4ukk762enprf8hqelshn2mc7f4ht26s0d3uf0caet78r2w6ee2g6v',
    memberComponentAddress:
      'component_tdx_2_1cp2f9zz0gun8ggflgw0jy2jekpjx0uuv0lszt04s4d5cvr8kd586qx',
    memberCardResourceAddress: import.meta.env
      .VITE_MEMBERCARD_NFT_RESOURCE_ADDRESS,
    rewardTokenResourceAddress:
      'resource_tdx_2_1t436578k9e2jcgccx3hu3kuyhun2fpnalfxmwh5jkkw8f7drmn8am2',
  },
}
