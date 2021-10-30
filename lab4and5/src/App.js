import { Route, Redirect, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Posts } from "./pages/Posts";
import { UserDetails } from "./pages/UserDetails";
import { Users } from "./pages/Users";
import { ContactUs } from "./pages/ContactUs";
import { Login } from "./pages/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useContext } from "react";
import { AuthContext } from "./contexts";

export const App = () => {
  const authContext = useContext(AuthContext);
  return (
    <>
      {authContext.isLoggedIn&&<Navbar/>}
      <div className="container">
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <ProtectedRoute path="/posts">
            <Posts></Posts>

          </ProtectedRoute>
          
          <Route path="/users/:id">
            <UserDetails />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/">
            <Redirect to="/posts" />
          </Route>
        </Switch>
      </div>
    </>
  );
};
