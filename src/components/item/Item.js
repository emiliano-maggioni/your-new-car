import React  from 'react'
import classes from "./Item.module.scss";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Item = (props) => {
  return (
      <figure className={classes.container} onClick={props.onClick} >
        <img src={props.imgurl} />
        <figcaption><strong>{props.name}</strong>  <span>{props.price}€</span></figcaption> 
        <div className={classes.favourites}  > <FavoriteIcon /></div>
      </figure>
  );
}

export default Item;
