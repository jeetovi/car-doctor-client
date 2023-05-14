import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Loing from "../Pages/Login/Loing";
import SignUp from "../Pages/SignUP/SignUp";
 

const router = createBrowserRouter([
    {
      path: "/",
      element:  <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        }
        ,{
            path: '/login',
            element: <Loing></Loing>
        }
        ,{
            path: '/signup',
            element:  <SignUp></SignUp>
        }
       
      ]
    },
  ]);
  export default router;