import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../layouts/Root/Root";
import Courses from "../components/Courses/Courses";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Register from '../components/Register/Register';
import CourseCards from "../components/Courses/CourseCards/CourseCards";
import CourseDetails from "../components/Courses/CourseDetails/CourseDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {path:'/' , element:<Home></Home>},
            {path:'/courses' , element: <Courses></Courses> , loader: () => fetch('http://localhost:5000/course')    , children: [ { path:'/courses/:id' , element:  <CourseCards></CourseCards> , loader : ({params})=> fetch(`http://localhost:5000/course-category/${params.id}`) }  ]  },
            {path:'/course/:id', element:<CourseDetails></CourseDetails> , loader:({params})=> fetch(`http://localhost:5000/course/${params.id}`)},
            {path:'/blog' , element:<Blog></Blog>},
            {path:'/login' , element:<Login></Login>},
            {path:'/register', element:<Register></Register>}
        ] 

    }
])