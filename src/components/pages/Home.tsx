import React from "react";
import logo from "../../assets/img/platzh1rsch-profilepic.png";
const Home = () => {

  return (
    <div className="container">
      {/* <!--<div className="infobar">I'm looking for a new challenge! Hire me info(at)platzh1rsch.ch</div>--> */}

      <div className="content">
        <img src={logo} alt="platzh1rsch - coming soon" id="logo" />
        <h1>PLATZH1RSCH</h1>
        <p>That's one small step for man,<br />one giant leap for web 3.0</p>
        <ul>
          <li><a title="play pacman" href="https://pacman.platzh1rsch.ch" target="_blank">play pac-man</a></li>
          {/* <li><a title="mobility calculator" href="http://spielwiese.platzh1rsch.ch/mobility" target="_blank">mobility calculator</a></li>
          <li><a title="velafrica tracking" href="http://tracking.velafrica.ch" target="_blank">velafrica tracking</a></li>
          <li><a title="manito burger generator" href="http://manito-burger-generator.herokuapp.com/" target="_blank">manito burger generator</a></li>
          <li><a title="rugbygear.ch" href="http://rugbygear.ch" target="_blank">rugbygear.ch</a></li>
          <li><a title="swissrugbystats.ch" href="http://swissrugbystats.ch" target="_blank">swissrugbystats.ch</a></li>
          <li><a title="visit my old page" href="http://old.platzh1rsch.ch" target="_blank">visit my old page</a></li>
          <li><a title="visit my blog" href="http://wp.platzh1rsch.ch" target="_blank">visit my blog</a></li>
          <li><a title="follow me on twitter" href="https://twitter.com/#!/platzh1rsch" target="_blank">follow me on twitter</a></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Home;
