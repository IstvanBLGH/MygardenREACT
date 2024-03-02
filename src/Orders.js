import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import "./Home.css";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'
import fruitTree from './pictures/fruit.png'
import rose from './pictures/rose.png'
import roses from './pictures/roses.png'
import { Link } from "react-router-dom";
function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else {
        setOrders([])
    }

  }, [user])

    return (
        <div className='orders'>
            <h1>Produse</h1>

            <div className="icons__container" >
        <Link to="/ListCard1" style={{ textDecoration: 'none' }}>
        <div className="card__first">
              <img src={fruitTree} alt="fruitTree"></img>
             <div className="text__card"><p>Pomi Fructiferi</p></div> 
        </div>
        </Link>
        <Link to="/ListCard2" style={{ textDecoration: 'none' }}>
        <div className="card__second">
            <img src={rose} alt="fruitTree"></img>
             <div className="text__card"><p>Butasi trandafiri</p></div> 
        </div>
        </Link>

        <Link to="/ListCard3" style={{ textDecoration: 'none' }}>
        <div className="card__last">
          <img src={roses} alt="fruitTree"></img>
          <div className="text__card"><p>Trandafiri</p></div> 
          <div className="text__card_2"><p>tip pomisor</p></div>
        </div>
        </Link>
       </div>


            <h1>Comenzile tale</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
