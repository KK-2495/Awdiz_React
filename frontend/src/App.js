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
import Mapping from './Components/Mapping';
import { useState } from 'react';
import Props from './Components/Props';
import StateEffect from './Components/StateEffect';
import DynamicStyle from './Components/DynamicStyle';

function App() {
  const [name, setName] = useState('Testing');
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/counter" element={<Counter testname={name} setName={setName} myName={"krish"} myAge={28} myStudents={["avc", "adxc", "syx"]} />}  />
      <Route exact path="/effect1" element={<Effect1 />} />
      <Route exact path="/effect2" element={<Effect2 />} />
      <Route exact path="/effect3" element={<Effect3 />} />
      <Route exact path="/effect4" element={<Effect4 />} />
      <Route exact path="/multi-product" element={<MultiProduct />} />
      <Route exact path="/single-product/:id" element={<SingleProduct />} />
      <Route exact path="/props" element={<Props />} />
      <Route exact path="/state-effect" element={<StateEffect />} />
      <Route exact path="/dynamic-style" element={<DynamicStyle />} />
      <Route exact path="/mapping" element={<Mapping array = {[{name:"T-shirt", image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg", price: 1000},{name:"Jeans", image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg", price: 1000},{name:"Shoe", image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg", price: 1000},{name:"Sun-Glasses", image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg", price: 1000},{name:"Watches", image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg", price: 1000}]} />} />
    </Routes>

    </div>
  );
}

export default App;
