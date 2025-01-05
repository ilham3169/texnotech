import React from "react";
import Flashcard from "./Flashcard";

const Flashdeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className="flash background">
        <div className="flashdeal container">
          <div className="heading">
            <i className="fa fa-bolt"></i>
            <h1>Super Təkliflər</h1>
            <div className="heading-right row">
              <span>Hamsına Bax</span>
              <i className="fa fa-caret-right"></i>
            </div>
          </div>
          <Flashcard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default Flashdeals;