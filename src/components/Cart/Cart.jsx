import "./Cart.css";
import { useState } from "react";
import { motion } from "framer-motion";

import { FaTruckArrowRight } from "react-icons/fa6";
import { FaBoxOpen, FaWallet, FaCreditCard } from "react-icons/fa";
import { GrRadialSelected } from "react-icons/gr";


const Cart = ({
  cartItems,
  addToCart,
  deleteFromCart,
  checkOut,
  removeFromCart,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  const [isCheckoutButtonClicked, setIsCheckoutButtonClicked] = useState(false)
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false)

  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(null)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null)

  const [clientName, setClientName] = useState(null)
  const [clientSurname, setClientSurname] = useState(null)
  const [clientPhone, setClientPhone] = useState("+994")

  const handleOrder = () => {
    
    if(isCheckoutButtonClicked) {
      setIsCheckoutButtonClicked(false)
      setIsCheckoutModalOpen(false)
    }
    else if (cartItems.length > 0) {

      setIsCheckoutButtonClicked(true)
      setIsCheckoutModalOpen(true)
    }
    
  }

  const handleDeliveryOption = (option) => {
    if(option === selectedDeliveryOption) {
      setSelectedDeliveryOption(null)
    }
    else {
      setSelectedDeliveryOption(option)
    }
  }

  const handlePaymentMethod = (option) => {
    if(option === selectedPaymentMethod) {
      setSelectedPaymentMethod(null)
    }
    else {
      setSelectedPaymentMethod(option)
    }
  }

  const handlePhoneInput = (event) => {
    let value = event.target.value;

    // Ensure the input always starts with "+994"
    if (!value.startsWith("+994")) {
      value = "+994";
    }

    // Allow only digits after "+994"
    value = value.replace(/[^+\d]/g, ""); // Removes invalid characters
    if (value.length < 4) {
      value = "+994"; // Prevents full deletion
    }

    if (value.length > 13) {
      value = value.substring(0, 13);
    }

    setClientPhone(value);
  };

  const handleKeyDown = (event) => {
    // Prevent backspace/delete from removing "+994"
    if ((event.key === "Backspace" || event.key === "Delete") && clientPhone.length <= 4) {
      event.preventDefault();
    }
  };


  const handleTextInput = (event) => {
    event.target.value = event.target.value.replace(/[^a-zA-ZəüöğışçƏÜÖĞİŞÇ ]/g, ""); 
  };

  return (
    <>
      <section className="cart-items">
        <div className="container cart-flex">
          <div className="cart-details">
            {/* Checking cartlength if it's 0 thn displaying No items are added in the cart */}
            {cartItems.length === 0 && (
              <h1 className="no-items product">
                There are no items in the cart.
              </h1>
            )}
            {cartItems.map((item) => {
              // mapping through the array of data and using objects in the array to use in the page
              const productQty = item.price * item.qty;
              return (
                <div
                  className="cart-list product d_flex cart-responsive"
                  key={item.id}
                >
                  <div className="img">
                    <img
                      src={item.image_link || item.img}
                      alt="Picture of this item is unavailable"
                    />
                  </div>
                  <div className="cart-details" style={{marginLeft: "2%"}}>
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price}.00 x {item.qty}
                    </h4>
                    <span>${productQty}.00</span>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button onClick={() => removeFromCart(item)}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    <div className="cartControl d_flex">
                      <button
                        className="inCart"
                        onClick={() => addToCart(item)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                      <button
                        className="delCart"
                        onClick={() => deleteFromCart(item)}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>
          <div className="cart-total product-cart">
            <h2>Cart Summary</h2>
            <div className="d_flex">
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
            <button className="checkout" onClick={() => handleOrder(cartItems)}>
              Checkout Now!
            </button>
          </div>
        </div>

        {isCheckoutModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCheckoutModalOpen(false)}
            style={{width: "100%"}}
          >
            <motion.div
              className="bg-gray-800 rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              style={{width: "100%"}}
            > 

              <div style={{marginTop: "2.5%", display: "flex", justifyContent: "center"}}>
                <h2>Sifarişin verilməsi</h2>
              </div>

              <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                
                <div style={{ height: "200%", width: "100%", padding: "2.5% 0 2.5% 5%"}}>
                  <div
                    className="cart-list product d_flex cart-responsive"
                    style={{
                      backgroundColor: selectedDeliveryOption === 1 ? "#ffebeb" : "inherit",
                    }}
                  >
                    <div className="img" style={{display: "flex", alignItems: "center"}}>
                      <FaTruckArrowRight size="50px"/>
                    </div>
                    <div className="cart-details" style={{marginLeft: "2%"}}>
                      <h3 style={{fontWeight: "350"}}>
                        Kuryer ilə ünvana çatdırılma xidməti
                      </h3>
                      <h4 style={{marginTop: "0%"}}>
                        Muddet: 1 gun
                      </h4>
                      <span style={{marginTop: "1%"}}>
                        AZN 3.00
                      </span>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                      <div >
                        <button onClick={() => handleDeliveryOption(1)} style={{border: "none"}}>
                          <GrRadialSelected size="30px" style={{padding: "7% 5% 0% 1.5%"}}/>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div style={{ height: "200%", width: "100%", padding: "2.5% 5% 2.5% 0"}}>
                  <div
                    className="cart-list product d_flex cart-responsive"
                    style={{
                      backgroundColor: selectedDeliveryOption === 2 ? "#ffebeb" : "inherit",
                    }}
                  >
                    <div className="img" style={{display: "flex", alignItems: "center"}}>
                      <FaBoxOpen size="50px"/>
                    </div>
                    <div className="cart-details" style={{marginLeft: "2%"}}>
                      <h3 style={{fontWeight: "350"}}>
                        Təhvil məntəqələrindən təslim alma
                      </h3>
                      <h4 style={{marginTop: "0%"}}>
                        Muddet: 0 gun
                      </h4>
                      <span style={{marginTop: "1%"}}>
                        Pulsuz
                      </span>
                    </div>
                    <div className="" style={{display: "flex", alignItems: "center"}}>
                      <div className="">
                        <button onClick={() => handleDeliveryOption(2)} style={{border: "none"}}>
                          <GrRadialSelected size="30px" style={{padding: "7% 2% 0% 1.5%"}}/>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {selectedDeliveryOption === 1 ?
                <>
                  <div style={{display: "flex", justifyContent: "center"}}>
                    <h2>Ödəniş üsulu</h2>
                  </div>
                  
                  <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <div style={{ height: "200%", width: "100%", padding: "2.5% 0 2.5% 5%"}}>
                      <div
                        className="cart-list product d_flex cart-responsive"
                        style={{
                          backgroundColor: selectedPaymentMethod === 1 ? "#ffebeb" : "inherit",
                        }}
                      >
                        <div className="img" style={{display: "flex", alignItems: "center"}}>
                          <FaWallet size="40px"/>
                        </div>
                        <div className="cart-details" style={{marginLeft: "2%", display: "flex", alignItems: "center"}}>
                          <h3 style={{marginTop: "0", fontWeight: "350"}}>
                            Nağd
                          </h3>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                          <div >
                            <button onClick={() => handlePaymentMethod(1)} style={{border: "none"}}>
                              <GrRadialSelected size="30px" style={{padding: "11% 5% 0% 1.5%"}}/>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div style={{ height: "200%", width: "100%", padding: "2.5% 5% 2.5% 0"}}>
                      <div
                        className="cart-list product d_flex cart-responsive"
                        style={{
                          backgroundColor: selectedPaymentMethod === 2 ? "#ffebeb" : "inherit",
                        }}
                      >
                        <div className="img" style={{display: "flex", alignItems: "center"}}>
                          <FaCreditCard size="40px"/>
                        </div>
                        <div className="cart-details" style={{marginLeft: "2%", display: "flex", alignItems: "center"}}>
                          <h3 style={{marginTop: "0", fontWeight: "350"}}>
                            Təhvil alarkən bank kartı vasitəsi ilə
                          </h3>
                        </div>
                        <div className="" style={{display: "flex", alignItems: "center"}}>
                          <div className="">
                            <button onClick={() => handlePaymentMethod(2)} style={{border: "none"}}>
                              <GrRadialSelected size="30px" style={{padding: "11% 2% 0% 1.5%"}}/>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </>
                :
              <></>
              }

              {selectedPaymentMethod !== null && selectedDeliveryOption == 1 ? 
                <>
                  <div style={{display: "flex", justifyContent: "center"}}>
                    <h2>Alıcı kontaktları</h2>
                  </div>
                  
                  <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <div style={{ height: "200%", width: "100%", padding: "2.5% 5% 2.5% 5%"}}>
                      <div
                        className="cart-list product d_flex cart-responsive"
                      >
                        <div className="cart-details" style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "1%"}}>
                          <input id="checkoutInfoName" placeholder="Ad" type="text"
                          style={{
                            background: "#f6f9fc", width: "25%", height: "60%",
                            border: "1px solid #e6e6e6", borderRadius: "5px", padding: "1%",
                            fontSize: "17px", fontWeight: "300"
                            }}
                            value={clientName}
                            onInput={handleTextInput}
                            onChange={(e) => setClientName(e.target.value)}
                          />
                          
                          <input
                            id="checkoutInfoSurname" placeholder="Soyad" type="text"
                            style={{
                              background: "#f6f9fc", width: "25%", height: "60%",
                              border: "1px solid #e6e6e6", borderRadius: "5px", padding: "1%",
                              fontSize: "17px", fontWeight: "300"
                            }}
                            value={clientSurname}
                            onInput={handleTextInput}
                            onChange={(e) => setClientSurname(e.target.value)}
                          />
                          
                          <input 
                            id="checkoutInfoPhone" placeholder="Telefon" type="phone"
                            style={{
                              background: "#f6f9fc", width: "25%", height: "60%", 
                              border: "1px solid #e6e6e6", borderRadius: "5px", padding: "1%", 
                              fontSize: "17px", fontWeight: "300"
                            }}
                            value={clientPhone}
                            onChange={handlePhoneInput}
                          />
                        </div>
                      </div>
                    </div>
                  </div> 
                </>
                :
                <></>
              }
              

            </motion.div>
          </motion.div>
        )}
      </section>      
    </>
  );
};

export default Cart;
