import React from "react";
import me from "../../assets/avataaars.aa9aff02ddd0ef36a1724ecef4133df9.svg";
export default function Home() {
  return (
    <header className="section-padding greeny-bg d-flex align-items-center flex-column ">
      <img
        src={me}
        alt=""
        className="mt-5"
        width={255}
        height={265}
      />
      <h1 className="text-white text-center display-1 fw-bolder mt-5">START FRAMEWORK</h1>
    </header>
  );
}
