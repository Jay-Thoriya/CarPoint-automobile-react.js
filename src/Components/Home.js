import React from 'react';
import '../CssFolder/Home.css';
import DisplayInfo from './DisplayInfo';

import { useLocation } from 'react-router-dom';


function Home(props) {

  let location = useLocation();
  const pageSection = location.hash.split("#", 2)[1];
  var element = document.getElementById(pageSection);
  if (element) {
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
              <h5 style={{ "color": "orange" }}>PERFORMANCE</h5>
              <p>New is about ensuring your free spirit is unshaken with ESP and multi-drive modes. This journey of creating and evoking joy, will be forever. Because the spirit that loves to drive, is exactly that  </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="https://img.freepik.com/premium-photo/white-mid-size-urban-family-sedan-white-uniform-background-3d-rendering_101266-11238.jpg?w=1100" className="d-block w-100" alt="Imag2" />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ "color": "white" }}>DESIGN</h5>
              <p>It’s true. Design shouldn’t just look great, it should do great things. But while being new, design needs to evoke a love that’s eternal. Design shouldn’t just be new. It needs to Drive New Forever.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/premium-photo/red-premium-business-sedan-car-sports-configuration-white-background-3d-rendering_101266-26555.jpg?w=1100" className="d-block w-100" alt="Imag3" />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ "color": "red" }}>SAFETY</h5>
              <p>With architecture itself that’s built for safety, we made your oldest need, new. Dangers become new too, Safety can’t just be new once. It has to be New Forever. We Drive New Forever.</p>
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

      {props.carInfo.map((i) => <DisplayInfo value={i} />)}

    </>


  )
}

export default Home;