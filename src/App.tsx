import './App.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import TaskList from './components/TaskList/TaskList';
import Member from './components/membership/Member';
import Home from './components/home/Home';
import ErrorPage from './components/errorPage/ErrorPage';
import RootLayout from './components/rootLayout/RootLayout';
import { getEntityDetails} from './components/rdt/helpers/entity-details-from-gateway';
import { RdtProvider } from './components/rdt/RdtProvider';
import { rdt } from './components/rdt/rdt';

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



// async function testAsync() {
//   const entriesPromise = await randomApi("https://api.publicapis.org/entries");
//   const employeesPromise = await randomApi("https://dummy.restapiexample.com/api/v1/employees");

//   const [entries, employees] = await Promise.all([entriesPromise, employeesPromise]);

//   console.log(entries);
//   console.log(employees);
// }



function App() {
  // getEntityDetails();

  // testAsync() ;

  return (
    <>
      <RdtProvider value={rdt}>      
        <RouterProvider router={router}/>
      </RdtProvider>
    </>
  )
}

export default App
