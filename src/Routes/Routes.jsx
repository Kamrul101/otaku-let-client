import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import AddToys from "../Components/Pages/AddToys/AddToys";

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
        }
    ]
  },
]);

export { router };
