import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../layouts/Root/Root";
import Courses from "../components/Courses/Courses";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Register from '../components/Register/Register';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {path:'/' , element:<Home></Home>},
            {path:'/courses' , element: <Courses></Courses>},
            {path:'/blog' , element:<Blog></Blog>},
            {path:'/login' , element:<Login></Login>},
            {path:'/register', element:<Register></Register>}
        ] 

    }
])