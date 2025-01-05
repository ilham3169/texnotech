import Header from "../../components/Header/Header";
import Loginform from "../../components/Loginform/Loginform";
import Footer from "../../components/Footer/Footer";

const Loginpage = ({ cartItems }) => {
  return (
    <>
      <Header cartItems={cartItems} />
        <div style={{background : "#f2f2f2", height: "60vh", 
          display: "flex"}}>
          <Loginform/>
        </div>
      <Footer />
    </>
  );
};

export default Loginpage;
