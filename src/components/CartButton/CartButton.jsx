// CartButton.js
import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // You can use any icon
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CartButton = ({ cartItemCount }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleCartClick = () => {
    navigate("/cart"); // Redirect to /cart page
  };

  return (
    <div className="cart-button" onClick={handleCartClick}>
      <FaShoppingCart size={24} />
      <span>Səbətə Keç</span>
      <span className="cart-item-count">{cartItemCount}</span>
    </div>
  );
};

export default CartButton;
