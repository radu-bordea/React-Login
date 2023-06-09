import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
      <button className="logout" onClick={() => logout({returnTo: window.location.origin})}>Sign Out</button>
  );
};

export default LogoutButton;
