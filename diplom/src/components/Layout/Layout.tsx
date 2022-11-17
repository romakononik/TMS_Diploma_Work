import { Outlet } from "react-router-dom";
import { Footer, Header } from "../index"
import "./layout.css"


export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>

  )
}

