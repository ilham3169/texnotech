import SearchResult from "../../components/SearchResult/SearchResult";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Searchproductspage = ({ cartItems, addToCart }) => {
  return (
    <>
      <Header cartItems={cartItems} />
        <SearchResult addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default Searchproductspage;
