import "./styles.css";
import { ReactComponent as Logo } from "./logo.svg";

function NavBar() {
  return (
    <nav className="main-navbar">
      <Logo />
      <a className="logo-text" href="#">
        DS Delivery
      </a>
    </nav>
  );
}

export default NavBar;
