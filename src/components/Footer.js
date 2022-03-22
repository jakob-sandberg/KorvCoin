import React from "react";
import "../style/Footer.css";
import ContactForm from "./ContactForm";
import image1 from "../images/pancakeswap.png";
import image2 from "../images/bscscan.png";
import image3 from "../images/poo.png";

const Footer = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="footer-container" id="contactSection">
      <div className="footer-top">
        <div className="container-left">
          <ContactForm />
        </div>

        <div className="container-right">
          <h1>ABOUT ME</h1>
          <p>
            I’m just a guy from Sweden who’s trying to navigate through this
            jungle of code and information in the digital world. I’m studying to
            be an Frontend Developer. But I also have a newly found interest in
            the blockchain community. So this coin is my contribution. The name
            ”Korv” means hot-dog, and in Sweden we eat a lot of hot-dogs. If you
            like hot-dogs why not but an digital version of it. Who knows, maybe
            this ”korv” kan be the most expensive one in the future.
          </p>
        </div>
      </div>
      <div className="footer-links">
        <h2>USEFUL LINKS</h2>
        <div className="links-container">
          <div className="links">
            <img
              alt="bild"
              className="img23"
              url={image1}
              src={image1}
              onClick={() => openInNewTab("https://pancakeswap.finance/")}
            />
          </div>
          <div className="links">
            <img
              alt="bild"
              className="img23"
              url={image2}
              src={image2}
              onClick={() =>
                openInNewTab(
                  "https://bscscan.com/token/0xfd47bbbb2c3d18645054676f954ae98d36c8fcb8"
                )
              }
            />
          </div>
          <div className="links">
            <img
              alt="bild"
              className="img23"
              url={image3}
              src={image3}
              onClick={() =>
                openInNewTab(
                  "https://bscscan.com/token/0xfd47bbbb2c3d18645054676f954ae98d36c8fcb8"
                )
              }
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
