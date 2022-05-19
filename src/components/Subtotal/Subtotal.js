import React, { useState } from "react";
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { useNavigate } from "react-router-dom";


const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();
    // const [price, setPrice] = useState(0);

    // const getBasketeTotal = (basket)=>{
    //     const totalprice = [];

    //     basket?.map((item)=>{
    //         totalprice.push(item.price)
    //     })
    //     console.log(totalprice)
    
    //     const result = totalprice.reduce((total, num)=>{
    //        return total + num
    //     },0)

    //     return result
    // }

  return (
      <div className="subtotal">
          Subtotal
          <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>
                        
                        Subtotal ({basket.length} items): 
                        <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox' /> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
            <button onClick={(e=> navigate('/payment'))}>Proceed to checkout</button>
      </div>
  )
};

export default Subtotal;
