import React from 'react'
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div>
      <div>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <Link to="/productadd">ADD</Link>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active" href="#">
              HIDDEN
            </a>
          </li>
        </ul>
      </div>
      <div className="container row">
        <div className="col">
          <div className="card " style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                View
              </a>
              <a href="#" className="btn btn-primary">
                Edit
              </a>
              <a href="#" className="btn btn-primary">
                Delete
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card " style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                View
              </a>
              <a href="#" className="btn btn-primary">
                Edit
              </a>
              <a href="#" className="btn btn-primary">
                Delete
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card col ms-2 me-2 mt-2 mb-2"
            style={{ width: "18rem" }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                View
              </a>
              <a href="#" className="btn btn-primary">
                Edit
              </a>
              <a href="#" className="btn btn-primary">
                Delete
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card col ms-2 me-2 mt-2 mb-2"
            style={{ width: "18rem" }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                View
              </a>
              <a href="#" className="btn btn-primary">
                Edit
              </a>
              <a href="#" className="btn btn-primary">
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
