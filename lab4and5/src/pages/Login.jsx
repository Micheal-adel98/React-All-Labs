import { Input } from "../components/Input";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Posts } from "../pages/Posts";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts";
import { useContext } from "react";
export const Login = () => {
  const isLoggedIn = localStorage.getItem("token") === "12345";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidCred, setIsValidCred] = useState(true);
  const history = useHistory();
  const authContext = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (authContext.login(email, password)) history.replace("/main-page");
    else setIsValidCred(false);
  };
  return(
    <div className="d-flex justify-content-center">
      <form className="card p-3 col-6" onSubmit={handleSubmit}>
        <Input value={email} setValue={setEmail} label="Email" />
        <Input value={password} setValue={setPassword} label="Password" />
        {!isValidCred && (
          <div className="alert alert-danger">Invalid login credentials</div>
        )}
        <button className="btn btn-primary">Log-in</button>
      </form>
    </div>
  );
};
