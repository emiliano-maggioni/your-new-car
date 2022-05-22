import React  from 'react'
import Item from 'components/item/Item';
import classes from "./ItemsContainer.module.scss";
import { useNavigate } from 'react-router-dom';

const ItemsContainer = (props:any) => {
  const navigate = useNavigate();
  
  return (
    <div className={classes.container} >
      { (props.list?.length) ? props.list.map((el:any)=> <Item key={el.idprod} name={el.name} year={el.year} fuel={el.fuel} price={el.price} imgurl={el.imgurl}  onClick={ ()=>  navigate(`/details/${el.id}`)}   />) 
       : (<p>No products found</p>)     }
     </div>
  );
}

export default ItemsContainer;
