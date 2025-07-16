import React from "react";
import CategoryResults from "../../components/CategoryResults/CategoryResults";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Categoryresultspage = ({ cartItems, allProductsData, addToCart }) => {
  return (
    <>
      <Header cartItems={cartItems} />
        <CategoryResults allProductsData={allProductsData} addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default Categoryresultspage;
