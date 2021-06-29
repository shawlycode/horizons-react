import React from "react";
import plan from "../images/meet-1.jpeg";
import plan1 from "../images/meet-2.jpeg";
import plan2 from "../images/meet-1.jpeg";
import plan3 from "../images/meet-1.jpeg";
import "./Plans.css";

function Plans() {
  return (
    <div className="container">
      <h1>PLANS</h1>
      <hr />
      <div className="row card-row">
        <div className="col-md-3">
        <div className="card">
            <img src={plan1} className="card-img-top" alt="room" />
            <div className="card-body">
              <h4>CUSTOMIZED OFFICES</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src={plan2} className="card-img-top" alt="room" />
            <div className="card-body">
              <h4>CUSTOMIZED OFFICES</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
        <div className="card">
            <img src={plan1} className="card-img-top" alt="room" />
            <div className="card-body">
              <h4>CUSTOMIZED OFFICES</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
        <div className="card">
            <img src={plan1} className="card-img-top" alt="room" />
            <div className="card-body">
              <h4>CUSTOMIZED OFFICES</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
