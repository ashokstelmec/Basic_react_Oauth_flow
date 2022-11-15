// import { useGoogleLogin } from 'react-google-login';
import LoginButton from "./component/login";
import LogoutButton from "./component/logout";
import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import "./App.css";

const clientId =
  "429585455617-9r1sioquk753jtt8b65ib944i83ibnig.apps.googleusercontent.com";

const App = () => {
  const [loginData, setLoginData] = useState(null);

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };

    gapi.load("client:auth2", start);
  }, []);

  // var accessToken = gapi.auth.getToken().access_token;

  return (
    <div className="App">
      {loginData == null ? (
        <LoginButton setLoginData={setLoginData} />
      ) : (
        <LogoutButton  setLoginData={setLoginData}/>
      )}
    </div>
  );
};

export default App;
