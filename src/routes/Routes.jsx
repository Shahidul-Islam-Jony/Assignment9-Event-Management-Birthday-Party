import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import ContactUs from "../pages/Contact Us/ContactUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/login/Login";
import ServiceDetails from "../components/services/ServiceDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('/data.json')
            },
            {
                path:'/contact',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/services/:name',
                element:<ServiceDetails></ServiceDetails>,
                loader:()=>fetch('/data.json')
            }
        ]
    }
])

export default router;