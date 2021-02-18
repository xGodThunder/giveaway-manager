import React from "react";
import "./roulette.css";
export default () => {
  const arr = [];
  for(let i = 0; i < 100; i++){
    arr[i] = Math.floor(Math.random() * 100);
  }
  console.log(arr);
  return(
    <>
      <div className="roulette__container">
        {
          arr.map(element => 
            <span className="roulette__item">{element}</span>
          )
        }
      </div>
      <h1>Roulette</h1>
    </>
  );
};