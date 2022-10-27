import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Checkout from "../Pages/Checkout";
import CourseDetails from "../Pages/Courses/CourseDetails";
import Courses from '../Pages/Courses/Courses'
import ErrorPage from "../Pages/ErrorPage";
import FaqPage from "../Pages/FaqPage";
import Home from "../Pages/Home";
import Blog from "../Pages/Share/Blog";
import Login from "../Pages/Share/Login";
import Register from "../Pages/Share/Register";
import PrivetRoute from "./PrivetRoute";


export const router = createBrowserRouter([
    {path: '/', errorElement: <ErrorPage></ErrorPage> , element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},
        {path: '/courses', loader: ()=>fetch('https://online-educatin-server.vercel.app/courses') , element: <Courses></Courses> },
        {path: '/register', element: <Register></Register>},
        {path: "/blog", element: <Blog></Blog>},
        {path: 'faq' , element: <FaqPage></FaqPage> },
        {path: 'login',   element: <Login></Login>},
        {path: 'courses/:id', loader: ({params})=> fetch(`https://online-educatin-server.vercel.app/courses/${params.id}`), element: <CourseDetails></CourseDetails>},
        {path: '/checkout/:id',  loader: ({params})=> fetch(`https://online-educatin-server.vercel.app/courses/${params.id}`), element: <PrivetRoute><Checkout></Checkout></PrivetRoute>}
        
    ]}
])