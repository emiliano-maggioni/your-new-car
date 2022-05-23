import React  from 'react'
import classes from "./ButtonBase.module.scss";

const ButtonBase = (props:any) => {
 
  return (
    <button  className={classes.container} onClick={props.onClick} {...props} > {props.text}</button>
  );
}

export default ButtonBase;
