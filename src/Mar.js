import React from 'react'
import Product from './Product'
import './Listcards.css'
import Clar_Alb from './pictures/Pomi_Fructiferi/Mar/Clar Alb/Pomi-fructifei-mar-clar-alb-Pepiniera-Sosa-–-3.png'
import Florina from './pictures/Pomi_Fructiferi/Mar/Florina/mar-florina.jpg'
import Golden_Delicious from './pictures/Pomi_Fructiferi/Mar/Golden Delicious/mar-golden.jpg'
import Idared from './pictures/Pomi_Fructiferi/Mar/Idared/Idared-600x600.jpg'
import Ionathan from './pictures/Pomi_Fructiferi/Mar/Ionathan/Jonathan-2.jpg'
import Melba from './pictures/Pomi_Fructiferi/Mar/Melba/foto_i_opisanie_odnogo_iz_starejshih_sortov_yabloni_melba.jpg'
import Starkimson from './pictures/Pomi_Fructiferi/Mar/Starkimson/mar-starkinson.jpg'
export default class Mar extends React.Component {
    render(){
   
    return (
        <div className='ListCard'>
        <div>
          
        <div className="product__row" >
          
          <Product
            id="12321342"
            title="Clar Alb"
            price={11.96}
            rating={5}
            image={Clar_Alb}
            description1="Clar Alb este un soi de măr de vară foarte popular în România, cultivat până la o altitudine de 1200 m. Acest soi este de vigoare mijlocie, cu trunchi drept și coroana globuloasă-sferică, rodește pe ramuri scurte.
            "
            description2="Fructul este de dimensiune mijlocie, aproximativ 150-180 g, are un gust dulce-acrișor și foarte răcoritor. Culoarea pieliței este verde deschis sau verzuie, aceasta fiind acoperită cu un strat gros de pruină albicoasă. Mai prezintă o dungă verzuie sau ruginie care se întinde de la vârf până la baza fructului. La supracoacere devine malaiată, în timp ce în verile reci, pulpa devine transparentă. Clar alb este un soi de măr cu o productivitate mare, dar fiind un soi de vară, merele se pot păstra doar 2-3 săptămâni de la recoltare. "
            description3="a doua decada a lunii Iulie"
            description4="Melba"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6=" 3-4m"
            description7="Aprilie
            "
          />
          <Product
            id="49538095"
            title="Florina"
            price={11.0}
            rating={4}
            image={Florina}
            description1="Florina este unul din cele 3 soiuri de măr pe care ar trebui să le aveți în grădină, merele produse de acest soi fiind de o frumusețe rară. Este un soi obținut la Angers în Franța, din soiul Jonathan și introdus în cultură în 1977. În România este cultivat în toată țara fiind un soi de bază. Este un pom fructifer de vigoare mijlocie, înflorește târziu și fructifică în special pe ramuri lungi. Este un soi aproape imun la rapăn, tolerant la făinare, precoce și extrem de productiv. Nu are nevoie de multe stropiri."
            description2="Fructul este mijlociu spre mare, sferic- turtit, de aproximativ 150-200 g, ușor tronconic cu 5 coaste, de culoare striată, roșu deschis cu puncte albicioase pe toată suprafața, asemănătoare cu niște pistrui. Pulpa este suculentă, potrivit de dulce și slab acidulată, crocantă, foarte plăcut aromată, însă devine făinoasă la supracoacere."
            description3="este în luna octombrie"
            description4="Golden Delicious, Granny Smith"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7="Aprilie"
          />
          <Product
            id="49538094"
            title="Golden_Delicious"
            price={11.0}
            rating={4}
            image={Golden_Delicious}
            description1="Golden Delicious este un soi originar din USA, zona Virginia de Vest. Este un pom fructifer de vigoare mijlocie, rodește pe ramuri lungi mult ramificate. Rărirea este obligatorie.
            Necesită tratamente fitosanitare - sensibil la rapăn / defect - formează plasă pe fructe.
            "
            description2="Fructele sunt mijlocii spre mari ovosferice 130 g – 200 g, cu 5 coaste largi, puțin proeminente, de culoare galben-aurie cu puncte de rugină mari, rare. Pulpa este galbenă, crocantă, dulce, slab acidulată, cu aromă specifică, foarte gustoase.  Pielița este lipsită de ceară motiv pentru care pierde apa, se deshidratează ușor în spații de păstrare improvizate, însă nu îi scade valoarea nutrițională, fiind și mai savuros. "
            description3="în luna Octombrie"
            description4="Pionier, Florina, Jonathan, Idared"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6=" 3-4m"
            description7="Aprilie"
          />
          <Product
            id="12321341"
            title="Idared"
            price={11.96}
            rating={5}
            image={Idared}
            description1="Idared este un soi de măr de toamnă, obținut prin încrucișarea soiurilor Ionahan și Wagener. Este un pom de vigoare supramijlocie cu o înălțime de aproximativ 200-300 cm. Frunzele au o formă ovală ascuțită cu marginile ușor zimtate într-o culoare de verde închis, semi-lucioasă."
            description2="Fructele au o formă sferică turtită foarte asimetrică cu o greutate de aproximativ 170-200g. Coaja fructelor este subțire în nuanțe de roșu-vișiniu pe un fond galben-verzui. Pulpa este alburie, fină și suculentă. Gustul fructului este acidulat spre dulce, cu aroma intensă apropiată de aroma soiului Jonathan."
            description3=" dupa 25 Septembrie
            "
            description4="Autofertil"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7="Aprilie"
          />
        </div>
        <div className="product__row" >
          
          
          <Product
            id="49538099"
            title="Ionathan"
            price={11.0}
            rating={4}
            image={Ionathan}
            description1="Jonathan este un soi de măr de toamnă. Este recomandat mai ales pentru consum proaspăt.
            Caracteristicile pomului: vigoare mijlocie, coroană semi aplatizată. Crengile sunt subțiri. Ramifică abundent, lucrările de formare a coroanei putând fi efectuate chiar după intrarea pe rod.
            "
            description2="Fructele sunt de dimensiuni mijlocii (130-140 g). Forma fructului este sferică, ușor alungită. Coaja are culoarea roșie. Pulpa fructului este alb-gălbuie, zemoasă, având un gust specific dulce-acrișor."
            description3="mijlocul lunii septembrie"
            description4="Autofertil"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7="Aprilie"
          />
          <Product
            id="49538094"
            title="Melba"
            price={11.0}
            rating={4}
            image={Melba}
            description1="Melba este un soi de măr de origine canadiană. Este un pom de vigoare mijlocie-mare, intrând pe rod foarte repede, rodește abundent și susținut, pe formațiuni lungi. Este rezistent la boli, cu mici pretenții în ceea ce privește solul, rezistent la ger și secetă. Se pretează pentru consumul în stare proaspătă, dar și pentru industrializare."
            description2="Fructul este mare, 130-140 grame, sferic-turtit, cu pielița subțire, verde-gălbuie pe partea umbrită și roșie închisă pe partea însorită. Are pulpa albă, suculentă, dulce, ușor acidulată, intens aromată, de calitate foarte bună pentru masă. Fructele culese se pot consuma cca. 3 săptămâni de la recoltare."
            description3=" prima și a doua decadă a lunii august"
            description4="Idared, Pionier, Golden Delicious, Starkrimson"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7="Aprilie"
          />
          <Product
            id="495380944"
            title="Starkimson"
            price={11.0}
            rating={4}
            image={Starkimson}
            description1="Starkrimson este un soi de măr de iarnă. Pomul are o creștere de vigoare mijlocie-mare și formează o coroană erectă. Este un soi autofertil, nu are nevoie de polenizatori."
            description2="Fructele sunt de mari dimensiuni (150 – 170 g). Forma fructului este conică, ușor alungită. Coaja este cerată, are culoarea roșie și este brăzdată cu dungi roșii închise. Pulpa este alb-gălbuie, tare, are o aciditate redusă și o aromă specifică pepenelui galben. Este recomandat pentru consum proaspăt, dar își păstrează aromele până în martie."
            description3="septembrie, octombrie"
            description4="Autofertil "
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