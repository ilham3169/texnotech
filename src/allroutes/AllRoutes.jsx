import { Routes, Route } from "react-router-dom";
import "../App.css";
import Cartpage from "../pages/cartpage/Cartpage";
import Homepage from "../pages/homepage/Homepage";
import Loginpage from "../pages/loginpage/Loginpage";
import Registrationpage from "../pages/registrationpage/Registrationpage";
import Allproductspage from "../pages/all-productspage/Allproductspage";
import Singleproductpage from "../pages/product-details/Singleproductpage";
import ErrorNotFound from "../components/ErrorNotFoundPage/ErrorNotFound";
import ScrollToTop from "../components/ScrollToTop";
import Delivery from "../components/Delivery/Delivery"
import SearchResult from "../components/SearchResult/SearchResult"
import Refund from "../components/Refund/Refund"
import RefundPolicy from "../components/RefundPolicy/RefundPolicy"
import Insurance from "../components/Insurance/Insurance"
import Kredit from "../components/Kredit/Kredit"
import Confidential from "../components/Confidential/Confidential"
import Price from "../components/Price/Price"
import Korporativ from "../components/Korporativ/Korporativ"
import PaymentStatusPage from "../components/PaymentStatusPage/PaymentStatusPage"


const AllRoutes = ({
  productItems,
  cartItems,
  addToCart,
  shopItems,
  deleteFromCart,
  checkOut,
  removeFromCart,
  allProductsData
}) => {
  return (
    // setting up all the routes here with react-router dom and sending necessary props to each child element all the routing is being done here
    // different components are being sent as elements when going for different routes they're stored in the pages folder
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              productItems={productItems}
              cartItems={cartItems}
              addToCart={addToCart}
              shopItems={shopItems}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cartpage
              cartItems={cartItems}
              addToCart={addToCart}
              deleteFromCart={deleteFromCart}
              checkOut={checkOut}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/login" element={<Loginpage cartItems={cartItems} />} />
        <Route
          path="/registration"
          element={<Registrationpage cartItems={cartItems} />}
        />
        <Route
          path="/all-products/:categoryId"
          element={
            <Allproductspage
              cartItems={cartItems}
              allProductsData={allProductsData}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/products/:productId"
          element={
            <Singleproductpage
              cartItems={cartItems}
              allProductsData={allProductsData}
              addToCart={addToCart}
            />
          }
        />
      
        <Route
          path="/delivery"
          element={
            <Delivery/>
          }
        />  

        <Route
          path="/refund"
          element={
            <Refund/>
          }
        />

        <Route  
          path="/refund-policy"
          element={
            <RefundPolicy/>
          }
        />

        <Route
          path="/insurance"
          element={
            <Insurance/>
          }
        />  
        
        <Route
          path="/kredit"
          element={
            <Kredit/>
          }
        />  

        <Route
          path="/konfidensialliq"
          element={
            <Confidential/>
          }
        /> 

        <Route
          path="/price"
          element={
            <Price/>
          }
        />

        <Route
          path="/korporativ"
          element={
            <Korporativ/>
          }
        />

        <Route
          path="/payment-status"
          element={
            <PaymentStatusPage/>
          }
        />


        <Route
          path="/search-result"
          element={
            <SearchResult
              cartItems={cartItems}
              addToCart={addToCart}
            />
          }
        />  

        <Route
          path="/cart" 
          element={<Cartpage />} 
        /> 



        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<ErrorNotFound cartItems={cartItems} />} />
      
        </Routes>
    </>
  );
};

export default AllRoutes;