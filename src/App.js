import {useState, useEffect} from "react"

import './App.css';
import Header from "./components/Header";
import Product from "./components/Product"
import products from "./products.json"
import Basket from "./components/Basket";
function App() {

  const [money, setMoney] = useState(200)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    setTotal(basket.reduce((acc, item)=>{
      return acc + (item.amount * (products.find(product =>product.id === item.id).price))
    },0))
  },[basket])



  return (
    <div >
      <Header total={total} money={money}/>
      <div className="container products">
        {
          products.map(product =>(
            <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product}/>
          ))
        }
      </div>
      <Basket total={total} basket={basket} setBasket={setBasket} products={products}/>
     
    </div>
  );
}

export default App;
