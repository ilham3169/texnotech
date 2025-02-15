import React from "react";

export const Head = () => {
  return (
    <>
      <section className="head">
        <div className="header-container d_flex">
          <div className="left-row">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=994775116975"
              className="icon-flex phone-icon"
            >
              <i className="fa fa-phone"></i>
              <label className="phone-icon" htmlFor="">
                +994705854432
              </label>
            </a>
            <a
              target="_blank"
              href="mailto:xxxxxxxx@gmail.com"
              className="icon-flex phone-icon"
            >
              <i className="fa fa-envelope"></i>
              <label className="phone-icon" htmlFor="">
                xxxxxxxx@gmail.com
              </label>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
