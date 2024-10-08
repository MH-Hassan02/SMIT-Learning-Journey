import React from "react";

const Hero = () => {
  return (
    <>
      <div className="heroContent">
        <div className="heroText">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="heroBtn">
            <button className="btnShop">Shop Now</button>
            <button className="btnCategory">Category</button>
          </div>

          <label htmlFor="">Also Available On</label>
          <div className="heroImages">
            <img src="/src/images/flipkart.png" alt="flipkart" />
            <img src="/src/images/amazon.png" alt="amazon" />
          </div>
        </div>

        <div>
          <img className="shoeImg" src="/src/images/shoe_image.png" alt="shoe" />
        </div>
      </div>
    </>
  );
};

export default Hero;
