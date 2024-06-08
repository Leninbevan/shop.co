import { lazy } from "react";

export const publicRoutes = [

    {
        routeId: "R001",
        name: "Login",
        path: "/",
        component: lazy(() => import("../pages/Login/login")),
    },

    {
        routeId: "R003",
        name: "Forget Password",
        path: "/forgetpassword",
        component: lazy(() => import("../pages/Login/forgetpassword")),
    },

    {
        routeId: "R004",
        name: "Verification",
        path: "/verification",
        component: lazy(() => import("../pages/Login/verification")),
    },
    {
        routeId: "R005",
        name: "ResetPassword",
        path: "/resetpassword",
        component: lazy(() => import("../pages/Login/resetpassword")),
    },
];


export const privateRoutes =[
    {
        routeId: "R006",
        name: "Home",
        path: "/",
        component: lazy(() => import("../pages/Home/home")),
    },
]