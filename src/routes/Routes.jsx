import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import ContactUs from "../pages/Contact Us/ContactUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/login/Login";
import ServiceDetails from "../components/services/ServiceDetails";
import Registration from "../pages/registration/Registration";
import PrivateRoutes from "./PrivateRoutes";
import YourOrder from "../pages/YourOrder/YourOrder";

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
                path:'/register',
                element:<Registration></Registration>
            },
            {
                path:'/services/:name',
                element:<PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
                loader:()=>fetch('/data.json')
            },
            {
                path:'/order',
                element:<PrivateRoutes><YourOrder></YourOrder></PrivateRoutes>,
                loader:()=>fetch('/data.json')
            }
        ]
    }
])

export default router;