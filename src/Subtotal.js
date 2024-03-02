import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
       suffix={"lei"}
        renderText={(value) => (
          <>
            <p>
              Total: ({basket.length} produse): <strong>{value}</strong>
            </p>
            
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        
      />

      <button onClick={e => history.push('/payment')}>Comanda</button>
    </div>
  );
}

export default Subtotal;
