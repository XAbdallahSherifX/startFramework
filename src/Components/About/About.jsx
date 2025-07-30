import React from "react";
import Design from "./../Design/Design";

export default function About() {
  return (
    <>
      <section className="section-padding greeny-bg">
        <h2 className="text-center text-white fw-bold">ABOUT</h2>
        <Design />
        <div className="container">
          <div className="row g-5 justify-content-center mt-3">
            <div className="col-lg-4">
              <p className="fs-5 text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-lg-4">
              <p className="fs-5 text-white">
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
