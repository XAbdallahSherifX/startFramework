import React, { createElement, useState } from "react";
import Design from "./../Design/Design";
import Item from "../Item/Item";
import house from "../../assets/cabin.4417330275f78faa31c3.png";
import cake from "../../assets/cake.6554473016d32b343f02.png";
import circus from "../../assets/circus.494a4a914b5471b41f3e.png";
import controller from "../../assets/game.a940b57aa7bab2eacc52.png";
import safe from "../../assets/safe.01792c0bdc342bf4bf9c.png";
import submarine from "../../assets/submarine.48c9704ca7f8ce901038.png";
export default function Portfolio() {
  let [imageSrc, setImageSrc] = useState();
  let [display, setdisplay] = useState("d-none");
  let [sources, setsources] = useState([
    house,cake,circus,controller,safe,submarine
  ]);
  function changeIt(src) {
    setdisplay(
      "fixed-top h-100 w-100 bg-dark bg-opacity-50 d-flex justify-content-around align-items-center"
    );
    setImageSrc(src);
  }
  function removeIt() {
    setdisplay(
      "fixed-top h-100 w-100 bg-dark bg-opacity-50 d-flex justify-content-around align-items-center d-none"
    );
  }
  return (
    <section className="section-padding">
      <div id="big-layer" className={display}>
        <div className="my-container position-relative">
          <img className="w-100 rounded-4" src={imageSrc} alt="" />
          <button
            onClick={() => removeIt()}
            className="border-0 m-0 p-0 fs-1 bg-transparent position-absolute top-0 end-0 text-white"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <h2 className="text-center  fw-bold">PORTFOLIO</h2>
      <Design />
      <div className="container mt-5">
        <div className="row g-5">
          {sources.map((source)=><Item key={source} source={source} changeIt={changeIt}/>)}
        </div>
      </div>
    </section>
  );
}
