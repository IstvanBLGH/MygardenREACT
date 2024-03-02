import React from 'react'
import Product from './Product'
import './Listcards.css'
import Tina from './pictures/Pomi_Fructiferi/Nectarin/Tina/FB_IMG_1645813846238.jpg'

 export default class Nectarin extends React.Component {
  render(){
 
  return (
    <div className='ListCard'>
        <div>
          
          <div className="product__row" >
          
          <Product
            id="1321341"
            title="Tina"
            price={11.96}
            rating={5}
            image={Tina}
            description1="Tina este de vigoare mare, originar din România, rezistență genetică la atacul principalelor boli (bășicarea frunzelor, făinare), rezistentă la secetă și ger. Este un soi foarte productiv. Nectarinul are nevoie de cât mai multă lumină, așadar se alege un loc care să îi ofere acest lucru pentru cât mai mult timp."
            description2="Fructele sunt mari spre foarte mari (190 – 210 g), de formă ovoidă, simetrice. Epiderma este albă, acoperită cu roșu grena pe 75 – 85% din suprafața fructului. Pulpa alb-crem, textura fină, suculentă, gust foarte bun, aromat."
            description3="15 – 25 iulie"
            description4="Autofertil"
            description5=" Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7="Aprilie"
            
          />
         
        </div>
        </div>
        
 </div>



  )
}
}