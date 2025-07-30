import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className=" py-5 bg-darkblue">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-5">
              <h3 className="text-center text-white fw-bolder">LOCATION</h3>
              <p className="text-center text-white mt-4">
                2215 John Daniel Drive <br /> Clark, MO 65243
              </p>
            </div>
            <div className="col-lg-4 mt-5">
              <h3 className="text-center text-white fw-bolder">
                AROUND THE WEB
              </h3>
              <div className="icons">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <h3 className="text-center text-white fw-bolder">
                About freelancer
              </h3>
              <p className="text-center text-white fw-bolder mt-4">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Hamza Nouh
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark py-4">
        <p className="text-white text-center m-0">
          Copyright © Abdallah Sherif 2025
        </p>
      </div>
    </footer>
  );
}
