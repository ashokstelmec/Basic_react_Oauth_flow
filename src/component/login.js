import { GoogleLogin } from "react-google-login";

const clientId =
  "429585455617-9r1sioquk753jtt8b65ib944i83ibnig.apps.googleusercontent.com";

function Login({ setLoginData }){
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    localStorage.setItem("AUTH", JSON.stringify(res.profileObj));
    setLoginData(JSON.parse(localStorage.getItem("AUTH")));
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
