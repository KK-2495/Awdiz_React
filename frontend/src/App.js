import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/counter" element={<Counter />}  />
    </Routes>

    </div>
  );
}

export default App;
