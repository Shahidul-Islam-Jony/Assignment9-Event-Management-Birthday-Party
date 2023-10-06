import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import ContactUs from "../pages/Contact Us/ContactUs";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/contact',
                element:<ContactUs></ContactUs>
            }
        ]
    }
])

export default router;