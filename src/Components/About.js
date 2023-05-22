
import './About.css';
import Card from './Card';
import { useReducer, createContext } from 'react';


const DispatchValue = createContext();
const About = ({ carInfo, addCartId, setAddCartId }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_CART":
        setAddCartId(addCartId => ([...addCartId, action.payload]))
        break;

      default:
        break;
    }
  }
  const [, dispatch] = useReducer(reducer, carInfo);

  return (
    <DispatchValue.Provider value={dispatch}>
      <section>
        {carInfo.map((i) => <Card value={i} />)}
      </section>
    </DispatchValue.Provider>


  );
}

export { DispatchValue, About };
