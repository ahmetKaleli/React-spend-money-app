import React from 'react'

export default function Header({total,money}) {
  return (
    <div className='header'>
        <div>
           {total > 0 && money - total !== 0 &&  (
            <div className='header'>
              You have {money - total } $ to spend
            </div>
           )}
           {total === 0 && (
            <div  className='header'>
              You have {money}$ to spend
            </div>
           )}
           {money - total === 0 && (
            <div  className='header'>
              You're out of money
            </div>
           )}

            <style jsx>{`
              .header {
                position: sticky;
                top: 0;
                background: linear-gradient(to bottom, #CD04D4, #C905F6);
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 24px;
                letter-spacing: 1px;
              }
			      `}</style>

        </div>
      
    </div>
  )
}
