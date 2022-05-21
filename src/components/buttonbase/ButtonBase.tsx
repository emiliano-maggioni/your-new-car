import React  from 'react'
import classes from "./ButtonBase.module.scss";
import Button from '@mui/material/Button';

const ButtonBase = (props:any) => {
 
  return (
    <Button  className={classes.container} onClick={props.onClick} variant="outlined"> {props.text}</Button>
  );
}

export default ButtonBase;
