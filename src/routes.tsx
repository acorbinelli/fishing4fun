import { ReactElement } from "react";
import Acasa from "pages/Acasa";

export interface AppRoute{
    name: string;
    element: ReactElement;
    pathName: string;
}

export const appRoutes:AppRoute[]=[
    {
        name: "ACASA",
        element: <Acasa/>,
        pathName: "/"
    },
    {
        name: "DUNAREA",
        element: <div>HELLO FROM DUNAREA PAGE</div>,
        pathName: "/dunarea"
    },
    {
        name: "TUTORIALE",
        element: <div>HELLO FROM TUTORIALE PAGE</div>,
        pathName: "/tutoriale"
    },
    {
        name: "BLOG",
        element: <div>HELLO FROM BLOG PAGE</div>,
        pathName: "/blog"
    },
    {
        name: "INFO",
        element: <div>HELLO FROM INFO PAGE</div>,
        pathName: "/info"
    },
    {
        name: "DESPRE F4F",
        element: <div>HELLO FROM DESPRE F4F PAGE</div>,
        pathName: "/despre-f4f"
    },
    {
        name: "CONTACT",
        element: <div>HELLO FROM CONTACT PAGE</div>,
        pathName: "/contact"
    },
]