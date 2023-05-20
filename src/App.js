
import './App.css';
import { NevBar } from './Nevbar';
import Home from './Home';
import { About } from './About';
import Cart from './Cart';
import Contact from './Contact';
import Error from './Error';
import { CarApi } from './CarApi';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const { CarData } = CarApi();
  //console.log(CarData);
  const [addCartId , setAddCartId] = useState([]);
  console.log("s",addCartId)
  return (
    <>
      <NevBar />
      <Routes >
        <Route component={Error} />
        <Route exact path='/home' Component={() => <Home carInfo={CarData}/>} />
        <Route exact path='/about' Component={() => <About carInfo={CarData} setAddCartId={setAddCartId} addCartId={addCartId}/> } />
        <Route exact path='/cart' Component={() => <Cart carInfo={CarData} addCartId={addCartId} />} />
        <Route exact path='/contact' Component={() => <Contact />} />
      </Routes>

    </>
  );
}

export default App;
