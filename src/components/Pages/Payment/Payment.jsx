import React, { useContext, useState } from 'react';
import LayOut from '../../LayOut/LayOut';
import classes from "./Payment.module.css";
import { DataContext } from '../../DataProvider/DataProvider';
import ProductCard from "../../Product/ProductCard";
import { 
  useStripe,
  useElements,
  CardElement
} from "@stripe/react-stripe-js";
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat';

function Payment() {
  const [cardError, setCardError] = useState(null)
  const [{user,basket}] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount + amount
  },0)

    const stripe = useStripe();  
    const elements = useElements();

  const handleChange = (e) =>{
    e.error?.message? setCardError(e?.error?.message):setCardError("")
  }

  return (
    <LayOut>
      {/* Header */} 
      <div className={classes.payment_header}> 
        Checkout ({totalItem}) items.
      </div>
      
      {/* payment methed */}
      <section className={classes.payment}>

        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div className={classes.user_address}>
            <div>{user?.email}</div>
            <div>123 React lane</div>
            <div>Ethiopian, Adis</div>
          </div>
        </div>
        <hr />
        {/* product */}

        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {
              basket?.map((item) => <ProductCard product={item} flex={true}/>)
            }
          </div>
        </div>

        <hr />
        {/* about Card information */}
        
        <div className={classes.flex}>
          <h3>Payment  methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form action="">
                {/* error */}
                {cardError && <small style={{color:"red"}}>{cardError}</small>}
                {/* Card */}
                <CardElement onChange={handleChange}/>
                {/* price */}
                <div className={classes.payment_price}>
                  <div>
                    <span style={{display:"flex",gap:"10px"}}>
                      Total order |<CurrencyFormat amount={total}/>
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </section>
    </LayOut>
    
  )
}

export default Payment;
