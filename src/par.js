import React from 'react'
import Product from './Product'
import './Listcards.css'
import Cure from './pictures/Pomi_Fructiferi/Par/Cure/par-cure.jpg'
import Napoca from './pictures/Pomi_Fructiferi/Par/Napoca/par-napoca.jpg'
import Untoasa_Hardy from './pictures/Pomi_Fructiferi/Par/Untoasa Hardy/res_e43654ebfda22363fc41bdf565a34e28.jpg'
import Wiliams_Alb from './pictures/Pomi_Fructiferi/Par/Wiliams Alb/par-williams_1.jpg'
import Wiliams_Rosu from './pictures/Pomi_Fructiferi/Par/Wiliams Rosu/par-williams-rosu_1.jpg'

 export default class Par extends React.Component {
  render(){
 
  return (
    <div className='ListCard'>
        <div>
          
          <div className="product__row" >
          
          <Product
            id="1321341"
            title="Cure"
            price={11.96}
            rating={5}
            image={Cure}
            description1="Soiul de păr Cure este de origine franceză, aclimatizat de foarte mult timp la noi în țară, unde este foarte răspândit. Este un păr cunoscut de peste 250 de ani, un păr de iarnă. Pomul este viguros, cu bună capacitate de ramificare, compatibil cu gutuiul, foarte productiv."
            description2="Fructele au o formă piriformă alungită în nuanțe galbui-verzui, iar din loc în loc prezintă puncte mici ruginii. Fructul este mare, aproximativ 200-300g, piriform, alungit, asimetric, cu o dungă de rugină longitudinală. Pulpa fructelor este albă, suculentă și gustoasă. Pulpa este parfumată și potrivit de dulce cu gust ușor astrigent, plăcut la maturitatea de consum."
            description3="mijlocul lunii octombrie"
            description4=" Autofertil"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7=" Aprilie"
            
          />
          <Product
            id="1321341"
            title="Napoca"
            price={11.96}
            rating={5}
            image={Napoca}
            description1="Părul Napoca este un soi românesc ce se pretează pentru plantații superintensive. Este un soi obtinut de cercetătorii de la Cluj-Napoca, cu o productivitate ridicată (25-30 tone/ha). Intră repede pe rod și este foarte rezistent la ger. Este de vigoare mijlocie, produce atât pe ramuri scurte cât și lungi, este parțial autofertil și un foarte bun polenizator. Formează o coroană larg piramidală, rară, aerisită, înflorește târziu, astfel este ferit de înghețurile de primăvară. Frunzele sunt verzi-gălbui, mici sau mijlocii, acuminate și involute."
            description2="Fructele sunt mijlocii, 120-170 g, piriforme, cu pielița galbenă pe partea umbrită și cu o rumeneală roșiatică pe partea însorită, netedă, lucioasă. Pulpa este alb-gălbuie, fondantă, suculentă, dulce, plăcut acidulată, fin aromată, este bună pentru masă, compoturi și gemuri. Fructele pot fi păstrate 2-3 săptămâni, ceea ce pentru un păr de vară constituie o calitate deosebită. Fructele se pretează bine la transport și manipulare."
            description3="sfârșitul lunii august"
            description4="Autofertil"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7="Aprilie
            "
            
          />
          <Product
            id="1321341"
            title="Untoasa Hardy"
            price={11.96}
            rating={5}
            image={Untoasa_Hardy}
            description1="Părul Untoasa Hardy ( popular pere jambon) este un soi de toamnă franțuzesc, cunoscut de 200 de ani. Pomul este de vigoare mare, produce mult și constant. Tulpina este puternică cu o coroană ramificată. Are o înălțime la maturitate de aproximativ 2-3 m și preferă zonele însorite. Frunzele sunt semi- lucioase cu formă ovală într-o culoare de verde închis. "
            description2="Fructele sunt mari, aproximativ 200g, cu formă conică alungită. Fructele coapte au o nuanță ruginie. Pulpa este de culoare alb-verzuie, semidensă, suculentă, dulce, ușor acidulată și cu gust bun. "
            description3="20 Septembrie - 10 Octombrie"
            description4="Williams, Favorita lui Clapp, Williams Rosu"
            description5=" Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7="Aprilie"
            
          />
         
        </div>
        <div className="product__row" >
          
          <Product
            id="1321341"
            title="Wiliams Rosu"
            price={11.96}
            rating={5}
            image={Wiliams_Alb}
            description1="Williams alb este un soi de păr de vară – toamnă, originar din Anglia introdus la noi în țară în anul 1900. Pomul are vigoare mijlocie, înflorește semitârziu sau târziu, este foarte precoce și productiv. Rodește abundent pe nuielușe și țepușe ( ramuri scurte). Este un soi de păr autosteril (nu polenizează cu propriul polen) dar poate forma fructe fără polenizare."
            description2="Fructul este mijlociu spre mare,de tip piriform de culoare galben- pai. Pulpa este albă, dulce, suculentă, untoasă cu aromă delicată și de calitate foarte bună."
            description3="August – Septembrie"
            description4="Kaiser, Conference, Abbate Fetel"
            description5=" Februarie-Aprilie, Octombrie-Decembrie"
            description6=" 3-4m"
            description7="Aprilie"
            
          />
          <Product
            id="1321341"
            title="Wiliams Rosu"
            price={11.96}
            rating={5}
            image={Wiliams_Rosu}
            description1="Williams Roșu este un pom fructifer autosteril, originar din SUA, identificat în anul 1938. Este un soi de păr de vară-toamnă. Pomul prezintă vigoare mare și are coroana aplatizată, este un soi rezistent la îngheț, boli și dăunători. Frunzele sunt semi-lucioase cu o formă ovală-alungită și ascuțită în nuanțe de verde închis. Florile sunt albe, mici, parfumate formate din 5 sau 6 petale. "
            description2="Fructul este de mărime mijlocie sau mare, având coaja ușor ondulată, de culoare brun roșcat, subțire, având o greutate medie de 180-200 g. Coloratura este instabilă în funcție de condițiile climatice. Pulpa este albă, zemoasă, fondantă, parfumată, dulce acrișoară, fără sclereide."
            description3="15 August-15 Septembrie"
            description4="Conference, Abate Fetel"
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