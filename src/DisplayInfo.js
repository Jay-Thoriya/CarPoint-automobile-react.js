import React from 'react'

function DisplayInfo(props) {
  
  return (
    <div className="container">
      <div className="image">
        <img src={props.value.carImg} id={`car-${props.value.id}`} alt='img'/>
      </div>
      <br/>
      <div className="text">
        <h2><b> {props.value.Name}</b></h2>
        
        <h1> Horsepower : <span>{props.value.Horsepower}</span></h1>
        <h1> Price : <span>{props.value.Price}</span></h1>
        <h1> Cylinders : <span>{props.value.Cylinders}</span></h1>
        <h1> Year : <span>{props.value.Year}</span></h1>
        <h1> Origin : <span>{props.value.Origin}</span></h1>
      </div>
    </div>
  )
}

export default DisplayInfo;