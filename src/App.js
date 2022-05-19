// import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
// import { loadStripe } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/react-stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment/Payment';

function App() {

  const[{}, dispatch] = useStateValue();
  const promise = loadStripe('pk_test_51Kx7w0LltQT2G5ZOdn767LTWucElAVeRRMOsuAJ0C3naBGMhTl1yahBUoLQ2zRYpXda88bUscp7OV23bOd4n9PJx00prjOE0p0')

  useEffect(() => {
     onAuthStateChanged(auth, (user)=>{
       console.log("The user is ", user)

       if(user){
          dispatch({
            type: 'SET_USER',
            user: user
          })
       }else{
          dispatch({
            type: 'SET_USER',
            user: null
          })
       }
     })
  }, [])
  return (
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<><Header /> <Checkout /></>} /> 
          <Route path="/login" element={<> <Login /></>} /> 
          <Route path="/payment" element={<>
                        <Header /> 
                        <Elements>
                          <Payment />
                        </Elements> 
                        </>} />
          <Route path='/' element={<><Header /> <Home /> </>} />
        </Routes>
      </div>
  );
}

export default App;
