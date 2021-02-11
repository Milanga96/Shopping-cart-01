import React from 'react';
import Header from './components/Header'
import {BrowserRouter as Router } from 'react-router-dom'
import {ProductsDetails} from './components/ProductsDetails';
import Products from './components/products'

function App ()  {
  return(
    <ProductsDetails>
    <div className="App">
        <Router>
          <Header />

          
               <Products /> 
      
              
           
         
        </Router>
      
    </div>
    </ProductsDetails>
  );
}

export default App;