import React from "react";
import TopCategoriesCard from "./TopCategoriesCard";

const TopCategories = () => {
  return (
    <>
      <section className="topCat background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading">
              <i className="fa fa-border-all"></i>
              <h2>Top Categories</h2>
            </div>
          </div>
          <TopCategoriesCard />
        </div>
      </section>
    </>
  );
};

export default TopCategories;
