import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
export default function PageLayout () {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}