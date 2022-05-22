import React from 'react';
import classes from "./Header.module.scss";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={classes.container} >
        <figure className={classes.imgContainer} onClick={() => navigate("/")}  ><img src="/images/logo.png" alt="your next car logo" height={50} /> </figure>
        <span onClick={() => navigate("/")} >Your New Car</span>
    </header>
  );
}

export default Header;
