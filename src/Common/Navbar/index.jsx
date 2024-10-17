import { lazy, Suspense } from "react";
const Comps = {
  Home: lazy(() => import("./Home")),
  About: lazy(() => import("./About")),
};
const Navbar = ({
  // eslint-disable-next-line react/prop-types
  Page = "Home", // home , about
}) => {
  return <Suspense>{Comps[Page]}</Suspense>;
};
export default Navbar;
