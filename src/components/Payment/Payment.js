import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import './Payment.css';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);


    const handleSubmit = (e) => {
        e.preventDefault()
        // All stripe logic goes here
    }

    const handleChange = (e) => {
        
    }

    return(
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length}</Link>
                    )
                </h1>
                {/* Deliver Address */}
              <div className="payment__section">
                  <div className="payment__title">
                      <h3>Delivery Address</h3>
                  </div>
                  <div className="payment__address">
                      <p>{ user?.email }</p>
                      <p>123 Address Lane</p>
                      <p>PH, Nigeria</p>
                      <p>Are you updating</p>
                  </div>
              </div>

                {/* Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                      <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {
                            basket.map((item)=>(
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


                {/* Payment Method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        {/* Stripe functionalities */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                        </form>
                    </div>
                </div>
          </div>
      </div>
    )
};

export default Payment;
