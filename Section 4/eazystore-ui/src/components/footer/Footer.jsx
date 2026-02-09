import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import "./footer.css";
export default function Footer() {
  const isActive = Math.random() > 0.5;
  return (
    <>
      <h1
        style={
          isActive
            ? { textAlign: "center", color: "#808080" }
            : { textAlign: "center", color: "green" }
        }
      >
        Showing inline CSS
      </h1>
      <footer className="footer">
        <div>
          Built with{" "}
          <FontAwesomeIcon
            icon={faHeart}
            className="footer-icon"
            aria-hidden="true"
          ></FontAwesomeIcon>{" "}
          by{" "}
          <a
            href="https://github.com/Ashishpriyadarshan"
            target="_blank"
            rel="noreferrer"
          >
            Ashish Priyadarshan
          </a>
        </div>
      </footer>
    </>
  );
}
