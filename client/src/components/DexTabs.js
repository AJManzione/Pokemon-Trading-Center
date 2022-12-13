import React, { useState } from "react";
import dashboard from "../images/tabs-ui/dashboard.jpg";
import genOneTab from "../images/tabs/gen-one-tab.jpg";
import genTwoTab from "../images/tabs/gen-two-tab.jpg";
import genThreeTab from "../images/tabs/gen-three-tab.jpg";
import genFourTab from "../images/tabs/gen-four-tab.jpg";
import genFiveTab from "../images/tabs/gen-five-tab.jpg";
import genSixTab from "../images/tabs/gen-six-tab.jpg";
import genSevenTab from "../images/tabs/gen-seven-tab.jpg";
import genEightTab from "../images/tabs/gen-eight-tab.jpg";
import genNineTab from "../images/tabs/gen-nine-tab.jpg";
import logout from "../images/tabs-ui/logout.jpg";

import Auth from "../utils/auth";


function DexTabs( props ) {

  return (
  <div>
    { props.isLogged 

  ?     
    <ul 
      className="nav d-flex banner-bg flex-nowrap justify-content-around">
      <li className="nav-item">
        <a href="/Dashboard">
          <img className="tab-bg-white" src={dashboard}></img>
        </a>
      </li>
      <li className="nav-item">
        <a href="/GenOne">
          <img className="tab-bg-black" src={genOneTab}></img>
        </a>
      </li>

      <li className="nav-item">
        <a href="/GenTwo">
          <img className="tab-bg-black" src={genTwoTab}></img>
        </a>
      </li>

      <li className="nav-item">
        <a href="/GenThree">
          <img className="tab-bg-black" src={genThreeTab}></img>
        </a>
      </li>

      <li className="nav-item">
        <a href="/GenFour">
          <img className="tab-bg-black" src={genFourTab}></img>
        </a>
      </li>

      <li className="nav-item">
        <a href="/GenFive">
          <img className="tab-bg-black" src={genFiveTab}></img>
        </a>
      </li>

      <li className="nav-item">
        <a href="/GenSix">
          <img className="tab-bg-black" src={genSixTab}></img>
        </a>
      </li>
      <li className="nav-item">
        <a href="/GenSeven">
          <img className="tab-bg-black" src={genSevenTab}></img>
        </a>
      </li>
      <li className="nav-item">
        <a href="/GenEight">
          <img className="tab-bg-black" src={genEightTab}></img>
        </a>
      </li>
      <li className="nav-item">
        <a href="/GenNine">
          <img className="tab-bg-black" src={genNineTab}></img>
        </a>
      </li>
      <li className="nav-item">
        <a 
          href="/Login"
          onClick={Auth.logout}>
          <img className="tab-bg-white" src={logout}></img>
        </a>
      </li>
    </ul>
  : 
    <div className="banner-bg">
      <h1></h1>
    </div> }
</div>
  );
}

export default DexTabs;
