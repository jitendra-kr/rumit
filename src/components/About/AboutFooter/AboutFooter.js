import React from "react";
import classes from "./AboutFooter.module.css";
import Auxilary from "../../../hoc/Auxilary/Auxilary";
import footerLogo from "../../../assets/images/logo-white.png";

const aboutFooter = (props) => (
  <Auxilary>
    <div className={classes.AboutFooter}>
      <img className={classes.FooterLogo} src={footerLogo}></img>
      <p className={classes.FooterHeading}>
        Living, learning, & leveling up one day at a time.
      </p>
      <div className={classes.SocialIcon}>
        <ul className={classes.SociailFields}>
          <li className={classes.SocialField}>
            <a href="https://github.com/rumit07" target="_blank">
              <span>
                <svg
                  className={classes.SvgInline}
                  viewBox="0 0 16 16"
                  version="1.1"
                  aria-hidden="true"
                  data-icon="github"
                  role="img"
                  focusable="false"
                  data-prefix="fab"
                >
                  <path
                    fill="currentColor"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </span>
            </a>
          </li>
          <li className={classes.SocialField}>
            <a
              href="https://www.linkedin.com/in/rumit-mittal-057403ba/"
              target="_blank"
            >
              <span>
                <svg
                  className={classes.SvgInline}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="linkedin-in"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </span>
            </a>
          </li>
          <li className={classes.SocialField}>
            <a href="mailto:rumitmittal7@gmail.com" target="_blank">
              <span>
                <svg
                  className={classes.SvgInline}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="envelope"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                  ></path>
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <p className={classes.HandCrafted}>Handcrafted by me</p>
      <p className={classes.Made}>Made with React</p>
    </div>
  </Auxilary>
);

export default aboutFooter;
