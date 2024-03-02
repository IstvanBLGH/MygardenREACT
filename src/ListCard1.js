import React from 'react'
import { useState } from "react";
import './Listcards.css'
import Caise from './Caise'
import Cirese from './Cirese.js'
import Mar from './Mar.js'
import Nectarin from './Nectarin.js'
import Par from './par.js'
import Piersic from './Piersic.js'
import Prun from './Prun.js'
import Visin from './Visin.js'
const ToggleItem = ({ source, title }) => {
  const [toggleThisElement, setToggleThisElement] = useState(false);
  

 
  return (
    <>
    <div className="Product__label" key={title}>
      <div className="btn__style">
      <button
        className={toggleThisElement? "Product__labelBtn":"Product__labelBt"}
        onClick={() => {setToggleThisElement((prev) => !prev);}}
      >
         {title}
      </button>
      </div>
      </div>
      <div class="Product__container">
          {toggleThisElement && <div className="Product__labelInfo">{source}</div>}
     </div>
    </>
  );
  
};


export default function ListCard1() {
  const data = [{src:<Caise/>, title:"Cais"},{src:<Cirese/>, title:"Cires"},{src:<Mar/>,title:"Mar"},{src:<Nectarin/>,title:"Nectarin"},{src:<Par/>,title:"Par"},{src:<Piersic/>,title:"Piersic"},{src:<Prun/>,title:"Prun"},{src:<Visin/>, title:"Visin"}];
 
  return (
    <div>
      {data.map(({src, title}) => {
        return <ToggleItem source={src} title={title}  />;
              
      })}
    </div>
  );
}




