import React from 'react'

export default function BasketItem({item, product}) {
  return (
    <div>
			<li className="basket-item">
				{product.name} <span>x {item.amount}</span>
			</li>
			<style jsx>{`
              .basket-item {
                padding-bottom: 10px;
                font-size: 17px;
              }

              .basket-item span {
                color: #999;
              }
			`}</style>
		</div>
  )
}
