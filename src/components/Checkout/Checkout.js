import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import './Checkout.css';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
  return(
    <div className="checkout">
        <div className="checkout__left">
            <img src="https://storage.googleapis.com/website-production/uploads/2018/06/banner-ads-amazon.jpg" alt="" className="checkout__ad" />
            <div>
                <h4>Hello {user?.email}</h4>
                <h2 className="checkout__title">
                    Your shopping basket
                </h2>
                
                    {
                        basket.map(item=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                   
            </div>
        </div>

        <div className="checkout__right">
            <h2>The subtotal goes here</h2>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout;
