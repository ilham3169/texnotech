import {React, useState} from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./loginform.css";

import { CgProfile } from 'react-icons/cg';
import { RiLockPasswordLine } from "react-icons/ri";


const Loginform = () => {

  const [isEmailEmpty, setIsEmailEmpty] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);

  function handleLogin(event) {
    event.preventDefault();
    return toast.error("Login functionality is not live yet");
  }

  return (
    <>
      <section className="loginform">
        <div className="container-login">
          <div className="wrapper">
            <div className="heading-login">
              <h1>Daxil ol </h1>
            </div>
            <form onSubmit={handleLogin} className="form" action="">
              <div>
                <div className="credentials-container">
                  
                  <div>
                    <div className="email-input-icon"><CgProfile/></div>
                    <input type="email" name="email" 
                    placeholder="Email" className="email-input-field" 
                    onChange={(e) => setIsEmailEmpty(e.target.value === "")}
                    />
                  </div>

                  <div>
                    <div className="password-input-icon"><RiLockPasswordLine/></div>
                    <input type="password" name="password"
                    placeholder="Şifrə" className="password-input-field" 
                    onChange={(e) => setIsPasswordEmpty(e.target.value === "")}
                    />
                  </div>

                </div>
                <div className="forgot-pass-container">
                  <p className="forgot-pass">
                    <span>
                      <Link to="/forgot-password">Şifrəni unutmusan?</Link>
                    </span>
                  </p>
                </div>

                <div className="submit-btn-container">
                  <button className="signin-btn">Daxil ol</button>
                  <button className="signup-btn">Qeydiyyatdan Keç</button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loginform;
