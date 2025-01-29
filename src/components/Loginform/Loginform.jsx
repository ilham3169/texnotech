import {React, useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./loginform.css";

import { CgProfile } from 'react-icons/cg';
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";


const Loginform = () => {

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      navigate("/"); 
    }
  }, [navigate]);
  
  async function handleLogin(event) {
    event.preventDefault();

    if (!phone || !password) {
      return toast.error("Email və şifrəni doldurun.");
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      const formData = new URLSearchParams();
      formData.append("username", phone);
      formData.append("password", password);

      const response = await axios.post("https://back-texnotech.onrender.com/auth/token", formData, config);
      
      if (response.status  != 200) {
        return toast.error("Giriş uğursuz oldu.");
      }

      const data = await response.data;
      const { access_token, refresh_token } = data;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);

      toast.success("Giriş uğurludur!");
      navigate("/"); 
    } catch (error) {
      console.log(error)
      toast.error("Xəta baş verdi. Zəhmət olmasa, bir daha yoxlayın.");
    }
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
                    <input type="tel" name="phone" 
                    placeholder="Telefon nömrəsi" className="email-input-field" 
                    onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div>
                    <div className="password-input-icon"><RiLockPasswordLine/></div>
                    <input type="password" name="password"
                    placeholder="Şifrə" className="password-input-field" 
                    onChange={(e) => setPassword(e.target.value)}
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

                <div style={{marginTop: "3%"}}>
                  <button className="signin-btn">Daxil ol</button>
                </div>
                <Link to="/registration">
                  <button type="button" className="signup-btn">
                    Qeydiyyatdan Keç
                  </button>
                </Link>

              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loginform;
