import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  // BEM convention
  return (
    <Router>
      <div className="app">
      <Header/>
        <Routes>
        
          <Route path="/" element={<Home/>}/>

          <Route exact path="/checkout" element={<Checkout/>}> 
          
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
