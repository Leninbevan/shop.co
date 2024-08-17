import React, { Suspense, useState } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "../styles/approutes.css"
import { privateRoutes, publicRoutes } from '../utils/appRoutes'

const Approutes = () => {
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('authentication')));
    const state = useSelector((state) => state.user.value.authentication);
    return (
        <BrowserRouter>
            <Routes>
                {auth?
                    privateRoutes.map((route,index)=>{
                        let Component = route.component;
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