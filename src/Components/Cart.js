import React from 'react'
import './Cart.css'
import CartProduct from './CartProduct';

function Cart({ carInfo, addCartId }) {
  console.log(carInfo)

  const filteredCarInfo = carInfo.filter((car) => addCartId.includes(car.id));
  console.log("filteredCarInfo : ", filteredCarInfo)
  return (
    <div>
      {filteredCarInfo.length > 0 ? (
        filteredCarInfo.map((car) => (
          <CartProduct key={car.id} car={car} />
        ))
      ) : <h1 style={{ "textAlign": "center", "marginTop": "100px" }}> Your CarPoint Cart is empty
        <br />
        <a href='/about' style={{ "color": "red", "fontSize": "28px" }}> Shop Now </a>
      </h1>}
    </div>
  );
}

export default Cart;