import React from 'react'
import BasketItem from './BasketItem'

export default function Basket({basket, total, products, setBasket}) {
  const resetBasket =()=>{
    setBasket([])
  }
  return (
    <>
       	<div className="basket-container container">
				<h3>Shopping Details</h3>
				<ul>
					{basket.map(item => (
						<BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
					))}
				</ul>
				<div className="total">
					Total: ${total}
				</div>
				<button className="basket-reset-btn" onClick={resetBasket}>Reset Basket</button>
			</div>
			<style jsx>{`
              .basket-container {
                padding: 20px;
                background: #fff;
                border: 1px solid #ddd;
              }

              .basket-container h3 {
                font-size: 20px;
                margin-bottom: 15px;
              }

              .basket-container .total {
                border-top: 1px solid #ddd;
                padding-top: 10px;
                margin-top: 10px;
                font-size: 18px;
                font-weight: bold;
                text-align: right;
                color: #179b17;
              }

              .basket-reset-btn {
                background: #61dafb;
                height: 40px;
                padding: 0 20px;
                font-size: 16px;
                font-weight: 500;
                cursor: pointer;
              }
			`}</style>
        
    </>
  )
}