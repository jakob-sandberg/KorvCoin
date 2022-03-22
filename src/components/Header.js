import React from "react";
import "../style/Header.css";
import image from "../images/background.png";

import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container id="pageTop" className="py-3">
      <div className="header-container">
        <div className="header-head">
          <h1>KORVCOIN</h1>{" "}
          <div className="coin-price">
            <h3>KORV/USD</h3>
            <h3>$0.00000251303</h3>
          </div>
        </div>

        <div className="header-content">
          <div className="header-left-content">
            <img alt="bild" url={image} src={image} />
          </div>
          <div className="header-right-content">
            <p>
              KorvCoin is the new coin on the blockChain. KORV stands for{" "}
              <strong>knowledge</strong>, <strong>organized</strong>,{" "}
              <strong>return</strong>, <strong>value</strong>. But in Sweden it
              stand for something much more. Korv is probably the best lunch you
              can have. For those Korv enthusiasts out there, Ya’ll know.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
