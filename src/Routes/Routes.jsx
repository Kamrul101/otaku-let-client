import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import AddToys from "../Components/Pages/AddToys/AddToys";
import AllToys from "../Components/Pages/AllToys/AllToys";

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
            element:<AddToys></AddToys>
        },
        {
            path:'/allToys',
            element:<AllToys></AllToys>,
            loader:()=> fetch('http://localhost:5000/toys')
        }
    ]
  },
]);

export { router };
