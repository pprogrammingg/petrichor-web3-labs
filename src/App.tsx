import './App.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import TaskList from './components/TaskList/TaskList';
import Member from './components/membership/Member';
import Home from './components/home/Home';
import ErrorPage from './components/errorPage/ErrorPage';
import RootLayout from './components/rootLayout/RootLayout';

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
