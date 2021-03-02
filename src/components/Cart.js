
import React,{useContext, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import {DataContext} from './ProductsDetails'
import Colors from './Colors'
import Sizes from './Sizes'
import { Card ,Row,Col} from 'antd';

function Cart() {
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0)


    useEffect(() =>{
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count)
            },0)
            setTotal(res)
        }
        getTotal()
    },[cart])

    const reduction = id => {
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }
    const increase = id => {
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1 ;
            }
        })
        setCart([...cart])
    }

    const removeProduct = id => {
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }
    

    if(cart.length === 0)
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2>


  return(
      <>
           {
               cart.map(product =>(
    


                  <div className="cart_left">
                   <div className="details cart" key={product._id} style={{width:800,height:200}}>
                       <div className="img-container" 
                       style={{backgroundImage: `url(${product.images[0]})`,width:150,height: 150,marginTop:-30,direction:"horizontal"}} />
                       <div className="box-details" style={{marginTop:-30}} >
                           <h3 title={product.title}>{product.title}</h3>
                           <p>${product.price}</p>
                          
                           <p>{product.content}</p>
                          
                           <div className="amount">
                               <button className="count" onClick={() => reduction(product._id)}> - </button>
                               <span>{product.count}</span>
                               <button className="count" onClick={() => increase(product._id)}> + </button>
                           </div>
                           <div className="delete" onClick={() => removeProduct(product._id)}>X</div>
                           
                       </div>
                       
                       </div>
                       <div className="cart_right">
                           <div className="cart_info">
                       <div className="Continue_shopping">
                          
                          <div className="total">
                          
                         
                          <h3 style={{paddingLeft:0}}>Total: $ {total}</h3>
                          <Link to="/checkout">Checkout</Link>
                           </div>
                           </div>
                          
                          </div>
                   </div>
                   </div>
               ))
           }

          
        </>
    
    )
}

export default Cart