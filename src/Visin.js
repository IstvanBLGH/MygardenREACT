import React from 'react'
import Product from './Product'
import './Listcards.css'
import Crisana from './pictures/Pomi_Fructiferi/Visin/Crisana/mari-timpurii.jpg'
import Meteor from './pictures/Pomi_Fructiferi/Visin/Meteor/w_800h_600_148706297038309.jpg'
import morella from './pictures/Pomi_Fructiferi/Visin/Morella Neagră/res_21f3dccd86fd4c02bf03751420857a28.jpg'

 export default class Visin extends React.Component {
  render(){
 
  return (
    <div className='ListCard'>
        <div>
          
          <div className="product__row" >
          
          <Product
            id="1321341"
            title="Crisana"
            price={11.96}
            rating={5}
            image={Crisana}
            description1="Crișana este un soi autohton obținut prin selecție la Institutul de Cercetare-Dezvoltare pentru Pomicultură Piteşti-Mărăcineni, un soi cu fructe zemoase. 
            Pomul este de vigoare mare, perioada de înflorire este destul de târzie. Soi autofertil, mugurii fructiferi se găsesc pe ramurile lungi și mijlocii. Forma coroanei este rotundă, având la maturitate înălțimea de 3-4 m. Este un soi rezistent la boli și dăunători, dar și la îngheț.
            "
            description2="Fructul este de mărime mijlocie (5-7gr), de culoare roșu viu. Pielița este elastică, subțire și lucioasă, având culoare roșu-purpuriu. Pulpa este consistentă, ușor acidulată, neaderentă la sâmbure."
            description3="sfârșit de iunie - început de iulie."
            description4="Autofertil"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7="Aprilie, Mai"
            
          />
          <Product
            id="1321341"
            title="Meteor"
            price={11.96}
            rating={5}
            image={Meteor}
            description1="Vișinul Meteor este un soi autofertil, de vigoare mijlociu- mare, rodește pe formațiuni scurte, necesită puține tăieri. Este un soi rezistent la boli și dăunători și la îngheț. Nu necesită multe tratamente fitosanitare. Nu este sensibil la crăpare."
            description2="Fructul este de mărime mijlocie, aproximativ 5g de formă sferică alungită. Fructele au un gust dulce acrișor. Pulpa mijlociu tare, ușor fibros, gust specific, dulce acrișor, nu este aderentă la sâmbure, sâmbure mic. Culoarea pieliței este roșu închis, destinat pentru industrializare. Se comportă foarte bine la păstrare."
            description3=" la mijlocul lunii iulie"
            description4="Autofertil"
            description5=" Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7="Aprilie"
            
          />
         
         
        </div>
        <div className="product__row" >
          
          <Product
            id="1321341"
            title="Morela"
            price={11.96}
            rating={5}
            image={morella}
            description1="Morela Negră are pomul de vigoare mică, cu coroana turtită, rodește pe ramuri plete. Este un soi târziu, autofertil ce rodește regulat."
            description2="Fructele sunt mari, rotunde de culoare vișiniu negricios, lucioase. Pulpa este de culoare roșie vișinie, ușor acidulată, semiaderentă la sâmbure."
            description3="10-20 iulie"
            description4="Nana"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7="Aprilie"
            
          />
          
          
         
        </div>
        </div>
        
 </div>



  )
}
}