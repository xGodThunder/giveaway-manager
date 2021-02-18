import React from "react";
import {connect} from "react-redux";
import "./Home.css";
import Button from "@material-ui/core/Button";
function Home(){
  return(
    <>
      <header className="body__header">
        <h1 className="body__header__title">Manage your giveaways like pro</h1>
           
        <div className="body__header__button">
          <Button variant="contained" size="large" color="primary" href="#contained-buttons">
        Get Started
          </Button>
        </div>
      </header>
    </>
  );
}
const mapStateToProps = (state) =>{
  return {
    user:state.userData
  };
};
export default connect(mapStateToProps)(Home);