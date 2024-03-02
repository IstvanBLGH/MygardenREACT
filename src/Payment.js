import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios';
import { db } from "./firebase";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])


    //SETUP FOR CARD

   
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Finalizare Comanda (
                        <Link to="/checkout">{basket?.length} Produse</Link>
                        )
                </h1>


                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Adresa de livrare</h3>
                    </div>
                    <div className='payment__address'>
                        <p>Pentru : {user?.email}</p>
                        <p>Judetul :   ------</p>
                        <p>Oras/Loc :  ------</p>
                        <p>Str :   ------</p>
                        <p>Nr :  ------</p>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Metoda de plata</h3>
                    </div>
                    <div className="payment__details">

                            <form >
                                <CardElement />

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Total de plata: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        suffix={" lei"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Cumpara/Finalizare comanda"}</span>
                                    </button>
                                </div>

                                  {/* Errors */}
                                {error && <div>{error}</div>}
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
