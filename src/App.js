import './App.css';
import { router } from './routes/Router';
import {RouterProvider} from 'react-router-dom'
import  { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContex } from './Contaxt/AuthProvider';



function App() {
  const {dark} = useContext(AuthContex)

  return (
    <div className={dark ? "bg-gray-500" : "bg-white"}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
