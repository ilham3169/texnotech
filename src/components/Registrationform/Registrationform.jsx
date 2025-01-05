import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {React, useState} from "react";

import { CgProfile } from 'react-icons/cg';
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline, MdOutlineLocalPhone } from "react-icons/md";


import "./registerform.css"

const Registrationform = () => {
  function handleRegister(event) {
    event.preventDefault();
    return toast.error("Register functionality is not live yet");
  }

  const [isEmailEmpty, setIsEmailEmpty] = useState(true);
  const [isNameEmpty, setIsNameEmpty] = useState(true);
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);
  const [isPasswordRepeatEmpty, setIsPasswordRepeatEmpty] = useState(true);


  return (
    <section className="loginform" style={{height:"60vh"}}>
      <div className="container-login">
        <div className="wrapper">
          <div className="heading-login">
            <h1>Qeydiyyat</h1>
          </div>
          <form onSubmit={handleRegister} className="form" action="">
            <div>
              <div className="credentials-container" style={{marginTop:"3vh"}}>
                {/* Name, Surname */}
                <div>
                    <div className="name-input-icon" style={{bottom: "5vh", left:"1.5vh"}}><MdOutlineDriveFileRenameOutline /></div>
                    <input type="text" name="name" 
                    placeholder="Ad, soyad" className="name-input-field" 
                    onChange={(e) => setIsNameEmpty(e.target.value === "")}
                    />
                </div>
                {/* Email */}
                <div>
                  <div className="email-input-icon" style={{top: "8.2vh", left:"1.5vh"}}><CgProfile/></div>
                  <input type="email" name="email" 
                  placeholder="Email" className="email-input-field" 
                  onChange={(e) => setIsEmailEmpty(e.target.value === "")}
                  />
                </div>
                {/* Phone */}
                <div>
                  <div className="phone-input-icon" style={{top: "13.7vh", left:"1.5vh"}}><MdOutlineLocalPhone /></div>
                  <input type="phone" name="phone" 
                  placeholder="Telefon" className="phone-input-field" 
                  onChange={(e) => setIsPhoneEmpty(e.target.value === "")}
                  />
                </div>
                {/* Password */}
                <div>
                  <div className="password-input-icon" style={{top: "19.2vh", left:"1.5vh"}}><RiLockPasswordLine/></div>
                  <input type="password" name="password"
                  placeholder="Şifrə" className="password-input-field" 
                  onChange={(e) => setIsPasswordEmpty(e.target.value === "")}
                  />
                </div>
                {/* Repeat Password */}
                <div>
                  <div className="password-input-icon" style={{top: "24.8vh", left:"1.5vh"}}><RiLockPasswordLine/></div>
                  <input type="password" name="repeat-password"
                    placeholder="Şifrəni Təsdiqlə" className="repeat-password-input-field" 
                    onChange={(e) => setIsPasswordRepeatEmpty(e.target.value === "")}
                    />
                </div>

              </div>

              <div className="submit-btn-container" style={{marginTop:"9vh"}}>
                <button className="signin-btn">Qeydiyyatdan Keç</button>
                <button className="signup-btn">Daxil ol</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registrationform;
