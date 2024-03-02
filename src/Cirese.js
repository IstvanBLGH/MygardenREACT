import React from 'react'
import Product from './Product'
import './Listcards.css'
import Bigarreau_burlat from './pictures/Pomi_Fructiferi/Cires/Bigarreau burlat/Cires-Cires-Soiul-Biggareau-Burlat-Soiuri.jpg'
import Germesdorf from './pictures/Pomi_Fructiferi/Cires/Germesdorf/negre-de-b-ta_3568.JPG'
import Hedelfinger from './pictures/Pomi_Fructiferi/Cires/Hedelfinger/Cires-Hedelfinger1.jpg'
import Kordia from './pictures/Pomi_Fructiferi/Cires/Kordia/kordia.jpg'
import Regina from './pictures/Pomi_Fructiferi/Cires/Regina/cires-regina_1.jpg'
import Stella from './pictures/Pomi_Fructiferi/Cires/Stella/cires-stella.jpg'
import Timpuriu_de_mai from './pictures/Pomi_Fructiferi/Cires/Timpuriu de mai/pomi-fructiferi-cires-bigarreau-burlat-64139.jpg'
import Urias_de_bistrita from './pictures/Pomi_Fructiferi/Cires/Urias de bistrita/rubin.jpg'
import Van from './pictures/Pomi_Fructiferi/Van/Van-600x600.jpg'
import Rubin from './pictures/Pomi_Fructiferi/Rubin/rubin.jpg'

 export default class Cirese extends React.Component {
    render(){
   
    return (
        <div className='ListCard'>
        <div>
          
        <div className="product__row" >
          
          <Product
            id="12321341"
            title="Bigarreau burlat"
            price={11.96}
            rating={5}
            image={Bigarreau_burlat}
            description1="Ciresul Bigarreau Burlat este un soi francez, cu origine genetică necunoscută, dar se presupune că a fost selecționat în Maroc în anul 1935. Pomul este de vigoare medie, cu coroana largă, globuloasă. Este un soi autosteril."
            description2="Fructul este mare de 6-7 g, are o culoare roșie, care la maturitate se colorează în vișiniu. Pulpa este pietroasă, având un gust dulce, ușor acidulat,"
            description3="Ultima decada a lunii Mai"
            description4="Van, Germersdorf."
            description5=" Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7="Aprilie"
          />
          <Product
            id="49538094"
            title="Germesdorf"
            price={11.0}
            rating={4}
            image={Germesdorf}
            description1="Cires Germersdorf cunoscut și sub denumirea de inimă de porumbel,  este un soi vechi selecționat în Germania, are cea mai largă răspândire, fiind cunoscut în toate țările și pe toate continentele unde se cultivă cireșul. Cireșul Germersdorf este un soi de vigoare mare, productivitate medie, cu coroana largă, ușor pletoasă, rezistent la ger și acesta, fiind altoit pe mahaleb, cu productivitate mare. Nu necesită efectuarea a multe tratamente fitosanitare."
            description2="Fructele sunt mari (8-1 gr.) cordiforme cu partea dorsală bombată, de culoare roșie - sângerie. Sunt pietroase, cu pulpa tare, au culoare bordo roșiatică, gust armonios dulce acidulat."
            description3="sfarsit de iunie, început de iulie"
            description4="Van, Stella"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7="Aprilie"
          />
          <Product
            id="49538094"
            title="Hedelfinger"
            price={11.0}
            rating={4}
            image={Hedelfinger}
            description1="Ciresul Hedelfinger este un soi vechi,de origine germană, din secolul XIX, creat de Hedelfingen (Wurttemberg) foarte răspândit in toate zonele pomicole.
            Pomul este viguros, cu coroana sferică sau larg conică, rară, cu ramuri divergente. La vârsta înaintată, din cauza ramurilor subțiri, coroana capătă formă caracteristică, cu ramuri pendente. Rezistent la ger.
            "
            description2="Fructele sunt mari, ovoid alungite, de culoare roșie negricioasă. Pulpa roșie închisă, pietroasă, cu sucul colorat în roșu, dulce, semiaderentă la sâmbure."
            description3="Sfarsit de Iunie, început de Iulie"
            description4=" Germersdorf, Van , Katalin"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6=" 3-4m"
            description7=" Aprilie"
          />
          <Product
            id="12321341"
            title="Kordia"
            price={11.96}
            rating={5}
            image={Kordia}
            description1="Ciresul Kordia este un soi originar din Cehia, obținut de Institutul de Cercetări Pomicole de la Holovousy. Pomul are o vigoare mare, foarte productiv soi autosteril.Acesta are o coroană larg-conică și înaltă, rodește pe buchete de mai și ramuri mijlocii. Înflorirea are loc târziu și este ușor sensibil la ger."
            description2="Fructul ciresului Kordia este mare de la 8-10 g cu o formă alungită si partea dorsală bombată. Pielița este de culoare roșie strălucitoare, iar la maturitatea deplină devine de culoare grenă. Pulpa este pietroasă dar suculentă, dulce, neaderentă la sâmbure."
            description3="Jumătatea lunii Iulie"
            description4="Van, Germersdorf"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7=" Aprilie"
          />
        </div>
        <div className="product__row" >
          
          
          <Product
            id="49538094"
            title="Regina"
            price={11.0}
            rating={4}
            image={Regina}
            description1="Ciresul Regina este un soi modern obținut la Hanovra, în anul 1981, a fost introdus în cultura în anul 1990 iar suprafețele cultivate s-au extins rapid în întreaga lume datorită calităților sale superioare. Este un pom de vigoare medie - mare, autosteril. Este un soi rezistent la crăpare în condiții de umiditate excesivă."
            description2="Fructul este foarte mare (11 g. de diametru 28 – 29 mm), sferic și ușor turtit, în formă de inimă, cu epicarpul de culoarea roșu închis, au o transportabilitate bună. Pedunculul este mijlociu. Pulpa este pietroasă, crocantă, suculentă, cu gust dulce echilibrat."
            description3="Iunie - Iulie"
            description4="Kordia, Van, Stella, Summit, Karina."
            description5=" Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7=" Aprilie"
          />
          <Product
            id="49538094"
            title="Stella"
            price={11.0}
            rating={4}
            image={Stella}
            description1="Ciresul Stella este un soi obținut la Stațiunea Summerland, Canada în anul 1956 prin hibridarea soiurilor Lambert și John Innes și autorizat la noi în anul 1979.
            Este primul soi de cireș autofertil și bun polenizator pentru toate celelalte soiuri, foarte rezistent la ger și principalele boli. Înflorirea se produce relativ timpuriu și se suprapune cu aceea a majorității soiurilor, pe care le polenizează.
            "
            description2="Pendunculul este mijlociu, iar sâmburele reprezintă cca.5% din greutatea fructului. Este sensibil la fenomenul de crăpare a fructelor. Fructul este mare de 8-9g, de formă cordiformă, de culoare roșie strălucitoare, cu pulpa de fermitate medie, având gust dulce acidulat."
            description3="15-30 Iunie"
            description4="Autofertil"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7=" Aprilie
            "
          />
          <Product
            id="49538094"
            title="Timpuriu de mai"
            price={11.0}
            rating={4}
            image={Timpuriu_de_mai}
            description1="Ciresul Timpuriu de Mai este un soi de cireș de vigoare mare, care intră timpuriu pe rod si rodește abundent si constant. Origine: încrucișare între soiurile Bigarreau Donissen și Ramon Oliva, efectuată la Stațiunea de Cercetare–Dezvoltare pentru Pomicultura Bistrita, omologat în anul 1978.
            "
            description2="Fructele sunt de dimensiuni mijlocii, 5 grame, de formă ovoidă alungită. Coaja are culoarea roșu închis spre negru la maturitate deplină și este foarte rezistentă la crăpare pe timp ploios. Pulpa este semicrocantă, roșie cu vinișoare sângerii, suculentă, dulce, cu aromă tămâioasa."
            description3="Ultima decadă a lunii Mai"
            description4="Stella, Bigarreau Burlat"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6="3-4m"
            description7="Aprilie"
          />
          <Product
            id="49538094"
            title="Urias de bistrita"
            price={11.0}
            rating={4}
            image={Urias_de_bistrita}
            description1="Pomul Urias de Bistrita este de vigoare mare, creşte înalt, cu trunchi drept, cu coroana piramidală, neregulată; lăstarul de un an este relativ gros, de culoare verdemăsliniu închisă, glabru; florile sunt mari, cu petale mari albe, gofrate cu marginile rotunjite, grupate câte 2-3 în buchete, prezintă rezistenţă bună la Monilia laxa şi la Antracnoză."
            description2="Fructele sunt de mărime mare (8,3 g) au formă sferică, cu o depresiune largă pe partea ventrală, are pulpa crocantă, suculentă, roşu închisă în jurul sâmburelui, dulce, uşor amăruie, armonios acidulată si este neaderenta la sambure."
            description3="Prima decada a lunii Iulie"
            description4="Stella, Hedelfinger, Germersdorf"
            description5=" Februarie-Aprilie, Octombrie-Decembrie"
            description6=" 3-4m"
            description7="Aprilie"
          />
        </div>
        <div className="product__row" >
          
          
          <Product
            id="49538094"
            title="Van"
            price={11.0}
            rating={4}
            image={Van}
            description1="Ciresul Van este un soi obținut la Stațiunea de cercetări Columbia din Summerland, Canada în anul 1936. Pomii altoiți pe mahaleb sunt mai rezistenți la ger si secetă, în schimb sunt foarte sensibili la excesul de umezeala din sol. Puietii de cires sunt uniformi si vigurosi și nu prezintă sensibilitate față de boli si dăunători.
            Pomul este de vigoare medie spre mare, cu coroana larg piramidală, cu cresteri moderate, permeabilă pentru lumină, cu fructificare pe buchete de mai. Este precoce și cunoscut ca cel mai productiv dintre soiurile de cireș. Fructifică pe ramuri de rod scurte. 
            "
            description2="Fructele sunt mari (7-8 g), globuloase, ușor aplatizate, roșie strălucitoare. Pulpa este pietroasă, nu devine moale nici la maturitatea completă, roz-rosiatică, cu sucul slab colorat, gust dulce acidulat. Este sensibil la fenomenul de crăpare a fructelor."
            description3="15 - 30 iunie."
            description4=" Stella, Germersdorf"
            description5="Februarie-Aprilie, Octombrie-Decembrie"
            description6=" 3-4m"
            description7="Aprilie"
          />
         
        </div>
        </div>
        
 </div>

  
    )
  }
  }