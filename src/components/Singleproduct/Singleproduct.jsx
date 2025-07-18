import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./singleproduct.css";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
  MDBBtnGroup,
  MDBCardSubTitle,
  MDBBadge,
  MDBTableHead,
  MDBTableBody,
  MDBTable,
} from "mdb-react-ui-kit";

const Singleproduct = ({ addToCart }) => {
  const { productId } = useParams();
  const extractedId = productId.split("-").pop();

  const [product, setProduct] = useState(null);
  const [productImages, setProductImages] = useState([]);
  const [productSpecifications, setProductSpecifications] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [mainImage, setMainImage] = useState("");
  const [productPrice, setPrice] = useState(null); // State to store monthly payment
  const [monthPrice, setMonthPrice] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const handleImageClick = (imageLink) => {
    setMainImage(imageLink);
  };

  useEffect(() => {
    fetch(`https://back-texnotech.onrender.com/products/${extractedId}`)
      .then((response) => response.json())
      .then((data) => {
        const productDetails = {
          name: data.name,
          price: data.price,
          img: data.image_link,
          discount: data.discount,
          num_product: data.num_product,
          id: data.id,
        };
        setProduct(productDetails);
        setPrice(productDetails.price);

        fetch(`https://back-texnotech.onrender.com/images/${extractedId}`)
          .then((response) => response.json())
          .then((imageData) => {
            setProductImages(imageData);
            if (imageData.length > 0 && mainImage === "") {
              setMainImage(imageData[0].image_link);
            }
          })
          .catch((error) => console.error("Error fetching images:", error));

        fetch(
          `https://back-texnotech.onrender.com/p_specification/values/${extractedId}`
        )
          .then((response) => response.json())
          .then((specData) => {
            setProductSpecifications(specData);
          })
          .catch((error) =>
            console.error("Error fetching specifications:", error)
          );
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [extractedId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  const specsToShow = showAll
    ? productSpecifications
    : (productSpecifications || []).slice(0, 10);

  const handleButtonClick = (months) => {
    setSelectedPeriod(months);
    if (productPrice) {
      const calculatedPrice = productPrice / months;
      setMonthPrice(calculatedPrice);
      console.log(`Price for ${months} months:`, calculatedPrice);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <div style={{ background: "#f5f5f5", padding: "1%" }}>
        <MDBContainer fluid className="my-5 mt-0">
          <MDBRow className="justify-content-center">
            <MDBCol md="6">
              <MDBCard
                className="text-black"
                style={{ border: "0", borderRadius: "12px" }}
              >
                {/* Desktop Layout - Vertical Thumbnails */}
                <MDBRow className="d-none d-md-flex">
                  <MDBCol md="2" className="d-flex align-items-center">
                    <MDBListGroup light style={{}}>
                      {productImages.length > 0 &&
                        productImages.map((image, index) => (
                          <MDBListGroupItem
                            key={index}
                            onClick={() => handleImageClick(image.image_link)}
                            style={{ padding: "0px" }}
                          >
                            <MDBCardImage
                              src={image.image_link}
                              alt={`Product Image ${index + 1}`}
                              style={{
                                width: "100%",
                                height: "auto",
                                padding: "5%",
                              }}
                            />
                          </MDBListGroupItem>
                        ))}
                    </MDBListGroup>
                  </MDBCol>
                  <MDBCol md="10">
                    <Zoom>
                      <MDBCardImage
                        src={mainImage}
                        position="top"
                        alt="Product Image"
                      />
                    </Zoom>
                  </MDBCol>
                </MDBRow>

                {/* Mobile Layout - Horizontal Thumbnails */}
                <div className="d-md-none">
                  <MDBRow>
                    <MDBCol>
                      <Zoom>
                        <MDBCardImage
                          src={mainImage}
                          position="top"
                          alt="Product Image"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </Zoom>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="mt-3">
                    <MDBCol>
                      <div className="d-flex justify-content-center">
                        <div
                          className="d-flex flex-row gap-2 overflow-auto mobile-image-gallery"
                          style={{ maxWidth: "100%" }}
                        >
                          {productImages.length > 0 &&
                            productImages.map((image, index) => (
                              <div
                                key={index}
                                onClick={() =>
                                  handleImageClick(image.image_link)
                                }
                                className="mobile-thumbnail"
                                style={{
                                  cursor: "pointer",
                                  border: "1px solid #ddd",
                                  borderRadius: "8px",
                                  padding: "4px",
                                  backgroundColor: "white",
                                }}
                              >
                                <MDBCardImage
                                  src={image.image_link}
                                  alt={`Product Image ${index + 1}`}
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "4px",
                                  }}
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </div>
              </MDBCard>
            </MDBCol>

            <MDBCol md="6">
              <MDBCard
                className="text-black"
                style={{ border: "0", borderRadius: "12px" }}
              >
                <MDBCardBody>
                  <MDBRow>
                    <div className="text-start">
                      <MDBCardTitle
                        style={{ fontSize: "28px", fontWeight: "500" }}
                      >
                        {product.name}
                      </MDBCardTitle>
                    </div>
                  </MDBRow>

                  <MDBRow>
                    <div className="text-end">
                      <MDBCardSubTitle
                        style={{
                          color: product.num_product > 0 ? "green" : "red",
                        }}
                      >
                        {product.num_product > 0
                          ? "Məhsul mövcuddur"
                          : "Mövcud Deyil"}
                      </MDBCardSubTitle>
                    </div>
                  </MDBRow>

                  <MDBRow>
                    <hr />
                  </MDBRow>

                  <MDBRow>
                    <MDBRow>
                      <div
                        className="text-start"
                        style={{
                          width: "fit-content",
                          borderRadius: "5px",
                          textDecoration: "underline",
                        }}
                      >
                        {product.discount > 0 ? (
                          <>
                            <MDBCardText
                              style={{
                                color: "black",
                                fontSize: "20px",
                                fontWeight: "600",
                              }}
                            >
                              {(product.price - product.discount).toFixed(2)} ₼
                            </MDBCardText>
                          </>
                        ) : (
                          <MDBCardTitle
                            style={{ fontSize: "30px", fontWeight: "500" }}
                          >
                            {product.price} ₼
                          </MDBCardTitle>
                        )}
                      </div>
                    </MDBRow>

                    <MDBRow>
                      <div
                        className="text-start"
                        style={{ display: "flex", gap: "10px" }}
                      >
                        <MDBCardTitle
                          style={{
                            fontSize: "50px",
                            fontWeight: "600",
                            color: "red",
                          }}
                        >
                          {product.discount} ₼
                        </MDBCardTitle>
                        {product.discount > 0 ? (
                          <MDBCardText
                            style={{
                              color: "black",
                              fontSize: "23px",
                              fontWeight: "600",
                              textDecoration: "line-through",
                              textDecorationColor: "red",
                              paddingTop: "20px",
                            }}
                          >
                            -{product.price.toFixed(2)} ₼
                          </MDBCardText>
                        ) : (
                          <></>
                        )}
                      </div>
                    </MDBRow>
                  </MDBRow>

                  <MDBRow
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "end",
                    }}
                  >
                    <div
                      className="d-flex align-items-center"
                      style={{ width: "100%" }}
                    >
                      <MDBBtnGroup style={{ width: "100%", gap: "5px" }}>
                        <button
                          className="btn-addToCart"
                          style={{
                            width: "40%",
                            minHeight: "3.5vh",
                            borderRadius: "5px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                          }}
                          type="button"
                          onClick={() => addToCart(product)}
                        >
                          Səbətə at
                        </button>

                        <button
                          className="btn-likeProduct"
                          style={{
                            width: "10%",
                            minHeight: "100%",
                            borderRadius: "5px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer", // Makes the button more interactive
                          }}
                          type="button" // Ensures it doesn't submit a form by default
                        >
                          <svg
                            width="21"
                            height="18"
                            viewBox="0 0 21 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.8199 1.57912L9.99915 2.40163L9.1759 1.57838C7.07683 -0.520693 3.67357 -0.520693 1.5745 1.57838C-0.524569 3.67744 -0.524569 7.08071 1.5745 9.17977L9.46987 17.0751C9.76276 17.368 10.2376 17.368 10.5305 17.0751L18.432 9.17831C20.5264 7.07228 20.53 3.67857 18.4305 1.57912C16.3276 -0.523771 12.9228 -0.523767 10.8199 1.57912ZM17.3684 8.12059L10.0002 15.4842L2.63516 8.11911C1.12188 6.60583 1.12188 4.15232 2.63516 2.63904C4.14844 1.12575 6.60196 1.12575 8.11524 2.63904L9.47268 3.99648C9.77055 4.29435 10.2552 4.28854 10.5459 3.98363L11.8805 2.63978C13.3976 1.12268 15.8528 1.12268 17.3699 2.63978C18.8835 4.15343 18.8809 6.59966 17.3684 8.12059Z"
                              fill="#323232"
                            ></path>
                          </svg>
                        </button>

                        <button
                          className="btn-likeProduct"
                          style={{
                            width: "10%",
                            minHeight: "100%",
                            borderRadius: "5px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer", // Makes the button more interactive
                          }}
                          type="button" // Ensures it doesn't submit a form by default
                        >
                          <svg
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 0.75C1 0.335786 1.33579 0 1.75 0H18.25C18.6642 0 19 0.335786 19 0.75C19 1.16421 18.6642 1.5 18.25 1.5H17.208L19.9446 8.21703C19.9812 8.30688 20 8.40298 20 8.5C20 10.433 18.433 12 16.5 12C14.567 12 13 10.433 13 8.5C13 8.40298 13.0188 8.30688 13.0554 8.21703L15.792 1.5H10.75L10.75 13.5H14.75C15.9926 13.5 17 14.5074 17 15.75C17 16.9926 15.9926 18 14.75 18H5.25293C4.01029 18 3.00293 16.9926 3.00293 15.75C3.00293 14.5074 4.01029 13.5 5.25293 13.5H9.25L9.24999 1.5H4.208L6.94457 8.21703C6.98118 8.30688 7 8.40298 7 8.5C7 10.433 5.433 12 3.5 12C1.567 12 0 10.433 0 8.5C0 8.40298 0.0188248 8.30688 0.0554307 8.21703L2.792 1.5H1.75C1.33579 1.5 1 1.16421 1 0.75ZM4.50293 15.75C4.50293 16.1642 4.83872 16.5 5.25293 16.5H14.75C15.1642 16.5 15.5 16.1642 15.5 15.75C15.5 15.3358 15.1642 15 14.75 15H5.25293C4.83872 15 4.50293 15.3358 4.50293 15.75ZM5.35462 9.25H1.64538C1.94207 9.98296 2.66066 10.5 3.5 10.5C4.33934 10.5 5.05793 9.98296 5.35462 9.25ZM5.13459 7.75L3.5 3.73782L1.86541 7.75H5.13459ZM16.5 10.5C17.3393 10.5 18.0579 9.98296 18.3546 9.25H14.6454C14.9421 9.98296 15.6607 10.5 16.5 10.5ZM14.8654 7.75H18.1346L16.5 3.73782L14.8654 7.75Z"
                              fill="#323232"
                            ></path>
                          </svg>
                        </button>
                      </MDBBtnGroup>
                    </div>
                  </MDBRow>

                  <MDBRow>
                    <hr style={{ margin: "1.5% 0" }} />
                  </MDBRow>

                  <MDBRow>
                    <div className="text-start">
                      <MDBCardSubTitle style={{ fontWeight: "500" }}>
                        Hissəli alış kalkulyatoru
                      </MDBCardSubTitle>
                      <p className="text-muted" style={{ fontSize: "14px" }}>
                        Şərtlər ilk dəfə olaraq endirimli qiymətə tətbiq olunur
                      </p>
                    </div>
                  </MDBRow>

                  <MDBRow style={{ display: "flex", justifyContent: "center" }}>
                    <MDBCol md="8" style={{ borderRadius: "8px 0 0 8px" }}>
                      <MDBListGroup
                        horizontal
                        style={{ margin: "5vh auto", minHeight: "35%" }}
                        className="justify-content-center"
                      >
                        {[3, 6, 9, 12, 18].map((period) => (
                          <MDBListGroupItem
                            key={period}
                            style={{ padding: "0px", width: "20%" }}
                          >
                            <button
                              style={{
                                width: "100%",
                                minHeight: "100%",
                                borderRadius: "5px",
                                background:
                                  selectedPeriod === period
                                    ? "#575555"
                                    : "transparent",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color:
                                  selectedPeriod === period ? "white" : "grey",
                                cursor: "pointer",
                              }}
                              type="button"
                              onClick={() => handleButtonClick(period)}
                            >
                              {period} ay
                              <MDBBadge
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  marginLeft: "7px",
                                }}
                                color="danger"
                                notification
                                pill
                              >
                                0%
                              </MDBBadge>
                            </button>
                          </MDBListGroupItem>
                        ))}
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol
                      md="3"
                      style={{
                        border: "1px solid rgb(206, 204, 204)",
                        borderRadius: "15px",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ position: "relative", margin: "4vh auto" }}>
                        <MDBRow>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <MDBCardSubTitle>Aylıq ödəniş</MDBCardSubTitle>
                          </div>
                        </MDBRow>
                        <MDBRow>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              marginTop: "2%",
                              fontWeight: "600",
                            }}
                          >
                            <MDBCardTitle>
                              {monthPrice !== null
                                ? monthPrice.toFixed(2)
                                : "0.00"}
                            </MDBCardTitle>
                          </div>
                        </MDBRow>
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <div className="text-start mt-2">
                      <p
                        className="text-muted"
                        style={{ color: "rgb(206, 204, 204)" }}
                      >
                        <MDBIcon fas icon="info-circle" color="" />
                        &nbsp;Sifarişin rəsmiləşdirilməsi zamanı komissiya əlavə
                        oluna bilər
                      </p>
                    </div>
                  </MDBRow>

                  <MDBRow>
                    <hr />
                  </MDBRow>

                  <MDBRow>
                    <div className="text-start">
                      <MDBRow>
                        <MDBCardSubTitle style={{ fontWeight: "500" }}>
                          Əlavə xidmətlər:
                        </MDBCardSubTitle>
                      </MDBRow>

                      <MDBRow
                        style={{
                          marginLeft: "0",
                          minWidth: "100%",
                          marginTop: "1%",
                        }}
                      >
                        <button
                          style={{
                            width: "25%",
                            minHeight: "100%",
                            borderRadius: "5px",
                            background: "transparent",
                            border: "1px solid grey",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "grey",
                            cursor: "pointer",
                            gap: "8px",
                          }}
                          type="button" // Ensures it doesn't submit a form by default
                        >
                          <MDBIcon fas icon="plus-circle" /> Zəmanət
                        </button>
                      </MDBRow>
                    </div>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBRow
              className="justify-content-center"
              style={{ marginTop: "1%" }}
            >
              <MDBCol md="12">
                <MDBCard
                  outline="true"
                  className="text-black justify-content-center d-flex align-items-center"
                  style={{ border: "0", borderRadius: "12px" }}
                >
                  <MDBTable
                    style={{
                      borderRadius: "12px",
                      width: "95%",
                      tableLayout: "fixed",
                    }}
                  >
                    <MDBTableHead>
                      <tr>
                        <th
                          scope="col"
                          colSpan={4}
                          style={{ fontWeight: "700", fontSize: "25px" }}
                        >
                          Xüsusiyyətlər
                        </th>
                      </tr>
                    </MDBTableHead>

                    <MDBTableBody
                      style={{ fontWeight: "500", fontSize: "17px" }}
                    >
                      {(() => {
                        // First, filter specs with meaningful values
                        const validSpecs = specsToShow.filter(
                          (spec) =>
                            spec.value &&
                            spec.value.trim() !== "" &&
                            spec.value !== null &&
                            spec.value !== undefined &&
                            spec.value !== "-"
                        );

                        return validSpecs.map((spec, index) => {
                          if (index % 2 === 0) {
                            const nextSpec = validSpecs[index + 1];
                            return (
                              <tr key={index}>
                                {/* First specification */}
                                <td
                                  style={{
                                    width: "35%",
                                    whiteSpace: "normal",
                                    wordWrap: "break-word",
                                  }}
                                >
                                  {spec.name}
                                </td>
                                {spec.value.length > 50 ? (
                                  <td
                                    style={{
                                      width: "15%",
                                      textAlign: "end",
                                      whiteSpace: "nowrap",
                                      textOverflow: "ellipsis",
                                      overflow: "hidden",
                                    }}
                                    className="text-end"
                                  >
                                    {spec.value.slice(0, 47)}...
                                  </td>
                                ) : (
                                  <td
                                    style={{
                                      width: "15%",
                                      textAlign: "end",
                                      whiteSpace: "nowrap",
                                      textOverflow: "ellipsis",
                                      overflow: "hidden",
                                    }}
                                    className="text-end"
                                  >
                                    {spec.value}
                                  </td>
                                )}

                                {/* Second specification (if exists) */}
                                {nextSpec ? (
                                  <>
                                    <td
                                      style={{
                                        width: "35%",
                                        whiteSpace: "normal",
                                        wordWrap: "break-word",
                                      }}
                                    >
                                      {nextSpec.name}
                                    </td>
                                    {nextSpec.value.length > 50 ? (
                                      <td
                                        style={{
                                          width: "15%",
                                          textAlign: "end",
                                          whiteSpace: "nowrap",
                                          textOverflow: "ellipsis",
                                          overflow: "hidden",
                                        }}
                                        className="text-end"
                                      >
                                        {nextSpec.value.slice(0, 50)}
                                      </td>
                                    ) : (
                                      <td
                                        style={{
                                          width: "15%",
                                          textAlign: "end",
                                          whiteSpace: "nowrap",
                                          textOverflow: "ellipsis",
                                          overflow: "hidden",
                                        }}
                                        className="text-end"
                                      >
                                        {nextSpec.value}
                                      </td>
                                    )}
                                  </>
                                ) : (
                                  // Empty cells if no second spec in pair
                                  <>
                                    <td style={{ width: "35%" }}></td>
                                    <td style={{ width: "15%" }}></td>
                                  </>
                                )}
                              </tr>
                            );
                          }
                          return null;
                        });
                      })()}
                    </MDBTableBody>
                  </MDBTable>

                  <div
                    style={{
                      width: "100%",
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      onClick={toggleShowAll}
                      style={{
                        width: "95%", // Adjust this value as needed
                        padding: "12px", // Padding for better size
                        backgroundColor: "#d1cfcf", // Button background color
                        color: "black", // Button text color
                        fontSize: "20px", // Font size
                        border: "none", // Remove border
                        borderRadius: "8px", // Rounded corners
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                        marginTop: "0.3%",
                        marginBottom: "1.5%",
                      }}
                    >
                      {showAll ? "Daha az gör" : "Daha çox gör"}
                    </button>
                  </div>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default Singleproduct;
