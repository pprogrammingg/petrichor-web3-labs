import './App.css'
import { useEffect, useState } from 'react'
import {
  DataRequestBuilder,
  RadixDappToolkit,
  createLogger,
} from '@radixdlt/radix-dapp-toolkit'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import { RadixProvider } from './radix/RadixProvider';
import { config } from './config'
import TaskList from './components/TaskList/TaskList';
import Member from './components/membership/Member';
import Home from './components/home/Home';
import ErrorPage from './components/errorPage/ErrorPage';
import RootLayout from './components/rootLayout/RootLayout';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'radix-connect-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/member" element={<Member />} />
      <Route path="/tasks" element={<TaskList taskList={[]} />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

export default function App() {
  const [state, setState] = useState<RadixDappToolkit | undefined>()

  // Initialize Radix Dapp Toolkit in the client
  useEffect(() => {
    const radixDappToolkit = RadixDappToolkit({
      networkId: config.network.networkId,
      dAppDefinitionAddress: config.dAppDefinitionAddress,
      logger: createLogger(2),
    })

    radixDappToolkit.walletApi.setRequestData(
      DataRequestBuilder.accounts().atLeast(1),
      DataRequestBuilder.personaData().fullName()
    )

    setState(radixDappToolkit)
  }, [])

  if (!state) return null

  return (
    <RadixProvider value={state}>
      <RouterProvider router={router}/>
    </RadixProvider>
  )
}