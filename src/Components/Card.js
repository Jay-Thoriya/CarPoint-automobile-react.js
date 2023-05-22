import { useContext } from "react";
import { DispatchValue } from './About';

function Card(props) {
    const dispatch = useContext(DispatchValue);



    return (
        <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="card">
                <div className={props.value.Img}>
                    <h1>
                        {props.value.Name}
                        <br />
                    </h1>
                    <span className="price">{props.value.Price}</span>
                    <div className="card-back">
                        <button onClick={() => {
                            dispatch({ type: "ADD_CART", payload: props.value.id })
                        }}>Add to cart</button>
                        <a href={`/home#car-${props.value.id}`}>View detail</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;