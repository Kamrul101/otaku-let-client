import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import AddToys from "../Components/Pages/AddToys/AddToys";
import AllToys from "../Components/Pages/AllToys/AllToys";
import SingleToyDetail from "../Components/Pages/AllToys/SingleToyDetail";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import MyToy from "../Components/Pages/MyToy/MyToy";
import UpdateToy from "../Components/Pages/MyToy/UpdateToy";
import Error from "../Components/Pages/Error/Error";
import Blog from "../Components/Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addToys',
            element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
            path:'/allToys',
            element:<AllToys></AllToys>,
            // loader:()=> fetch(`https://toy-store-server-pi.vercel.app/toys?search=${search}`)
        },
        {
            path:'/singleToyDetail/:id',
            element:<PrivateRoute><SingleToyDetail></SingleToyDetail></PrivateRoute>,
            loader:({params})=>fetch(`https://toy-store-server-pi.vercel.app/toys/${params.id}`)
        },
        {
            path:"/myToys",
            element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,
            
            
        },
        {
            path:'/update/:id',
            element:<UpdateToy></UpdateToy>,
            loader:({params})=> fetch(`https://toy-store-server-pi.vercel.app/toys/${params.id}`)
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path:'blogs',
            element:<Blog></Blog>
        }
    ]
  },
]);

export { router };
