import "./Cart.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaBoxOpen, FaWallet, FaCreditCard, FaCheck } from "react-icons/fa";
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

  const [isCheckoutButtonClicked, setIsCheckoutButtonClicked] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const [clientName, setClientName] = useState("");
  const [clientSurname, setClientSurname] = useState("");
  const [clientPhone, setClientPhone] = useState("+994");

  useEffect(() => {
    if (cartItems.length < 1) {
      setIsCheckoutButtonClicked(false);
      setIsCheckoutModalOpen(false);
      setIsSuccessModalOpen(false);
      setClientName("");
      setClientSurname("");
      setClientPhone("");
      setSelectedDeliveryOption(null);
      setSelectedPaymentMethod(null);
    }
  }, [cartItems]);

  const handleOrder = () => {
    if (isCheckoutButtonClicked) {
      setIsCheckoutButtonClicked(false);
      setIsCheckoutModalOpen(false);
    } else if (cartItems.length > 0) {
      setIsCheckoutButtonClicked(true);
      setIsCheckoutModalOpen(true);
    }
  };

  const handleDeliveryOption = (option) => {
    if (option === selectedDeliveryOption) {
      setSelectedDeliveryOption(null);
    } else {
      setSelectedDeliveryOption(option);
    }
  };

  const handlePaymentMethod = (option) => {
    if (option === selectedPaymentMethod) {
      setSelectedPaymentMethod(null);
    } else {
      setSelectedPaymentMethod(option);
    }
  };

  const handlePhoneInput = (event) => {
    let value = event.target.value;
    if (!value.startsWith("+994")) {
      value = "+994";
    }
    value = value.replace(/[^+\d]/g, "");
    if (value.length < 4) {
      value = "+994";
    }
    if (value.length > 13) {
      value = value.substring(0, 13);
    }
    setClientPhone(value);
  };

  const handleTextInput = (event) => {
    event.target.value = event.target.value.replace(/[^a-zA-ZəüöğışçƏÜÖĞİŞÇ ]/g, "");
  };

  const handleConfirmOrder = () => {
    if (
      clientName.length > 0 &&
      clientSurname.length > 0 &&
      clientPhone.length === 13
    ) {
      if (selectedPaymentMethod === 2) {
        console.log("Redirect to Kapital Bank");
        if (selectedDeliveryOption === 1) {
          console.log("Create Order with credit card and Courier delivery");
        } else if (selectedDeliveryOption === 2) {
          console.log("Create Order with credit card and Self pickup");
        }
        setIsCheckoutModalOpen(false);
        setIsSuccessModalOpen(true);
      } else if (selectedPaymentMethod === 1) {
        if (selectedDeliveryOption === 1) {
          console.log("Create Order with Cash and Courier delivery");
          console.log(`Client name -> ${clientName}\nClient Surname -> ${clientSurname}\nClient Phone -> ${clientPhone}`);
          
          let totalPrice = 0;
          cartItems.forEach(item => {
            console.log(`Product: ${item.name}`);
            console.log(`Quantity: ${item.qty}`);
            console.log(`Price: ${item.price} AZN`);
            console.log(`Product id: ${item.id}`);
            totalPrice += item.price * item.qty;
          });

          const orderData = {
            name: clientName,
            surname: clientSurname,
            phone_number: clientPhone,
            total_price: totalPrice,
            status: "pending",
            payment_status: "unpaid",
            payment_method: "cash"
          };

          fetch('https://back-texnotech.onrender.com/orders/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData)
          })
          .then(response => response.json())
          .then(data => {
            console.log("Order created successfully:", data);
            const orderId = data.id;

            cartItems.forEach(item => {
              const orderItemsData = {
                order_id: orderId,
                product_id: item.id,
                quantity: item.qty,
                price_at_purchase: item.price
              };

              fetch('https://back-texnotech.onrender.com/order_items/add', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderItemsData)
              })
              .then(response => response.json())
              .then(itemData => {
                console.log(`Item added successfully:`, itemData);
              })
              .catch(error => {
                console.error(`Error adding item to order:`, error);
              });
            });

            setIsCheckoutModalOpen(false);
            setIsSuccessModalOpen(true);
            checkOut();
          })
          .catch(error => {
            console.error("Error creating order:", error);
          });
        } else if (selectedDeliveryOption === 2) {
          console.log("Create Order with Cash and Self pickup");
          setIsCheckoutModalOpen(false);
          setIsSuccessModalOpen(true);
        }
      }
    } else {
      console.log("User information is not completed");
    }
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <>
      <section className="cart-items">
        <div className="container cart-flex">
          <div className="cart-details">
            {cartItems.length === 0 && (
              <>
                <h1 className="no-items product" style={{textAlign: "center"}}>
                  Səbətində məhsul yoxdur
                  <p style={{fontWeight: "500", fontSize: "17px", color: "grey"}}>İstədiyin məhsulu səbətinə əlavə et</p>
                </h1>
              </>
            )}
            {cartItems.map((item) => {
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
                    <span>{productQty}.00 AZN</span>
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
            <h2>Səbət</h2>
            <div className="d_flex">
              <h4>Toplam qiymət :</h4>
              <h3>{totalPrice}.00 AZN</h3>
            </div>
            <button 
              className="checkout" 
              style={{background: "#ffebeb", fontSize: "15px"}} 
              onClick={() => handleOrder(cartItems)}
            >
              Sifarişi rəsmiləşdir!
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
                        Kuryer ilə ünvana çatdırılma
                      </h3>
                      <h4 style={{marginTop: "0%"}}>
                        Müddət: 1 gün
                      </h4>
                      <span style={{marginTop: "1%"}}>
                        AZN 3.00
                      </span>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                      <button onClick={() => handleDeliveryOption(1)} style={{border: "none"}}>
                        <GrRadialSelected size="30px" style={{padding: "7% 5% 0% 1.5%"}}/>
                      </button>
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
                        Müddət: 0 gün
                      </h4>
                      <span style={{marginTop: "1%"}}>
                        Pulsuz
                      </span>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                      <button onClick={() => handleDeliveryOption(2)} style={{border: "none"}}>
                        <GrRadialSelected size="30px" style={{padding: "7% 2% 0% 1.5%"}}/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {selectedDeliveryOption != null && (
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
                          <button onClick={() => handlePaymentMethod(1)} style={{border: "none"}}>
                            <GrRadialSelected size="30px" style={{padding: "11% 5% 0% 1.5%"}}/>
                          </button>
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
                            Bank kartı
                          </h3>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                          <button onClick={() => handlePaymentMethod(2)} style={{border: "none"}}>
                            <GrRadialSelected size="30px" style={{padding: "11% 2% 0% 1.5%"}}/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

            {selectedPaymentMethod !== null && (
              <>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h2>Alıcı kontaktları</h2>
                </div>
                
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                  <div className="client-info-container" style={{ height: "200%", width: "100%", padding: "2.5% 5% 2.5% 5%" }}>
                    <div className="cart-list product d_flex cart-responsive" style={{ background: "transparent" }}>
                      <div className="cart-details client-inputs" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1%" }}>
                        <input 
                          id="checkoutInfoName" 
                          placeholder="Ad" 
                          type="text"
                          style={{
                            background: "#f6f9fc", 
                            width: "60%", 
                            height: "50px", 
                            border: "1px solid #e6e6e6", 
                            borderRadius: "8px", 
                            padding: "12px 15px", 
                            fontSize: "20px", 
                            fontWeight: "300"
                          }}
                          value={clientName}
                          onInput={handleTextInput}
                          onChange={(e) => setClientName(e.target.value)}
                        />
                        
                        <input
                          id="checkoutInfoSurname" 
                          placeholder="Soyad" 
                          type="text"
                          style={{
                            background: "#f6f9fc", 
                            width: "60%", 
                            height: "50px", 
                            border: "1px solid #e6e6e6", 
                            borderRadius: "8px", 
                            padding: "12px 15px", 
                            fontSize: "20px", 
                            fontWeight: "300"
                          }}
                          value={clientSurname}
                          onInput={handleTextInput}
                          onChange={(e) => setClientSurname(e.target.value)}
                        />
                        
                        <input 
                          id="checkoutInfoPhone" 
                          placeholder="Telefon" 
                          type="phone"
                          style={{
                            background: "#f6f9fc", 
                            width: "60%", 
                            height: "50px", 
                            border: "1px solid #e6e6e6", 
                            borderRadius: "8px", 
                            padding: "12px 15px", 
                            fontSize: "20px", 
                            fontWeight: "300"
                          }}
                          value={clientPhone}
                          onChange={handlePhoneInput}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

              {selectedPaymentMethod != null && (
                <div className="cart-total" style={{padding: "0 5% 3% 5%"}}>
                  <button 
                    className="checkout"
                    style={{
                      width: "50%",
                      fontSize: "17px",
                      fontWeight: "500",
                      background: "#ffebeb",
                    }}
                    onClick={handleConfirmOrder}
                  >
                    Təsdiqlə və davam et
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}

      {isSuccessModalOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseSuccessModal}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg flex flex-col items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              maxWidth: "400px",
              padding: "2rem",
            }}
          >
            <FaCheck className="text-green-500 mb-4" size={40} />
            <h2 className="text-xl font-bold text-gray-900 mb-2" style={{ textAlign: "center !important" }}>
              Sifarişiniz Uğurla Qəbul Edildi!
            </h2>
            <p className="text-gray-700 mb-4 text-sm" style={{ textAlign: "center !important", marginBottom: "10px"}}>
              Tezliklə sizə ətraflı məlumat üçün əlaqə saxlayacayıq.
            </p>
            <button
              className="text-gray-900 px-5 py-2 rounded-lg transition-colors"
              style={{
                background: "#ffebeb", // Light pink background consistent with your theme
                fontSize: "16px",
                fontWeight: "500",
                border: "1px solid #e6e6e6", // Subtle border
                borderRadius: "8px", // Slightly rounded corners
                padding: "10px 20px", // Comfortable padding
                cursor: "pointer",
                transition: "all 0.3s ease", // Smooth transition for hover effects
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#ffd4d4"; // Slightly darker pink on hover
                e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.15)"; // Enhanced shadow on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#ffebeb"; // Revert to original background
                e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)"; // Revert shadow
              }}
              onClick={handleCloseSuccessModal}
            >
              Bağla
            </button>
          </motion.div>
        </motion.div>
      )}
      </section>
    </>
  );
};

export default Cart;