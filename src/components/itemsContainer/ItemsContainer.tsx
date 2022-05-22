import React, { useState, useEffect } from 'react'
import Item from 'components/item/Item';
import classes from "./ItemsContainer.module.scss";
import Pagination from '@mui/material/Pagination';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from 'store/cars';
import { carInfo } from 'utility/Types';

const ItemsContainer = (props: any) => {

  const dispatch = useDispatch();
  const itemsForPage = 2;
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(Math.ceil(props.list.length / itemsForPage));
  const [items, setItems] = useState(props.list);

  useEffect(()=>{
      updateItemsList(props.list);    
  },[props.list]);
  
  const updateItemsList = (itemsElements:carInfo[]) => {
    setItems(itemsElements);
    setPageCount(Math.ceil(itemsElements.length / itemsForPage));
  };

  const handleChange = (event: any, value: any) => {
    let indexStart = value-1;
    let indexEnd = indexStart+itemsForPage;
    let elem = props.list;      
  console.log("--->  elem:",elem);
    console.log("indexStart:"+indexStart+" - indexEnd:"+indexEnd);
    updateItemsList(elem.slice(indexStart,indexEnd));
    setPage(value);
  };

  const addToFavs = (idprod: any) => {
    if (props.favorites.includes(idprod))
      dispatch<any>(removeFromFavorites(idprod));
    else
      dispatch<any>(addToFavorites(idprod));
  };
  console.log("items:",items);

  return (
      <>
        <div className={classes.container} >
          {(items?.length) ? items.map((el: any) => (
            <Item
              key={el.idprod}
              name={el.name}
              year={el.year}
              fuel={el.fuel}
              price={el.price}
              imgurl={el.imgurl}
              favorite={props.favorites.includes(el.idprod) ? true : false}
              onAddFavorites={() => addToFavs(el.idprod)}
            />
          ))
            : (<p>No products found</p>)}
        </div>
        Page: {page}
        <Pagination className={classes.pagination} count={pageCount} page={page} onChange={handleChange} />
      </>
  );
}

export default ItemsContainer;
