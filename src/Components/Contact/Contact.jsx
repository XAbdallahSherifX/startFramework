import React from "react";
import Design from "./../Design/Design";

export default function Contact() {
  return (
    <>
      <section className="section-padding">
        <h2 className="text-center fw-bold">CONTACT US</h2>
        <Design />
        <div className="container">
          <form>
            <div className="form-floating mt-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput2"
                placeholder="Name"
              />
              <label htmlFor="floatingInput2">Name</label>
            </div>
            <div className="form-floating mt-3">
              <input
                type="email"
                className="form-control"
                id="floatingPassword"
                placeholder="Email Address"
              />
              <label htmlFor="floatingPassword">Email Address</label>
            </div>
            <div className="form-floating mt-3">
              <input
                type="tel"
                className="form-control"
                id="floatingInput1"
                placeholder="Phone Number"
              />
              <label htmlFor="floatingInput1">Phone Number</label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control mt-3"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label htmlFor="floatingTextarea">Message</label>
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="btn btn-success px-3 py-2 mb-3 fs-3"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
