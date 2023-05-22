
import '../CssFolder/App.css';
import { NevBar } from './Nevbar';
import Home from './Home';
import { About } from './About';
import Cart from './Cart';
import Contact from './Contact';
import Error from './Error';
import { CarApi } from './CarApi';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Issue from './Issue';

function App() {
  const { CarData } = CarApi();
  const [addCartId, setAddCartId] = useState([]);
  return (
    <>
      <NevBar />
      <Routes >
        <Route component={Error} />
        <Route exact path='/' Component={() => <Home carInfo={CarData} />} />
        <Route exact path='/home' Component={() => <Home carInfo={CarData} />} />
        <Route exact path='/about' Component={() => <About carInfo={CarData} setAddCartId={setAddCartId} addCartId={addCartId} />} />
        <Route exact path='/cart' Component={() => <Cart carInfo={CarData} addCartId={addCartId} />} />
        <Route exact path='/issue' Component={() => <Issue/> }  />
        <Route exact path='/contact' Component={() => <Contact />} />
      </Routes>

    </>
  );
}

export default App;
