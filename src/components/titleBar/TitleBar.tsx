import React  from 'react'
import ButtonBase from 'components/buttonbase/ButtonBase';
import classes from "./TitleBar.module.scss";
import { useNavigate } from "react-router-dom";


const TitleBar = (props:any) => {
  let navigate = useNavigate();
  return (
      <div className={classes.container} >
        <h2>{props.title}</h2>
        {(props.btText && props.btPath) &&  <ButtonBase  text={props.btText} onClick={()=> navigate(props.btPath)} />   }
      </div>
  );
}

export default TitleBar;
