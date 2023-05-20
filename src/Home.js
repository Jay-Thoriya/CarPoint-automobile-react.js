import React from 'react';
import './Home.css';
import DisplayInfo from './DisplayInfo';

import { useLocation } from 'react-router-dom';


function Home(props) {

  let location = useLocation();
  console.log(location.hash.split("#",2)[1])
  const pageSection =  location.hash.split("#",2)[1];
  var element = document.getElementById(pageSection);
  if(element){
    element.scrollIntoView();
  }
  
  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src="https://img.freepik.com/premium-photo/compact-sports-car-family-sedan-3d-illustration_101266-15110.jpg?w=1060" className="d-block w-100" alt="Imag1" />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{"color":"orange"}}>FIND THE RIGHT CAR</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="https://img.freepik.com/premium-photo/white-mid-size-urban-family-sedan-white-uniform-background-3d-rendering_101266-11238.jpg?w=1100" className="d-block w-100" alt="Imag2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/premium-photo/red-premium-business-sedan-car-sports-configuration-white-background-3d-rendering_101266-26555.jpg?w=1100" className="d-block w-100" alt="Imag3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {props.carInfo.map((i)=><DisplayInfo value={i}/>)}
    
    </>


  )
}

export default Home;