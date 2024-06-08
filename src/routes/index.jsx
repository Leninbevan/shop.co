import React, { Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../utils/appRoutes'
import { Box } from '@mui/material'
import Loder from "../assests/Logo/logo@2x-free-img.png"
import "../styles/approutes.css";
import { useSelector } from 'react-redux'

const Approutes = () => {
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('authentication')));
    const state = useSelector((state) => state.user.value.authentication);
    console.log("state",state);
    return (
        <BrowserRouter>
            <Routes>
                {auth?
                    privateRoutes.map((route,index)=>{
                        let Component = route.component;
                        console.log(route.path);
                        return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Component />}
                                />
                        )
                    })
                    :
                    publicRoutes.map((route, index) => {
                        let Component = route.component;
                        return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Suspense>
                                            <Component />
                                        </Suspense>
                                    }
                                />
                        )
                    })
                }
            </Routes>
        </BrowserRouter>
    )
}

export default Approutes