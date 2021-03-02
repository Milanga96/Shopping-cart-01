import React from 'react'
import './App.css';
import Header from './components/Header'
import Products from './components/Products'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import  {ProductsDetails} from './components/ProductsDetails'
import Details from './components/Details';
import Cart from './components/Cart'
import SignIn from "./components/SignIn";

function App() {
  return (
    <ProductsDetails>
    <div className="App">
      <Router>
     <Header/>
     <section>
       <Routes>
         <Route path="products" element={<Products/>}/>
         <Route path="Products/:id" element={<Details/>}/>
         <Route path="cart" element={ <Cart /> } />
         <Route path="SignIn" element={<SignIn/>} />
         
       </Routes>
     </section>
     </Router>
    </div>
    </ProductsDetails>
  );
}

export default App;
