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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
            loader:()=> fetch('http://localhost:5000/toys')
        },
        {
            path:'/singleToyDetail/:id',
            element:<PrivateRoute><SingleToyDetail></SingleToyDetail></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
            path:"/myToys",
            element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,
            
            
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        }
    ]
  },
]);

export { router };
