import React from "react";

const Main = () => {
  return (
    <>
      <div className="mainContent">
        <div>
          <h1>CONTACT US</h1>
          <p>
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.{" "}
          </p>
        </div>

        <div className="contentBody">
          <div className="contentForm">
            <div className="contentBtn1">
              <button>VIA SUPPORT CHAT</button>
              <button>VIA CALL</button>
            </div>
            <button className="contentBtnEmail">VIA EMAIL FORM</button>

            <fieldset>
              <legend>Name</legend>
              <input type="text" />
            </fieldset>

            <fieldset>
              <legend>E-Mail</legend>
              <input type="text" />
            </fieldset>

            <fieldset>
              <legend>TEXT</legend>
              <textarea name="" id=""></textarea>
            </fieldset>

            <div className="submitContainer">
              <button className="btnSubmit">SUBMIT</button>
            </div>
          </div>

          <div className="contentImage">
            <img src="./src/images/Service 24_7-pana 1.svg" alt="Service" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
