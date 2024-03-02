
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import {BsFillBasket3Fill} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import img1 from './pictures/logo.jpg'
import { AiFillHome } from "react-icons/ai";
import {IoLogInSharp} from "react-icons/io5"
import {GiShoppingBag} from "react-icons/gi"

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (

    
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img src={img1} alt="Logo" className="header__logo" />
        <div className="text__logo"><AiFillHome></AiFillHome></div>
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
          <div onClick={handleAuthenticaton} className="header__option">
            <IoLogInSharp className="Login_icon"/>
            <span className="header__optionLineOne">Salut! {!user ? 'Utilizator' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Delogare' : 'Intra in cont'}</span>
          </div>
        </Link>

        <Link to='/orders' style={{ textDecoration: 'none' }}>
          <div className="header__option">
            <GiShoppingBag className="Shopping__bag"/>
            <span className="header__optionLineOne">Returnari si</span>
            <span className="header__optionLineTwo">Produse</span>
          </div>
        </Link>
        

        <div className="header__option">
          <span className="header__optionLineOne">Informatii</span>
          <span className="header__optionLineTwo">Despre Noi</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <div className="header__optionBasket">
            <BsFillBasket3Fill className="shopping__icon"/>
            <span className="header__optionLineThree header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Header;