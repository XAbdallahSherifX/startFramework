import React from "react";
export default function Item({source,changeIt}) {
  return (
    <div className="col-lg-4 col-md-6">
      <button
        onClick={() => {
          changeIt(source);
        }}
        className="portfolio-item p-0 m-0 border-0"
      >
        <img
          className="w-100 rounded-4"
          src={source}
          alt=""
        />
        <div className="layer rounded-4 d-flex justify-content-center align-items-center">
          <h1 className="plus">+</h1>
        </div>
      </button>
    </div>
  );
}
