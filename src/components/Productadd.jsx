import React from 'react'

export default function Productadd() {
  return (
    <div className="">
      <div className="bg-danger text-center">
        <h1>Add new Product</h1>
      </div>
      <div className=" d-flex justify-content-center mt-5 ms-5 me-5 mb-5 border p-5">
        <form action="" className="text">
          <div className="mb-3">
            insert product image:
            <input type="file" />
          </div>
          <div className="mb-3">
            price: <input type="number" />
          </div>
          <div className="mb-3">
            {" "}
            <label>
              Enter the product name:
              <input type="text" />
            </label>
          </div>

          <div className="mb-3">
            <label>
              Enter the product description:
              <input type="text" />
            </label>
          </div>
          <div className="text-center">
            <button>SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}
