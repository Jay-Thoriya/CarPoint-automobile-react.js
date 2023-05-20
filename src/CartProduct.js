import React from 'react'

function CartProduct({car}) {
  console.log("props",car)
  return (
    <div id="contain">
  {/* Start	Product details */}
  <div className="product-details">
    {/* 	Product Name */}
    <h1>{car.Name}</h1>
    {/* 		<span class="hint new">New</span> */}
    {/* 		<span class="hint free-shipping">Free Shipping</span> */}
    {/* 		the Product rating */}
    <span className="hint-star star">
      <i className="fa fa-star" aria-hidden="true" />
      <i className="fa fa-star" aria-hidden="true" />
      <i className="fa fa-star" aria-hidden="true" />
      <i className="fa fa-star-half-o" aria-hidden="true" />
      <i className="fa fa-star-o" aria-hidden="true" />
    </span>
    <p className="information">
      " CARPOINT "
    </p>
    <div className="control">
      <button className="btn">
        <span className="price">{car.Price}</span>
        <span className="shopping-cart">
          <i className="fa fa-shopping-cart" aria-hidden="true" />
        </span>
        <span className="buy">Buy Now</span>
      </button>
    </div>
  </div>
  <div className="product-image">
    <img
      src={car.carImg}
      alt="carImg"
    />
    {/* 	product Information*/}
    <div className="info">
      <h2>The Details</h2>
      <ul>
        <li>
          <strong>Horsepower : </strong>{car.Horsepower}
        </li>
        <li>
          <strong>Price : </strong>{car.Price}
        </li>
        <li>
          <strong>Cylinders : </strong>{car.Cylinders}
        </li>
        <li>
          <strong>Weight In Lbs : </strong>{car.Weight_in_lbs}
        </li>
        <li>
          <strong>Miles Per Gallon : </strong>{car.Miles_per_Gallon}
        </li>
        <li>
          <strong>Year : </strong>{car.Year}
        </li>
        <li>
          <strong>Origin :</strong>{car.Origin}
        </li>
      </ul>
    </div>
  </div>
  {/*  End product image  */}
</div>
  )
}

export default CartProduct