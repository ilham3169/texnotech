import React, { useState, useEffect } from "react";
import AllRoutes from "./allroutes/AllRoutes";
import { useNavigate } from "react-router-dom";
import FlashDealsData from "./components/FlashDeals/flashDealsData";
import ShopData from "./components/Shop/shopData";
import AllProductsData from "./components/Allproducts/allProductsData";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import CartButton from "./components/CartButton/CartButton";




function App() {

  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
  
  const { productItems } = FlashDealsData;
  const { shopItems } = ShopData;
  const { allProductsData } = AllProductsData;
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);




  const addToCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExists, qty: productExists.qty + 1 }
            : item
        )
      );
      toast.success("Məhsulun sayı artırıldı");
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      toast.success("Məhsul səbətə əlavə edildi");
    }
  };
  const deleteFromCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists.qty === 1) {
      const shouldRemove = window.confirm(
        "Bu məhsulu səbətdən silmək istədiyinizə əminsiniz?"
      );

      if (shouldRemove) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
        toast.success("Məhsul səbətdən silindi");
      }
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExists, qty: productExists.qty - 1 }
            : item
        )
      );
      toast.success("Məhsulun sayı azadıldı");
    }
  };
  const checkOut = (cartItems) => {

    const loggedIn = true;

    if (loggedIn) {
      if (cartItems.length <= 0) {
        toast.error("Add an item in the cart to checkout");
      } else {
        const confirmOrder = window.confirm(
          "Are you sure you want to order all these products?"
        );

        if (confirmOrder) {
          setCartItems([]);
          toast.success("Order placed, Thanks!!");
        }
      }
    } else {
      toast("You must login first!", {
        icon: "🤯",
      });
      navigate("/login", { replace: true });
    }
  };

  const removeFromCart = (product) => {
    const shouldRemove = window.confirm(
      "Bu məhsulu səbətdən silmək istədiyinizə əminsiniz?"
    );

    if (shouldRemove) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
      toast.success("Item removed from cart");
    }
  };

  return (
    <>
      <Toaster />
      <AllRoutes
        removeFromCart={removeFromCart}
        productItems={productItems}
        cartItems={cartItems}
        addToCart={addToCart}
        shopItems={shopItems}
        deleteFromCart={deleteFromCart}
        checkOut={checkOut}
        allProductsData={allProductsData}
      />
      <CartButton
        cartItemCount={cartItems.length}  // Pass the cart item count
        onClick={() => checkOut(cartItems)}  // You can modify the onClick action here
      />
    </>
  );
}

export default App;
