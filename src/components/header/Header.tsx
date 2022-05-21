import React from 'react';
import classes from "./Header.module.scss";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={classes.container} >
        <figure className={classes.imgContainer} onClick={() => navigate("/")}  ><img src="/images/logo.png" /> </figure>
        <span onClick={() => navigate("/")} >Your Next Car</span>
    </header>
  );
}

export default Header;
