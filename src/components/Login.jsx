import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  //  use reqres to log user in.

  return (
    <form
      className="loginform"
      onSubmit={() => {
        handleAuth(true);
        navigate(-2, { replace: true });
      }}
    >
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
