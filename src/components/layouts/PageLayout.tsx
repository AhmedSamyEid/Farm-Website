import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout () {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}