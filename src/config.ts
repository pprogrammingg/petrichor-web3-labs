import { RadixNetworkConfig } from '@radixdlt/radix-dapp-toolkit'

if (!process.env.NEXT_PUBLIC_NETWORK) throw new Error('NETWORK env var not set')
if (!process.env.NEXT_PUBLIC_DAPP_DEFINITION_ADDRESS)
  throw new Error('DAPP_DEFINITION_ADDRESS env var not set')

const network =
  RadixNetworkConfig[
    process.env.NEXT_PUBLIC_NETWORK as keyof typeof RadixNetworkConfig
  ]!

if (!network) throw new Error('Invalid network')

export type ResourceAddresses = typeof config.addresses

const dAppDefinitionAddress = process.env.NEXT_PUBLIC_DAPP_DEFINITION_ADDRESS

export const config = {
  network,
  dAppDefinitionAddress,
  addresses: {
      packageAddress: "package_tdx_e_1p4n7x2vrt9zphy7u3agn8gl5ahkhjk68cu5u6u9zhg862pps4446j0", 
      memberComponentAddress: "component_tdx_e_1cppz3j4jr32z7ewskevakscv3m9p5vs869ke37ckzslmavtdazje7k",
      loyaltyDAppOwnerAddress: "account_tdx_e_129rwpzfdsevjpm0tnt9u8fs54zeynuxsmg7xdanm0gugpvhfd8rt29",
      memberCardResourceAddress: "resource_tdx_e_1ngay4xny3eg06635sld0lfkzf2jr7se3mrkph5pdvglse6qxva8qra",
      rewardTokenResourceAddress: "resource_tdx_e_1t56uy7jazxhqcx9mlxv2vpulsy2mqqaqndnn29vj2nyv0tae60l5zw"
  },
}
