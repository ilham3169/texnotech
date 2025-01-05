import React from 'react';
import './features.css';

const Features = () => {
    const data = [
        {
          cover: 'fa-solid fa-truck-fast',
          title: "Sürətli Çatdırılma",
          desc: "Məhsullarınızı sizə sürətli şəkildə çatdırırıq.",
        },
        {
          cover: 'fa-solid fa-id-card',
          title: "Güvənli Ödəniş Sistemi",
          desc: "TexnoTech olaraq 100% güvənli ödəniş sistemi ilə sizi təmin edirik.",
        },
        // {
        //   cover: 'fa-solid fa-shield',
        //   title: "Güvənli Alış-Veriş",
        //   desc: "Bütün alış-verişlərinizi ",
        // },
        {
          cover: 'fa-solid fa-headset',
          title: "24/7 Dəstək",
          desc: "Biz sizə 24/7 dəstək xidməti sunuruq",
        },
        // {
        //   cover: 'fa-solid fa-plane',
        //   title: "Global Shipping",
        //   desc: "We offer global shipping on our 100 million plus product any range.",
        // },
        // {
        //   cover: "fa-solid fa-clock",
        //   title: "24 Hours Delivery",
        //   desc: "We offer 24 hours delivery on our 100 million plus products anywhere.",
        // },
      ]
  return (
    <>
    <section className="wrapper background">
        <div className="container grid2">
            {data.map((value,index)=>{
                return(
                    <div className="product" key={index}>
                        <div className="img icon-circle" >
                            <i className={value.cover}></i>
                        </div>
                        <h3>{value.title}</h3>
                        <p>{value.desc}</p>
                    </div>
                )
            })}
        </div>
    </section>
    </>
  )
}

export default Features