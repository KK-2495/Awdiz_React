import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Counter from './Components/Counter';
import Effect1 from './Components/Effect1';
import Effect2 from './Components/Effect2';
import Effect3 from './Components/Effect3';
import Effect4 from './Components/Effect4';
import MultiProduct from './Components/MultiProduct';
import SingleProduct from './Components/SingleProduct';

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/counter" element={<Counter />}  />
      <Route exact path="/effect1" element={<Effect1 />} />
      <Route exact path="/effect2" element={<Effect2 />} />
      <Route exact path="/effect3" element={<Effect3 />} />
      <Route exact path="/effect4" element={<Effect4 />} />
      <Route exact path="/multi-product" element={<MultiProduct />} />
      <Route exact path="/single-product/:id" element={<SingleProduct />} />
    </Routes>

    </div>
  );
}

export default App;
