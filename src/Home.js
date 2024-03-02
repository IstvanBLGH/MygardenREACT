import React from "react";
import "./Home.css";
import Carousel from './Carousel_2/Carousel.jsx'
import data from './Carousel_2/data'
import background from './Carousel_2/first.jpg'
import fruitTree from './pictures/fruit.png'
import rose from './pictures/rose.png'
import roses from './pictures/roses.png'
import { Link } from "react-router-dom";
import MapContainer from './Map/MapG'
import Footer from './Footer/footer'
function Home() {
  return (
    <div className="home">
        <div className="carousel__container">
          <div className="image__part">
          <img src={background} alt="back" className="first__part"/>
          <img src={background} alt="back"  className="second__part"/>
          </div>
          <Carousel images={data} />
       </div>
         
       <div className="icons__container" >
        <Link to="/ListCard1" style={{ textDecoration: 'none',color:"black",fontWeight:"600" }}>
        <div className="card__first">
              <img src={fruitTree} alt="fruitTree"></img>
             <div className="text__card"><p>Pomi Fructiferi</p></div> 
        </div>
        </Link>
        <Link to="/ListCard2" style={{ textDecoration: 'none',color:"black",fontWeight:"600" }}>
        <div className="card__second">
            <img src={rose} alt="fruitTree"></img>
             <div className="text__card"><p>Butasi trandafiri</p></div> 
        </div>
        </Link>

        <Link to="/ListCard3" style={{ textDecoration: 'none',color:"black",fontWeight:"600" }}>
        <div className="card__last">
          <img src={roses} alt="fruitTree"></img>
          <div className="text__card"><p>Trandafiri</p></div> 
          <div className="text__card_2"><p>tip pomisor</p></div>
        </div>
        </Link>
       </div>
       <div >
          <MapContainer className="map__container"/>
        </div>
        <Footer/>
    </div>
  );
}

export default Home;


{/* */}