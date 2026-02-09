import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
// import "./footer.css";
import styles from "./footer.module.css";
import styled from "styled-components";

const H1 = styled.h1`
  color: orange;
  text-align: center;
`;
export default function Footer() {
  const isActive = Math.random() > 0.5;
  return (
    <>
      <H1>Demo of Styled Components from Footer</H1>
      {/* <h1
        className={`${styles["my-heading"]}
      ${isActive ? styles["primary-color"] : styles["secondary-color"]}`}
      >
        Demo of css modules
      </h1> */}
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
