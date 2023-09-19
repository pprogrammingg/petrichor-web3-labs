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
      'package_tdx_e_1p4n7x2vrt9zphy7u3agn8gl5ahkhjk68cu5u6u9zhg862pps4446j0',
    memberComponentAddress:
      'component_tdx_e_1cppz3j4jr32z7ewskevakscv3m9p5vs869ke37ckzslmavtdazje7k',
    memberCardResourceAddress: import.meta.env
      .VITE_MEMBERCARD_NFT_RESOURCE_ADDRESS,
    rewardTokenResourceAddress:
      'resource_tdx_e_1t56uy7jazxhqcx9mlxv2vpulsy2mqqaqndnn29vj2nyv0tae60l5zw',
  },
}
