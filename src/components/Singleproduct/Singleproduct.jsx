import {React} from "react";
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

const Singleproduct = ({allProductsData, addToCart }) => {
  let id = useParams();
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <div style={{background: "#f5f5f5", padding: "1%"}}>
        {allProductsData.map((product, index) => {
          if (product.id == id.id) {
            return (
              <MDBContainer fluid className="my-5 mt-0" key={index}>
                <MDBRow className="justify-content-center">
                  <MDBCol md="6" >
                    <MDBCard className="text-black" style={{border: "0", borderRadius: "12px"}}>
                      <MDBRow>
                        <MDBCol md="2" className="d-flex align-items-center" style={{}}>
                          <MDBRow>
                            <MDBListGroup light style={{marginLeft: "13%"}}>
                              <MDBListGroupItem>
                                  <MDBCardImage
                                    src="https://kontakt.az/media/catalog/product/cache/c879481e807f731fb27d0b17c8d39806/t/m/tm-dg-sbp-1105-sm-25161.png"
                                    position="top"
                                    alt="Apple Computer"
                                  />
                              </MDBListGroupItem>
                              <MDBListGroupItem>
                                <MDBCardImage
                                  src="https://kontakt.az/media/catalog/product/cache/c879481e807f731fb27d0b17c8d39806/t/m/tm-dg-sbp-1105-sm-25162.png"
                                  position="top"
                                  alt="Apple Computer"
                                />
                              </MDBListGroupItem>
                              <MDBListGroupItem>
                                <MDBCardImage
                                  src="https://kontakt.az/media/catalog/product/cache/c879481e807f731fb27d0b17c8d39806/t/m/tm-dg-sbp-1105-sm-25163.png"
                                  position="top"
                                  alt="Apple Computer"
                                />
                              </MDBListGroupItem>
                              <MDBListGroupItem>
                                <MDBCardImage
                                  src="https://kontakt.az/media/catalog/product/cache/c879481e807f731fb27d0b17c8d39806/t/m/tm-dg-sbp-1105-sm-25166.png"
                                  position="top"
                                  alt="Apple Computer"
                                />
                              </MDBListGroupItem>
                            </MDBListGroup>
                          </MDBRow>
                        </MDBCol>

                        <MDBCol md="10">
                          <MDBCardImage
                            src="https://kontakt.az/media/catalog/product/cache/c879481e807f731fb27d0b17c8d39806/t/m/tm-dg-sbp-1105-sm-25161.png"
                            position="top"
                            alt="Apple Computer"
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
                            <MDBCardTitle style={{fontSize: "28px", fontWeight: "500"}}>iPhone 15 Pro Max 256 GB Blue</MDBCardTitle>
                          </div>
                        </MDBRow>
                        <MDBRow>
                          <div className="text-end">
                              <MDBCardSubTitle style={{color: "green"}}>Məhsul mövcuddur</MDBCardSubTitle>
                              <p className="text-muted mb-4">TM-DG-SBP-1105-SM-2516</p>
                          </div>
                        </MDBRow>
                        <MDBRow>
                          <hr/>
                        </MDBRow>
                        <MDBRow>
                          <div className="text-start d-flex align-items-center" style={{display: "flex", background: "red", width: "11%", borderRadius: "5px", marginLeft: "1%"}}>
                            <MDBCardText style={{color: "white", fontSize: "20px", fontWeight: "500"}}>
                              -360 ₼
                            </MDBCardText>
                          </div>
                        </MDBRow>
                        <MDBRow>
                          <div className="text-start" style={{display: "flex", gap: "10px"}}>
                              <MDBCardTitle style={{fontSize: "30px", fontWeight: "600" , color: "red"}}>3.139,99 ₼</MDBCardTitle>
                              <MDBCardTitle style={{fontSize: "30px", fontWeight: "500", 
                                textDecoration: "line-through", color: "grey"}}>3.499,99 ₼</MDBCardTitle>
                          </div>
                        </MDBRow>
                        <MDBRow>
                          <div className="text-start d-flex align-items-center" style={{display: "flex", marginLeft: "-1.5%"}}>
                            <MDBBtnGroup style={{width: "120%"}}>
                              <MDBBtn className='mx-2' style={{width: "100%", height: "120%", borderRadius: "8px", background: "red", border: "0"}}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M2.5 4.25C2.5 3.83579 2.83579 3.5 3.25 3.5H3.80826C4.75873 3.5 5.32782 4.13899 5.65325 4.73299C5.87016 5.12894 6.02708 5.58818 6.14982 6.00395C6.18306 6.00134 6.21674 6 6.2508 6H18.7481C19.5783 6 20.1778 6.79442 19.9502 7.5928L18.1224 14.0019C17.7856 15.1832 16.7062 15.9978 15.4779 15.9978H9.52977C8.29128 15.9978 7.2056 15.1699 6.87783 13.9756L6.11734 11.2045L4.85874 6.95578L4.8567 6.94834C4.701 6.38051 4.55487 5.85005 4.33773 5.4537C4.12686 5.0688 3.95877 5 3.80826 5H3.25C2.83579 5 2.5 4.66421 2.5 4.25ZM7.57283 10.8403L8.32434 13.5786C8.47333 14.1215 8.96682 14.4978 9.52977 14.4978H15.4779C16.0362 14.4978 16.5268 14.1275 16.68 13.5906L18.4168 7.5H6.58549L7.55906 10.7868C7.56434 10.8046 7.56892 10.8224 7.57283 10.8403ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19ZM9.5 19C9.5 18.7239 9.27614 18.5 9 18.5C8.72386 18.5 8.5 18.7239 8.5 19C8.5 19.2761 8.72386 19.5 9 19.5C9.27614 19.5 9.5 19.2761 9.5 19ZM18 19C18 20.1046 17.1046 21 16 21C14.8954 21 14 20.1046 14 19C14 17.8954 14.8954 17 16 17C17.1046 17 18 17.8954 18 19ZM16.5 19C16.5 18.7239 16.2761 18.5 16 18.5C15.7239 18.5 15.5 18.7239 15.5 19C15.5 19.2761 15.7239 19.5 16 19.5C16.2761 19.5 16.5 19.2761 16.5 19Z" fill="white"></path>
                                </svg>Səbətə at
                              </MDBBtn>
                              <MDBBtn className='mx-2' outline style={{width: "100%", height: "120%", borderRadius: "8px"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                  <g id="Bir klik">
                                  <path id="Shape" d="M12.2518 7C13.6004 7 14.4306 7.96911 14.4974 9.32894L14.5018 9.50848V11.624L16.721 12.0269C16.8078 12.0427 16.8939 12.062 16.9792 12.0848C18.6535 12.5321 19.6716 14.2081 19.3228 15.884L19.2802 16.0635L18.232 19.9867C18.014 20.8028 17.3591 21.4232 16.5431 21.6031L16.3779 21.6331L13.9596 21.9801C13.035 22.1128 12.1314 21.6605 11.6793 20.8567L11.6 20.7019L11.5709 20.6393C11.3361 20.1345 10.9836 19.6948 10.5445 19.3564L10.3511 19.2176L8.46739 17.9618L8.37349 17.9034L8.2761 17.851L5.91319 16.6756C5.66371 16.5515 5.50359 16.2993 5.49742 16.0207C5.47284 14.9121 5.96294 14.0568 6.91637 13.5801C7.61822 13.2291 8.55142 13.249 9.74258 13.5967L10.0018 13.6762V9.50848C10.0018 8.05521 10.8445 7 12.2518 7ZM12.2518 8.5C11.7918 8.5 11.5394 8.77494 11.5057 9.36636L11.5018 9.50848V14.7525C11.5018 15.2865 10.9596 15.6494 10.4659 15.4459C9.00526 14.8436 8.02447 14.7031 7.58719 14.9217C7.33319 15.0487 7.16698 15.2126 7.0774 15.4407L7.03894 15.5603L8.94419 16.508L9.12507 16.6053L9.29944 16.7137L11.1832 17.9695C11.8659 18.4247 12.4239 19.0411 12.809 19.7624L12.9309 20.0067L12.96 20.0692C13.084 20.3358 13.3503 20.5023 13.638 20.5029L13.7466 20.4953L16.1648 20.1483C16.425 20.111 16.6437 19.941 16.7462 19.7046L16.7829 19.5995L17.831 15.6763C18.0805 14.7426 17.5258 13.7834 16.592 13.5339L16.5228 13.5169L13.6178 12.988C13.2968 12.9297 13.0546 12.6722 13.0094 12.3571L13.0018 12.25V9.50848C13.0018 8.81887 12.7471 8.5 12.2518 8.5ZM12.2506 2C16.255 2 19.5012 5.24621 19.5012 9.25062C19.5012 10.2367 19.3044 11.1768 18.9479 12.0338C18.5725 11.702 18.1334 11.4335 17.6433 11.2489C17.8751 10.6271 18.0012 9.9536 18.0012 9.25062C18.0012 6.07464 15.4266 3.5 12.2506 3.5C9.07464 3.5 6.5 6.07464 6.5 9.25062C6.5 10.4042 6.83967 11.4784 7.42445 12.3788C7.08672 12.4339 6.76887 12.5358 6.46916 12.6856C6.3082 12.7661 6.15648 12.8551 6.01424 12.9521C5.3705 11.8697 5 10.6034 5 9.25062C5 5.24621 8.24621 2 12.2506 2ZM12.2506 4.50178C14.8733 4.50178 16.9995 6.62791 16.9995 9.25062C16.9995 9.86873 16.8814 10.4593 16.6665 11.0009L15.5018 10.7892V9.50848L15.4977 9.31367L15.4995 9.25062C15.4995 8.57003 15.2902 7.93832 14.9325 7.41633L14.8432 7.28383C14.2851 6.49647 13.3938 6 12.2518 6C11.0767 6 10.167 6.52568 9.61269 7.35305C9.22853 7.88672 9.00178 8.54219 9.00178 9.25062L9.00412 9.36135L9.00178 9.50848V12.3984L8.73966 12.3621C8.50225 12.3324 8.28336 12.2186 8.12272 12.0413C7.70876 11.5844 7.50178 10.6541 7.50178 9.25062C7.50178 6.62791 9.62791 4.50178 12.2506 4.50178Z" fill="#323232"></path>
                                  </g>
                                </svg>Bir kliklə al
                              </MDBBtn>
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
                        <MDBRow>
                          <div className="text-start mt-2">
                            <p className="text-muted" style={{color: "rgb(206, 204, 204)"}}>
                              <MDBIcon fas icon="info-circle" color=""/>
                              &nbsp;Sifarişin rəsmiləşdirilməsi zamanı komissiya əlavə oluna bilər
                            </p>
                          </div>
                          </MDBRow>
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
                <MDBRow className="justify-content-center" style={{marginTop: "1%"}}>
                  <MDBCol md="12">
                    <MDBCard className="text-black justify-content-center d-flex align-items-center" style={{border: "0", borderRadius: "12px"}}>
                      <MDBTable style={{borderRadius: "12px" , width: "95%"}}>
                        <MDBTableHead>
                          <tr>
                            <th scope='col' colSpan={7} style={{fontWeight: "700", fontSize: "25px"}}>Xüsusiyyətlər</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody style={{fontWeight: "500", fontSize: "17px"}}>
                          <tr>
                            <td style={{width: "23.75%"}}>Daxili yaddaş</td>
                            <td style={{width: "23.75%"}} className="text-end">256 GB</td>
                            <td style={{width: "5%"}}></td>
                            <td style={{width: "23.75%"}}>Giroskop</td>
                            <td style={{width: "23.75%"}} className="text-end">Var</td>
                          </tr>
                          <tr>
                            <td style={{width: "23.75%"}}>Operativ yaddaş</td>
                            <td style={{width: "23.75%"}} className="text-end">8 GB</td>
                            <td style={{width: "5%"}}></td>
                            <td style={{width: "23.75%"}}>İşıq sensoru</td>
                            <td style={{width: "23.75%"}} className="text-end">Var</td>
                          </tr>
                          <tr>
                            <td style={{width: "23.75%"}}>Əsas kamera</td>
                            <td style={{width: "23.75%"}} className="text-end">48 MP + 12 MP + 12 MP</td>
                            <td style={{width: "5%"}}></td>
                            <td style={{width: "23.75%"}}>Yaxınlaşdırma sensoru</td>
                            <td style={{width: "23.75%"}} className="text-end">Var</td>
                          </tr>
                          <tr>
                            <td style={{width: "23.75%"}}>Ön kamera</td>
                            <td style={{width: "23.75%"}} className="text-end">12 MP</td>
                            <td style={{width: "5%"}}></td>
                            <td style={{width: "23.75%"}}>Optik sabitləşmə</td>
                            <td style={{width: "23.75%"}} className="text-end">Var</td>
                          </tr>
                          <tr>
                            <td style={{width: "23.75%"}}>Nüvə sayı</td>
                            <td style={{width: "23.75%"}} className="text-end">6</td>
                            <td style={{width: "5%"}}></td>
                            <td style={{width: "23.75%"}}>Video formatı</td>
                            <td style={{width: "23.75%"}} className="text-end">4K / 2.8K / 1080p / 720p</td>
                          </tr>
                          <tr>
                            <td style={{width: "23.75%"}}>SIM kartların sayı</td>
                            <td style={{width: "23.75%"}} className="text-end">1</td>
                            <td style={{width: "5%"}}></td>
                            <td style={{width: "23.75%"}}>Bluetooth versiyası</td>
                            <td style={{width: "23.75%"}} className="text-end">5.3</td>
                          </tr>
                          <tr>
                            <td style={{width: "23.75%"}}>SIM kartın növü</td>
                            <td style={{width: "23.75%"}} className="text-end">Nano SIM / eSIM</td>
                            <td style={{width: "5%"}}></td>
                            <td style={{width: "23.75%"}}>Avtofokus əsas kamera</td>
                            <td style={{width: "23.75%"}} className="text-end">Var</td>
                          </tr>
                          <tr>
                            <td style={{width: "23.75%"}}>Prosessorun adı</td>
                            <td style={{width: "23.75%"}} className="text-end">Apple</td>
                            <td style={{width: "5%"}}></td>
                            <td style={{width: "23.75%"}}>Video icazəsi və kadr tezliyi</td>
                            <td style={{width: "23.75%"}} className="text-end">4K - 720p, 24-240 kadr/s</td>
                          </tr>
                          <tr>
                            <td style={{width: "23.75%"}}>Prosessor tezliyi</td>
                            <td style={{width: "23.75%"}} className="text-end">3.7 GHz</td>
                            <td style={{width: "5%"}}></td>
                            <td style={{width: "23.75%"}}>Video asta çəkiliş</td>
                            <td style={{width: "23.75%"}} className="text-end">Var</td>
                          </tr>
                        </MDBTableBody>
                      </MDBTable>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            );
          }
        })}
      </div>
    </>  
  );
};
export default Singleproduct;
