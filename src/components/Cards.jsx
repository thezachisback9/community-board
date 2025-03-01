import React from "react";
const Cards = (props) => {
  return (
    <div className = "card">
      <img src = {props.image} alt = {props.title} className = "artistpics"/>
      <h2>{props.title}</h2>
      <a href = {props.link} target = "_blank">
        <button>{props.desc}</button>
      </a>
     
    </div>
  )
}

export default Cards;