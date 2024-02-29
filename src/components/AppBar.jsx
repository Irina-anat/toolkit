import { Link } from "react-router-dom";
import { UserMenu } from "./UserMenu";
import { useSelector } from "react-redux";

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (    
    <header className="mt-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex justify-content-between align-items-center">
          {!isLoggedIn && (
            <Link to="/login" className="navbar-brand">
              Log in
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/dashboard" className="navbar-brand">
              Dashboard
            </Link>
          )}
          {isLoggedIn && <UserMenu />}
        </div>
      </nav>
    </header>
  );
}; 