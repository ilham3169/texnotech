import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import {React, useState, useEffect} from "react";

import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
import { 
  MdOutlineDriveFileRenameOutline,
  MdOutlineLocalPhone,
  MdDriveFileRenameOutline,
} 
from "react-icons/md";

import { Fa500Px } from "react-icons/fa";
import { CiMail } from "react-icons/ci";



import axios from "axios";

import "./registerform.css"

const Registrationform = () => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fin, setFin] = useState("");
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
      
      const response = await axios.post("https://texnotech.store/auth", formData, config);

      if (response.status != 201) {
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
    <section className="loginform" style={{height:"75vh", marginTop:"10vh"}}>
      <div className="container-login">
        <div className="wrapper">
          <div className="heading-login">
            <h1>Qeydiyyat</h1>
          </div>
          <form onSubmit={handleRegister} className="form" action="" style={{marginTop: "6vh"}}>
            <div>
              <div className="credentials-container" style={{marginTop:"3vh"}}>
                {/* FIN */}
                <div>
                    <div className="name-input-icon" style={{top: "2.6vh", left:"1.5vh"}}><Fa500Px/></div>
                    <input type="text" name="fin" 
                    placeholder="FIN" className="name-input-field" value={fin}
                    onChange={(e) => setFin(e.target.value)}
                    />
                </div>
                {/* Name */}
                <div>
                    <div className="name-input-icon" style={{top: "8.1vh", left:"1.5vh"}}><MdOutlineDriveFileRenameOutline /></div>
                    <input type="text" name="first_name" 
                    placeholder="Ad" className="name-input-field" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                {/* Surname */}
                <div>
                    <div className="name-input-icon" style={{top: "13.6vh", left:"1.5vh"}}><MdDriveFileRenameOutline /></div>
                    <input type="text" name="last_name" 
                    placeholder="Soyad" className="name-input-field" value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                {/* Email */}
                <div>
                  <div className="email-input-icon" style={{top: "19.2vh", left:"1.5vh"}}><CiMail/></div>
                  <input type="email" name="email" 
                  placeholder="Email" className="email-input-field" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Phone */}
                <div>
                  <div className="phone-input-icon" style={{top: "24.7vh", left:"1.5vh"}}><MdOutlineLocalPhone /></div>
                  <input type="phone" name="phone" 
                  placeholder="Telefon" className="phone-input-field" value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="password-input-icon" style={{top: "30.3vh", left:"1.5vh"}}><RiLockPasswordLine/></div>
                  <input type="password" name="password"
                  placeholder="Şifrə" className="password-input-field" value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* Repeat Password */}
                <div>
                  <div className="password-input-icon" style={{top: "35.8vh", left:"1.5vh"}}><RiLockPasswordFill/></div>
                  <input type="password" name="confirm_password"
                    placeholder="Şifrəni Təsdiqlə" className="repeat-password-input-field" value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

              </div>

              <div className="submit-btn-container" style={{marginTop:"30%"}}>
                <button className="signin-btn" style={{minWidth: "60%"}} >Qeydiyyatdan Keç</button>
                <Link to="/login">
                  <button className="signup-btn">
                    Daxil ol
                    </button>
                </Link>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registrationform;
