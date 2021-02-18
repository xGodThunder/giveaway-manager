import React from "react";
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";

export default function Navigation(){
  return (
    <nav className="app__body__nav">
      <div className="app__body__logo"><Logo/>
      </div>
            
      <div className="app__body__navitems">
        <Link to="/">Home</Link>
      </div>
      <div className="app__body__navitems">
        <Link to="/">Give aways</Link>
      </div>
      <div className="app__body__navitems">
        <Link to="/">Sign in</Link>
      </div>
    </nav>
  );
}