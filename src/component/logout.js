import { GoogleLogout } from "react-google-login";

const clientId =
  "429585455617-9r1sioquk753jtt8b65ib944i83ibnig.apps.googleusercontent.com";

function Logout({ setLoginData }) {
  const onSuccess = () => {
    console.log("Log out successful!");
    localStorage.removeItem("AUTH");
    setLoginData(JSON.parse(localStorage.getItem("AUTH")));
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
