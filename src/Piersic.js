import React from 'react'
import Product from './Product'
import './Listcards.css'
import Cardinal from './pictures/Pomi_Fructiferi/Piersic/Cardinal/cardinal.jpg'
import Dixerid from './pictures/Pomi_Fructiferi/Piersic/Dixired/piersic-dixired.jpg'
import Paraguayos from './pictures/Pomi_Fructiferi/Piersic/Paraguayos/948c6da449dd9e9a8a0203688019f914_XL.jpg'
import Redhaven from './pictures/Pomi_Fructiferi/Piersic/Redhaven/piersic-redhaven_0.jpg'

 export default class Piersic extends React.Component {
  render(){
 
  return (
    <div className='ListCard'>
        <div>
          
          <div className="product__row" >
          
          <Product
            id="1321341"
            title="Cardinal"
            price={11.96}
            rating={5}
            image={Cardinal}
            description1="
            Cardinal este un soi originar din S.U.A. este un pom de vigoare mijlocie, foarte productiv, foarte răspândit, rezistent la făinare dar sensibil la ger. Cardinal este un soi autofertil și precoce, rodește după anul 3 de la plantare. Ramurile de rod tipice sunt cele mixte, scurte și mijlocii. Înflorirea are loc în luna aprilie. Acest soi necesită rărirea fructelor, de altfel prezintă un număr mare de fructe gemene, acestea sunt primele care se înlătură la rărire."
            description2="Fructul este mijlociu (140 g), sferic, asimetric, galben-portocaliu acoperit cu roșu-carmin. Pulpa este galbenă, cu slabe infiltrații roșii sub epidermă, semiconsistentă, fin aromată, aderentă la sâmbure."
            description3="25 Iunie - 10 Iulie"
            description4="Autofertil"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7=" Aprilie"
            
          />
          <Product
            id="1321341"
            title="Dixerid"
            price={11.96}
            rating={5}
            image={Dixerid}
            description1="Piersicul Dixired, este un soi de origine americană, bine adaptat condițiilor din România. Este un pom fructifer de bază în livezile și grădinile de la noi din țară. Are o productivitate mare iar fructele se pot consuma proaspete sau sub diferite metode de preparate. Este un soi bun și pentru industria alimentară. Pomul este de talie mijlocie, viguros, coroana este globuloasă. Florile sunt campanulate (în formă de clopot). Ramurile de rod tipice sunt cele mixte, scurte și mijlocii. Perioada de înflorire este timpurie iar perioada de coacere a fructelor este în luna iulie, se dezvoltă cel mai bine în locurile cu multă lumină și mult soare, este de asemenea un soi rezistent la boli și la dăunători."
            description2="Fruct mijlociu (100-130 g) de formă sferică spre ovală, ușor turtit lateral, cu pielița galbenă, acoperită cu roșu marmorat pe partea însorită. Pulpa fructului este de culoare galbenă, consistentă și cu slabe infiltrații de roșu, cu gust plăcut, slab acidulat și aromă fină."
            description3="15-25 iulie"
            description4="Autofertil"
            description5=" Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7=" Aprilie"
            
          />
         
         
        </div>
        <div className="product__row" >
          
          <Product
            id="1321341"
            title="Paraguayos"
            price={11.96}
            rating={5}
            image={Paraguayos}
            description1="Soiul de piersic Paraguayos produce fructe care sunt utilizate pentru consumul în stare proaspătă și pentru industrializare sub formă de compoturi, sucuri, nectaruri și gemuri."
            description2="Fructul este mare, de formă bombată, turtită la poli; pieliţa alb-verzuie, partea însorită este roşie, pulpa albă, foarte aromată."
            description3="5-15 august"
            description4=" Autofertil"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7="Aprilie"
            
          />
          <Product
            id="1321341"
            title="Redhaven"
            price={11.96}
            rating={5}
            image={Redhaven}
            description1="Piersicul  Redhaven este un soi autofertil, cu productivitate medie spre ridicată, ce intră pe rod din al 2-lea an de la plantare. Poate asigura produțtii constante timp de 10-15 ani. Amplasarea piersicilor se face numai pe expoziții sudice sau sud vestice. Fructifică pe ramuri mixte cu lungime de 40-60 cm, ramuri care sunt purtătoare de mulți muguri de rod așezați în grupuri, de obicei câte trei, din care unul vegetativ, ceea ce implică rărirea fructelor după căderea fiziologică din iunie. Înflorirea este spectaculoasă și durează 10-14 zile, florile fiind de tip rozaceu."
            description2="Fructele sunt sferice, ușor asimetrice, neaderente la sâmbure, cu o greutate medie de 150 gr, foarte rezistente la transport. Culoarea este galben auriu - rosu carmin."
            description3="este în luna iulie"
            description4="Autofertil"
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