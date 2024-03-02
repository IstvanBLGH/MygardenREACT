import React from 'react'
import Product from './Product'
import './Listcards.css'
import CMBU from './pictures/Pomi_Fructiferi/Cais/CMBU/cais-cmbu.png'
import  NJA  from './pictures/Pomi_Fructiferi/Cais/NJA/Cais-Cais-Soiul-NJA-19-Soiuri.jpg'
import  Sulmona  from './pictures/Pomi_Fructiferi/Cais/Sulmona/cais_sulmona.jpg'

 export default class Caise extends React.Component {
  render(){
 
  return (
    <div className='ListCard'>
        <div>
          
          <div className="product__row" >
          
          <Product
            id="1321341"
            title="Cais-CMBU"
            price={11.96}
            rating={5}
            image={CMBU}
            description1=
              "Soiul de cais Cea Mai Buna De Ungaria are epoca de înflorire mijlocie spre târzie.  Pomii sunt de vigoare mare, fructificare pe ramuri de rod mijlocii, mixte sau ramificate alternate cu multe buchete. Are un potenţial productiv mediu, alternativ de la un an la altul, între 12-15 tone/ha."
           
              description2="
            Fructe mari (45-50 g), forma fructului este sferică, pulpa are o culoare portocalie, este dulce, suculentă și aromată. Este recomandat atât pentru consum proaspăt, cât și pentru sucuri, gemuri sau distilate etc.
            "
            description3="începutul lunii iulie"
            description4="Autofertil"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6="5-6m"
            description7="Aprilie"
          />
          <Product
            id="49538094"
            title="NJA"
            price={11.0}
            rating={4}
            image={NJA}
            description1="NJA este un soi timpuriu și rezistent la boli. Caracteristicile pomului: vigoare mijlocie, coroană sferică. 
            "
            description2="Fructe aromate, de dimensiune mijlocie spre mare (80 g). Forma fructului este ovoidală. Coaja are o culoare portocalie iar pe partea expusă razelor solare devine roșie. Pulpa este galben-portocalie și este neaderentă la sâmburile mici. Se poate consuma atât în formă proaspătă, cât și în formă prelucrată."
            description3="început de iunie"
            description4="Autofertil"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7="Aprilie"
          />
          <Product
            id="49538094"
            title="Sulmona"
            price={11.0}
            rating={4}
            image={Sulmona}
            description1="Sulmona este un soi de origine românească omologat în 1979.
            Epoca de înflorire: târzie; pomi de vigoare mare, fructificare predominantă pe ramuri
            scurte şi buchete, potenţial productiv ridicat : 15-18 t/ha.
            "
            description2="Forma: rotundă; mărimea: medie spre mare 45-55 g; pieliţa: galben-portocalie cu roşu
            carmin pe partea însorită; pulpa: galben-portocalie, consistență bună,
            aromată, foarte puţin aderentă la sâmbure; miezul dulce.
            "
            description3="25 iulie - 8 august
            "
            description4="Autofertil"
            description5="Februarie-Aprilie, Octombrie-Decembrie
            "
            description6=" 4-5m"
            description7="Aprilie
            "
          />
        </div>
        </div>
        
 </div>



  )
}
}