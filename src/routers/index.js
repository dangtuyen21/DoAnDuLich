import Home from "../pages/Home";
import Review from "../pages/Reviews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import More from "../pages/More";
import Details from "../pages/Details";
import LoginAdmin from "../pages/Admin/LoginAdmin/LoginAdmin";
import HomeAdmin from "../pages/Admin/HomeAdmin/HomeAdmin";
import Error from "../pages/Error";
import Employee from "../pages/Admin/Employee";
import AddEmployee from "../pages/Admin/Employee/AddEmployee";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/review", component: Review },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/more-summer", component: More },
  { path: "/details/:id", component: Details },
  { path: "*", component: Error },
  { path: "/admin-login", component: LoginAdmin },
  { path: "/admin-home", component: HomeAdmin },
  { path: "/employee", component: Employee },
  { path: "/AddEmployee", component: AddEmployee },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
