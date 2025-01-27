import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {React, useState, useEffect} from "react";

import { CgProfile } from 'react-icons/cg';
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline, MdOutlineLocalPhone } from "react-icons/md";

import axios from "axios";

import "./registerform.css"

const Registrationform = () => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("str");
  const [fin, setFin] = useState("str");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      navigate("/"); 
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  async function handleRegister(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("Şifrələr uyğun deyil.");
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const formData = {
        "fin": fin,
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "phone": phone,
        "is_admin": isAdmin,
        "is_seller": isSeller,
        "password": password,
        "confirm_password": confirmPassword,
      }
      
      console.log(formData)
      const response = await axios.post("http://127.0.0.1:8000/auth", formData, config);

      if (response.statusText != "Created") {
        console.log(1)
        return toast.error("Qeydiyyat uğursuz oldu.");
      }

      toast.success("Qeydiyyat uğurludur!");
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Xəta baş verdi. Zəhmət olmasa, bir daha yoxlayın.");
    }
  }

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
                    <input type="text" name="first_name" 
                    placeholder="Ad, soyad" className="name-input-field" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                {/* Email */}
                <div>
                  <div className="email-input-icon" style={{top: "8.2vh", left:"1.5vh"}}><CgProfile/></div>
                  <input type="email" name="email" 
                  placeholder="Email" className="email-input-field" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Phone */}
                <div>
                  <div className="phone-input-icon" style={{top: "13.7vh", left:"1.5vh"}}><MdOutlineLocalPhone /></div>
                  <input type="phone" name="phone" 
                  placeholder="Telefon" className="phone-input-field" value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                {/* Password */}
                <div>
                  <div className="password-input-icon" style={{top: "19.2vh", left:"1.5vh"}}><RiLockPasswordLine/></div>
                  <input type="password" name="password"
                  placeholder="Şifrə" className="password-input-field" value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* Repeat Password */}
                <div>
                  <div className="password-input-icon" style={{top: "24.8vh", left:"1.5vh"}}><RiLockPasswordLine/></div>
                  <input type="password" name="confirm_password"
                    placeholder="Şifrəni Təsdiqlə" className="repeat-password-input-field" value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
