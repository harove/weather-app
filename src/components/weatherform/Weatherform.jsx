import React from "react";
import "./Weatherform.css";
import {Card} from 'reactstrap';

/**
 * Weatherform
 * @version v1.0.0
 *
 * @param {*} props
 */
const Weatherform = ({getWeather}) => {
  return (
    <div className="container">
      <form onSubmit = {getWeather}>
        <div className="weatherform">
          <div className="row">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                name="city"
                autoComplete="off"
                placeholder="City"
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                name="country"
                autoComplete="off"
                placeholder="Country"
              />
            </div>
            <div className="col-md-4 mt-md-0">
              <button className="btn-warning">get weather</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Weatherform;
