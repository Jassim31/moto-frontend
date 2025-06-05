import React from 'react'
import './Service.css'

export default function Service() {
  return (
    <div className="text-center seviceimage">
      
      <div className="bg-danger">
        <h1>Service Admission</h1>
      </div>
      <div>
        <form action="" className="text">
          <div className="mb-3">
            {" "}
            <label>
              Enter your name:
              <input type="text" />
            </label>
          </div>

          <div className="mb-3">
            <label>
              Enter your name:
              <input type="" />
            </label>
          </div>

          <div className="mb-3">
            <label for="bikes">Choose a make:</label>
            <select>
              <option value="Honda">Honda</option>
              <option value="Hero">Hero</option>
              <option value="kawasaki">kawasaki</option>
              <option value="ktm">ktm</option>
            </select>
          </div>

          <div className="mb-3">
            <label for="bikes">Choose a model:</label>
            <select>
              <option value="cbr">cbr</option>
              <option value="impulse">impulse</option>
              <option value="ninja">ninja</option>
              <option value="duke">duke</option>
            </select>
          </div>

          <div className="mb-3">
            <button className="btn btn-primary">book my service</button>
          </div>
          <></>
        </form>
      </div>
    </div>
  );
}
