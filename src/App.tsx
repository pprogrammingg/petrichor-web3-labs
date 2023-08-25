import './App.css'
import { RadixDappToolkit, DataRequestBuilder } from '@radixdlt/radix-dapp-toolkit'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
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

const rdt = RadixDappToolkit({
  dAppDefinitionAddress:
    'account_tdx_d_1295e4znmu5lm4kwd804u7r5chlld9hqduwx0vl378yje74pwsg65as',
  networkId: 13,
})

rdt.walletApi.setRequestData(
  DataRequestBuilder.accounts().atLeast(1).withProof()
)


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

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
