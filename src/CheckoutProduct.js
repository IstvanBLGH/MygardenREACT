import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import './Orders'
function CheckoutProduct({ id, image, title, price,description1,description2, description3,description4, description5,description6, description7,  hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    
    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <div className='reverse__Button'>
            <Link to="/Orders" style={{ textDecoration: 'none' }}>
            {!hideButton && (
                    <button onClick={removeFromBasket} className="buton">Produse</button>
                )}
            </Link>
            
            </div>
            <div className='info__Part'>
            <img className='checkoutProduct__image' src={image} />

                <div className='checkoutProduct__info'>
                    <p className='checkoutProduct__title'>{title}</p>
                       
                        <div className='Description'>
                            <div className='descript__name'><p>Descriere:</p></div>
                            <div className='sub__Description'><p>{description1}</p></div>
                        </div>
                   
                    
                    <div className='Description'>
                    <div className='descript__name'><p>Caracteristicile fructului: </p></div>
                        <div className='sub__Description'><p>{description2}</p></div>
                    </div>


                    
                    <div className='Description'>
                    <div className='descript__name'><p>Perioada de maturare:</p></div>
                        <div className='sub__Description'><p>{description3}</p></div>
                    </div>

                    
                    <div className='Description'>
                        <div className='descript__name'> <p>Polenizatori:</p></div>
                         <div className='sub__Description'><p>{description4}</p></div>
                    </div>

                    
                    <div className='Description'>
                        <div className='descript__name'><p>Perioada de plantare:</p></div>
                        <div className='sub__Description'><p>{description5}</p></div>
                    </div>

                    <div className='Description'>
                        <div className='descript__name'><p>Distanța de plantare:</p></div>
                        <div className='sub__Description'><p>{description6}</p></div>
                    </div>

                    
                    <div className='Description'>
                         <div className='descript__name'><p>Perioada de înflorire:</p></div>
                         <div className='sub__Description'><p>{description7}</p></div>
                    </div>
                    
                    
                </div>
            </div>
            <div className="Description__price">
                   <div className='price'> 
                    <p>
                    <strong>--.--</strong>
                        <small>.lei</small>
                        
                    </p>   

                    </div>
            </div>
            <div className='price__bottom'></div>
        </div>
    )
}

export default CheckoutProduct
