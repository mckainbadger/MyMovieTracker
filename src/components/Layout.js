import {Outlet} from "react-router-dom";
import PrimarySearchAppBar from "./PrimarySearchAppBar";

function Layout(props) {
  return (
    <div>
      <PrimarySearchAppBar/>
      <Outlet/>
    </div>
  )
}
export default Layout