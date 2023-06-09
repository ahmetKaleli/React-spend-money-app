import React from 'react'
import "../index.css"
export default function Product({product, basket, setBasket, total, money}) {

    const basketItem = basket.find(item =>item.id === product.id)
    const addBaket = ()=>{
        // baskette ürün varmi onu kontrıl etmemiz lazim
       const checkBasket = basket.find(item=>item.id ===product.id)
       if(checkBasket){
        checkBasket.amount +=1
        setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
       } else{
        setBasket([...basket,{
            id:product.id,
            amount:1
        }])
       }
    }

    const removeBasket = ()=>{
        const currentBasket = basket.find(item=>item.id ===product.id)
        const basketWithoutCurrent = basket.filter(item=>item.id !== product.id)
        currentBasket.amount -=1
        if(currentBasket.amount === 0)
        {
            setBasket([...basketWithoutCurrent])
        }else{
            setBasket([...basketWithoutCurrent, currentBasket])
        }
        
       }


  return (
    <div className='product'>
      <img src={product.image}/>
      <h5>{product.name}</h5>

      <div className='price'> ${product.price}</div>

      <div className='actions'>
        <button className='out-btn' disabled={!basketItem} onClick={removeBasket}>Del</button>
        <span className='amount'>{basketItem && basketItem.amount || 0}</span>
        <button className='buy-btn' disabled={total + product.price > money} onClick={addBaket}>Add to Basket</button>
      </div>
      <style jsx>{`
                  .product {
                    padding: 15px;
                    background: #fff;
                    border: 1px solid #ddd;
                    margin-bottom: 20px;
                    width: 20%;
                  }

                  .product img {
                    width: 100%;
                    height:250px
                  }

                  .product h5 {
                    font-size: 20px;
                    margin-bottom: 10px;
                  }

                  .product .price {
                    font-size: 20px;
                    color: #179b17;
                  }

                  .product .actions {
                    display: flex;
                    align-items: center;
                    margin-top: 15px;
                  }

                  .actions button {
                    height: 40px;
                    padding: 0 15px;
                    flex: 1;
                    cursor: pointer;
                  }

                  .actions button[disabled] {
                    opacity: .3;
                    cursor: not-allowed;
                  }

                  .actions .buy-btn {
                    background: #61dafb;
                    font-size: 14px;
                    font-weight: 500;
                    border-radius: 0 4px 4px 0;
                  }

                  .actions .out-btn {
                    background: #ccc;
                    font-size: 14px;
                    color: #333;
                    font-weight: 500;
                    border-radius: 4px 0 0 4px;
                  }

                  .actions .amount {
                    width: 50px;
                    text-align: center;
                    border: 1px solid #ddd;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 17px;
                    font-weight: bold;
                    color: #555;
                  }
				`}</style>
    </div>
  )
}
