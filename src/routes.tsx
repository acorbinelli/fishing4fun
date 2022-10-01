import { ReactElement } from "react";
import Acasa from "pages/Acasa";
import Blog from "pages/Blog";
import Contact from "pages/Contact";
import DespreF4F from "pages/DespreF4F";
import Dunarea from "pages/Dunarea";
import Info from "pages/Info";
import LandingPage from "pages/LandingPage";
import Tutoriale from "pages/Tutoriale";

export interface AppRoute {
  name: string;
  element: ReactElement;
  pathName: string;
}

export const appRoutes: AppRoute[] = [
  {
    name: "LandingPage",
    element: <LandingPage />,
    pathName: "/",
  },
  {
    name: "ACASA",
    element: <Acasa />,
    pathName: "/acasa",
  },
  {
    name: "DUNAREA",
    element: <Dunarea />,
    pathName: "/dunarea",
  },
  {
    name: "TUTORIALE",
    element: <Tutoriale />,
    pathName: "/tutoriale",
  },
  {
    name: "BLOG",
    element: <Blog />,
    pathName: "/blog",
  },
  {
    name: "INFO",
    element: <Info />,
    pathName: "/info",
  },
  {
    name: "DESPRE F4F",
    element: <DespreF4F />,
    pathName: "/despre-f4f",
  },
  {
    name: "CONTACT",
    element: <Contact />,
    pathName: "/contact",
  },
];
