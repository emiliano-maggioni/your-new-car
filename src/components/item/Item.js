import classes from "./Item.module.scss";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Item = (props) => {

  return (
      <div className={classes.container} key={props.idprod} >
        <figure>
          <img src={props.imgurl} />
          <figcaption><strong>{props.name}</strong>  <span>{props.price}€</span></figcaption> 
          <div className={classes.favourites} onClick={props.onAddFavorites} > {props.favorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}</div>
        </figure>
      </div>
  );
}

export default Item;
