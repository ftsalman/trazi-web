import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { DashboardPage } from "../pages/DashboardPage";

export  const  router  =  createBrowserRouter([

{
    path:'/',
    element:<div></div>,

},
{
  path:"/auth",
  children:[
    {
        path:"login",
        element:<div></div>
    },
    {
        path:"register",
        element:<div></div>
    },

  ] 
},
{
    path:"/",
    element:<DashboardLayout/>,
    children:[
        {
            index:true,
            element:<DashboardPage/>
        },
        
    ]
}

]);