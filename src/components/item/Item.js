import React  from 'react'
import classes from "./Item.module.scss";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Item = (props) => {
  return (
      <div className={classes.container} >
        <figure  >
          <img src={`/images/cars/${props.imgurl}`} />
          <figcaption><strong>{props.name}</strong>  <span>{props.price}€</span></figcaption> 
          <div className={classes.favourites} > <FavoriteBorderOutlinedIcon /></div>
        </figure>
      </div>
  );
}

export default Item;
