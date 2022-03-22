import React from "react";
import "../style/About.css";
import image1 from "../images/pancake.png";
import image2 from "../images/price.png";
import image3 from "../images/bank.png";
import image4 from "../images/CAP.jpg";

const About = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="about-container" id="aboutSection">
      <div className="container1">
        <div className="box">
          <img
            className="pancake"
            url={image1}
            src={image1}
            onClick={() => openInNewTab("https://pancakeswap.finance/")}
          />

          <h2>Trade on Pancakeswap</h2>
          <h4>
            Copy the contract adress.
            <br /> And start trading today!
          </h4>
        </div>
        <div className="box">
          <img className="price" url={image2} src={image2} />
          <h2>Price per Korv</h2>
          <p className="card-price">$0.00000251303</p>
        </div>
      </div>
      <div className="container2">
        <div className="box">
          <img className="bank" url={image3} src={image3} />
          <h2>Total supply:</h2>
          <h4>5,000,000</h4>
        </div>
        <div className="box">
          <img className="cap" url={image4} src={image4} />
          <h2>Market Cap:</h2>
          <h4>$12.6960</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
