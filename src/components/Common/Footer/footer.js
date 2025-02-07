import React from "react";
import "./styles.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoTracker<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/jayesh-mehra-23421422a/">
          <LinkedInIcon className="social-link" />
        </a>
        <a href="https://github.com/jayeshmehra344">
          <GitHubIcon className="social-link" />
        </a>
        <a href="https://x.com/JAYM344">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com/jayeshmehra471/">
          <InstagramIcon className="social-link" />
        </a>
        {/* www.linkedin.com/in/jayeshmehra344 */}
      </div>
    </div>
  );
}

export default Footer;


