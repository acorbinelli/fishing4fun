export interface AppRoute {
  name: string;
  pathName: string;
}

export const appRoutes: AppRoute[] = [
  {
    name: "LandingPage",
    pathName: "/",
  },
  {
    name: "ACASA",
    pathName: "/acasa",
  },
  {
    name: "DUNAREA",
    pathName: "/dunarea",
  },
  {
    name: "TUTORIALE",
    pathName: "/tutoriale",
  },
  {
    name: "BLOG",
    pathName: "/blog",
  },
  {
    name: "INFO",
    pathName: "/info",
  },
  {
    name: "DESPRE F4F",
    pathName: "/despre-f4f",
  },
  {
    name: "CONTACT",
    pathName: "/contact",
  },
];
