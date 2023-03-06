import React, { useContext, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider, Route, createRoutesFromElements,  } from "react-router-dom";
import { TechCrunchContext } from "./context/TechCrunchContext";
import Navbar from "./components/navbar/Navbar";
import axios from "axios";
import Home from "./pages/home/Home";
import Author from "./pages/author/Author";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="author/:id" element={<Author />} />
            </Route>
        </>
    )
)

const App = () => {
    const { dispatch } = useContext(TechCrunchContext);

    useEffect(()=>{
        const fetchData = async() => {
            dispatch({ type: "LOADING_START" })
            try{
                const res = await axios.get("https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed");
                console.log(res.data);
                dispatch({ type: "LOADING_SUCCESS", payload: res.data });
            }catch(err){
                console.log(err);
                dispatch({ type: "LOADING_FAILURE" });
            }
        }
        fetchData();
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="mainApp">
            <RouterProvider router={router} />
        </div>
    )
}

export default App