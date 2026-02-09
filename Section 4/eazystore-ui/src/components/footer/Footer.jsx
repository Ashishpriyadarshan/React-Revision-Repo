import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
// import "./footer.css";
import styles from "./footer.module.css";

export default function Footer() {
  const isActive = Math.random() > 0.5;
  return (
    <>
      <h1
        className={`${styles["my-heading"]}
      ${isActive ? styles["primary-color"] : styles["secondary-color"]}`}
      >
        Demo of css modules
      </h1>
      <footer className={styles.footer}>
        <div>
          Built with{" "}
          <FontAwesomeIcon
            icon={faHeart}
            className={styles["footer-icon"]}
            //have to use double quotes like array as we have to include the exact css class name
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
