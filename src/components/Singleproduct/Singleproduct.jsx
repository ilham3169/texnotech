import React, { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom"; 
import "./singleproduct.css";

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
  const extractedId = productId.split('-').pop();

  const [product, setProduct] = useState(null); 
  const [productImages, setProductImages] = useState([]);


  useEffect(() => {
    fetch(`https://back-texnotech.onrender.com/products/${extractedId}`)
      .then((response) => response.json())
      .then((data) => {
        const productDetails = {
          name: data.name,
          price: data.price,
          img: data.image_link,
          discount: data.discount,
          num_product: data.num_product
        };
        setProduct(productDetails);

        fetch(`https://back-texnotech.onrender.com/images/${extractedId}`)
          .then((response) => response.json())
          .then((imageData) => {
            setProductImages(imageData);  // Store images in state
          })
          .catch((error) => console.error("Error fetching images:", error));
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [extractedId]); 

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <div style={{background: "#f5f5f5", padding: "1%"}}>
        <MDBContainer fluid className="my-5 mt-0">
          <MDBRow className="justify-content-center">
            <MDBCol md="6">
              <MDBCard className="text-black" style={{border: "0", borderRadius: "12px"}}>
                <MDBRow>
                  <MDBCol md="2" className="d-flex align-items-center">

                    <MDBListGroup light style={{marginLeft: "13%"}}>
                      <MDBListGroupItem>
                      {productImages.length > 0 && productImages.map((image, index) => (
                        <MDBCardImage
                          key={index}
                          src={image.image_link}
                          alt={`Product Image ${index + 1}`}
                          className="mb-3"
                          style={{ width: "100%", height: "auto" }}
                        />
                      ))}                        
                      </MDBListGroupItem>
                    </MDBListGroup>
                    
                    </MDBCol>
                      <MDBCol md="10">
                        <MDBCardImage
                          src={product.img} 
                          position="top"
                          alt="Product Image"
                        />
                    </MDBCol>

                </MDBRow>
              </MDBCard>
            </MDBCol>

            <MDBCol md="6">
              <MDBCard className="text-black" style={{border: "0", borderRadius: "12px"}}>
                <MDBCardBody>
                  <MDBRow>
                    <div className="text-start">
                      <MDBCardTitle style={{fontSize: "28px", fontWeight: "500"}}>{product.name}</MDBCardTitle>
                    </div>
                  </MDBRow>
                  <MDBRow>
                    <div className="text-end">
                      <MDBCardSubTitle style={{ color: product.num_product > 0 ? "green" : "red" }}>
                        {product.num_product > 0 ? "Məhsul mövcuddur" : "Mövcud Deyil"}
                      </MDBCardSubTitle>
                      <p className="text-muted mb-4">TM-DG-SBP-1105-SM-2516</p>
                    </div>
                  </MDBRow>
                  <MDBRow>
                    <hr/>
                  </MDBRow>
                  <MDBRow>
                    <div className="text-start d-flex align-items-center" style={{background: "red", width: "11%", borderRadius: "5px", marginLeft: "1%"}}>
                      <MDBCardText style={{color: "white", fontSize: "20px", fontWeight: "500"}}>-{Math.round(product.price * product.discount / 100)} ₼</MDBCardText>
                    </div>
                  </MDBRow>

                  <MDBRow>
                    <div className="text-start" style={{display: "flex", gap: "10px"}}>
                      <MDBCardTitle style={{fontSize: "30px", fontWeight: "600", color: "red"}}>{product.price - Math.round(product.price * product.discount / 100)} ₼</MDBCardTitle>
                      <MDBCardTitle style={{fontSize: "30px", fontWeight: "500", textDecoration: "line-through", color: "grey"}}>{product.price} ₼</MDBCardTitle>
                    </div>
                  </MDBRow>
                  
                  <MDBRow>
                    <div className="text-start d-flex align-items-center" style={{marginLeft: "-1.5%"}}>
                      <MDBBtnGroup style={{width: "120%"}}>

                        <MDBBtn className='mx-2' style={{width: "100%", height: "120%", borderRadius: "8px", background: "red", border: "0"}}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 4.25..." fill="white"></path>
                          </svg>Səbətə at
                        </MDBBtn>

                        <MDBBtn className='mx-2' outline style={{width: "100%", height: "120%", borderRadius: "8px"}}>Bir kliklə al</MDBBtn>

                        <MDBBtn outline className='mx-1' color='dark' style={{width: "10%", height: "120%", borderRadius: "8px",
                          background: "#ededed", border: "0"}}>
                          <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.8199 1.57912L9.99915 2.40163L9.1759 1.57838C7.07683 -0.520693 3.67357 -0.520693 1.5745 1.57838C-0.524569 3.67744 -0.524569 7.08071 1.5745 9.17977L9.46987 17.0751C9.76276 17.368 10.2376 17.368 10.5305 17.0751L18.432 9.17831C20.5264 7.07228 20.53 3.67857 18.4305 1.57912C16.3276 -0.523771 12.9228 -0.523767 10.8199 1.57912ZM17.3684 8.12059L10.0002 15.4842L2.63516 8.11911C1.12188 6.60583 1.12188 4.15232 2.63516 2.63904C4.14844 1.12575 6.60196 1.12575 8.11524 2.63904L9.47268 3.99648C9.77055 4.29435 10.2552 4.28854 10.5459 3.98363L11.8805 2.63978C13.3976 1.12268 15.8528 1.12268 17.3699 2.63978C18.8835 4.15343 18.8809 6.59966 17.3684 8.12059Z" fill="#323232"></path>
                          </svg>
                        </MDBBtn>

                        <MDBBtn outline className='mx-1' color='dark' style={{width: "10%", height: "120%", borderRadius: "8px",
                          background: "#ededed", border: "0"}}>
                          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 0.75C1 0.335786 1.33579 0 1.75 0H18.25C18.6642 0 19 0.335786 19 0.75C19 1.16421 18.6642 1.5 18.25 1.5H17.208L19.9446 8.21703C19.9812 8.30688 20 8.40298 20 8.5C20 10.433 18.433 12 16.5 12C14.567 12 13 10.433 13 8.5C13 8.40298 13.0188 8.30688 13.0554 8.21703L15.792 1.5H10.75L10.75 13.5H14.75C15.9926 13.5 17 14.5074 17 15.75C17 16.9926 15.9926 18 14.75 18H5.25293C4.01029 18 3.00293 16.9926 3.00293 15.75C3.00293 14.5074 4.01029 13.5 5.25293 13.5H9.25L9.24999 1.5H4.208L6.94457 8.21703C6.98118 8.30688 7 8.40298 7 8.5C7 10.433 5.433 12 3.5 12C1.567 12 0 10.433 0 8.5C0 8.40298 0.0188248 8.30688 0.0554307 8.21703L2.792 1.5H1.75C1.33579 1.5 1 1.16421 1 0.75ZM4.50293 15.75C4.50293 16.1642 4.83872 16.5 5.25293 16.5H14.75C15.1642 16.5 15.5 16.1642 15.5 15.75C15.5 15.3358 15.1642 15 14.75 15H5.25293C4.83872 15 4.50293 15.3358 4.50293 15.75ZM5.35462 9.25H1.64538C1.94207 9.98296 2.66066 10.5 3.5 10.5C4.33934 10.5 5.05793 9.98296 5.35462 9.25ZM5.13459 7.75L3.5 3.73782L1.86541 7.75H5.13459ZM16.5 10.5C17.3393 10.5 18.0579 9.98296 18.3546 9.25H14.6454C14.9421 9.98296 15.6607 10.5 16.5 10.5ZM14.8654 7.75H18.1346L16.5 3.73782L14.8654 7.75Z" fill="#323232"></path>
                          </svg>
                        </MDBBtn>
          
                      </MDBBtnGroup>

                    </div>
                  </MDBRow>

                  <MDBRow>
                    <hr style={{margin: "1.5% 0"}}/>
                  </MDBRow>

                  <MDBRow>
                    <div className="text-start">
                      <MDBCardSubTitle style={{fontWeight: "500"}}>Hissəli alış kalkulyatoru</MDBCardSubTitle>
                      <p className="text-muted" style={{fontSize: "14px"}}>Şərtlər ilk dəfə olaraq endirimli qiymətə tətbiq olunur</p>
                    </div>
                  </MDBRow>

                  <MDBRow style={{display: "flex", justifyContent: "center"}}>
                      <MDBCol md='8' style={{ borderRadius: "8px 0 0 8px"}}>
                        <MDBListGroup horizontal style={{margin: "5vh auto"}} className="justify-content-center">
                          <MDBListGroupItem style={{background: "#575555", color: "white"}}>
                            6 ay 
                            <MDBBadge color='danger' notification pill>0%</MDBBadge>
                          </MDBListGroupItem>
                          <MDBListGroupItem >9 ay</MDBListGroupItem>
                          <MDBListGroupItem>12 ay</MDBListGroupItem>
                          <MDBListGroupItem>15 ay</MDBListGroupItem>
                          <MDBListGroupItem >18 ay</MDBListGroupItem>
                        </MDBListGroup>
                      </MDBCol>
                      <MDBCol md='3' style={{border: "1px solid rgb(206, 204, 204)", borderRadius: "15px", textAlign: "center"}}>
                        <div style={{position: "relative", margin: "4vh auto"}}>
                          <MDBRow>
                            <div style={{display: "flex", justifyContent: "center"}}>
                              <MDBCardSubTitle>Aylıq ödəniş</MDBCardSubTitle>
                            </div>
                          </MDBRow>
                          <MDBRow>
                            <div style={{display: "flex", justifyContent: "center", marginTop: "2%", fontWeight: "600"}}>
                              <MDBCardTitle>523.33 ₼</MDBCardTitle>
                            </div>
                          </MDBRow>
                        </div>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow>
                      <div className="text-start mt-2">
                        <p className="text-muted" style={{color: "rgb(206, 204, 204)"}}>
                          <MDBIcon fas icon="info-circle" color=""/>
                          &nbsp;Sifarişin rəsmiləşdirilməsi zamanı komissiya əlavə oluna bilər
                        </p>
                      </div>
                    </MDBRow>

                    <MDBRow>
                      <hr style={{margin: ""}}/>
                    </MDBRow>

                    <MDBRow>
                      <div className="text-start">
                        <MDBRow>
                          <MDBCardSubTitle style={{fontWeight: "500"}}>Əlavə xidmətlər:</MDBCardSubTitle>
                        </MDBRow>
                        <MDBRow>
                          <MDBBtn className='mx-2 text-muted' style={{color: "rgb(206, 204, 204)", width: "16%", height: "70%", borderRadius: "8px", 
                            background: "#f5f5f5", border: "0", fontWeight: "300"}}>
                            <MDBIcon fas icon="plus-circle" /> Zəmanət
                          </MDBBtn>
                        </MDBRow>
                      </div>
                    </MDBRow> 

                    <MDBRow>
                      <hr style={{margin: "1.5% 0"}}/>
                    </MDBRow>
                
                    <MDBRow>
                      <div className="text-start">
                        <MDBRow>
                          <MDBCardSubTitle style={{fontWeight: "500"}}>Birgə satılanlar:</MDBCardSubTitle>
                        </MDBRow>
                        <MDBRow className="mt-2">
                          <MDBCol>
                            <MDBCard style={{ width: '100%', height: "100%"}}>
                              <MDBRow className='g-3'>
                                <MDBCol md='5'>
                                  <MDBCardImage style={{padding: "5px"}} height="100%" width="100%" src='https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-acs-1109-ap-0004_111-d240ae1c.webp' alt='...' />
                                </MDBCol>
                                <MDBCol md='7'>
                                  <MDBCardBody>
                                    <MDBRow>
                                      <MDBCardSubTitle style={{fontSize: "12px", fontWeight: "300"}}>Apple 20W USB-C Adapter MHJE3ZM/A / MUVV3ZM/A</MDBCardSubTitle>
                                      <MDBCardText style={{fontSize: "15px", fontWeight: "500", 
                                        color: "black"}}>69,99 ₼</MDBCardText>
                                    </MDBRow>
                                    <MDBBtn className="mt-2" outline color="dark"><MDBIcon outline fas icon="shopping-cart" /></MDBBtn>
                                  </MDBCardBody>
                                </MDBCol>
                              </MDBRow>
                            </MDBCard>
                          </MDBCol>
                          <MDBCol >
                            <MDBCard style={{ width: '100%', height: "100%"}}>
                              <MDBRow className='g-3'>
                                <MDBCol md='5'>
                                  <MDBCardImage style={{padding: "5px"}} height="100%" width="100%" src='https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-acs-1109-tw-0680_1-85520e62.webp' alt='...' />
                                </MDBCol>
                                <MDBCol md='7'>
                                  <MDBCardBody>
                                    <MDBRow>
                                      <MDBCardSubTitle style={{fontSize: "12px", fontWeight: "300"}}>Qulaqlıq Apple AirPods 4 MXP63ZE/A</MDBCardSubTitle>
                                      <MDBCardText style={{fontSize: "15px", fontWeight: "500", 
                                        color: "black"}}>349,99 ₼</MDBCardText>
                                    </MDBRow>
                                    <MDBBtn className="mt-2" outline color="dark"><MDBIcon outline fas icon="shopping-cart" /></MDBBtn>
                                    </MDBCardBody>
                                </MDBCol>
                              </MDBRow>
                            </MDBCard>
                          </MDBCol>
                        </MDBRow>
                      </div>
                    </MDBRow>


                  
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default Singleproduct;
