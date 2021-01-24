import "./styles.css";
import { ReactComponent as YoutubeIcon } from "./youtube.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";
import { ReactComponent as LinkedinIcon } from "./linkedin.svg";

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://www.youtube.com/" target="_new"></a>
        <YoutubeIcon />
        <a
          href="https://www.linkedin.com/in/matheus-souza-pereira-da-silva/"
          target="_new"
        >
          <LinkedinIcon />
        </a>
        <a href="#" target="_new">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
