import React, { useState, useEffect } from 'react';
import Item from 'components/item/Item';
import classes from "./ItemsContainer.module.scss";
import Pagination from '@mui/material/Pagination';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from 'store/cars';
import { carInfo, paginationInfo } from 'utility/Types';


const ItemsContainer = (props: any) => {

  const dispatch = useDispatch();
  const itemsForPage = 8;
  const [pagination, setPagination] = useState<paginationInfo>({page:1,indexStart:0,indexEnd:itemsForPage});
  const [pageCount, setPageCount] = useState<number>(Math.ceil(props.list.length / itemsForPage));
  const [items, setItems] = useState<carInfo[]>(props.list);

  useEffect(()=>{
    if(props.searchString){
      let res = props.list.filter((el:carInfo) => el.name.toLowerCase().includes(props.searchString)); 
      updateItemsList(res);   
      setPageCount(Math.ceil(res.length / itemsForPage));
    }
    else{
      updateItemsList(props.list);   
    } 
},[props.list,props.searchString]);

useEffect(()=>{
     props.passItemsLength(items.length);

},[items]);
  
  const updateItemsList = (itemsElements:carInfo[]) => {
    setItems(itemsElements);
    setPageCount(Math.ceil(itemsElements.length / itemsForPage));
  };

  const handlePagination = (event: any, value: any) => {
    let indexStart = (value-1)*itemsForPage;
    let indexEnd = indexStart+itemsForPage;
    setPagination({page:value,indexStart:indexStart,indexEnd:indexEnd});
  };

  const addToFavs = (idprod: any) => {
    if (props.favorites.includes(idprod))
      dispatch<any>(removeFromFavorites(idprod));
    else
      dispatch<any>(addToFavorites(idprod));
  };
  

  return (
      <>
        <div className={classes.container} >
          {(items?.length) ? items.slice(pagination.indexStart,pagination.indexEnd).map((el: any) => (
            <div 
            key={el.idprod}>
            <Item
              idprod={el.idprod}
              name={el.name}
              year={el.year}
              fuel={el.fuel}
              price={el.price}
              imgurl={el.imgurl}
              favorite={props.favorites.includes(el.idprod) ? true : false}
              onAddFavorites={() => addToFavs(el.idprod)}
            />
            </div>
          ))
            : (<p  className={classes.notfound}>No cars found; click the button on the top of the page to add a car.</p>)}
        </div>
        
        <Pagination className={classes.pagination} count={pageCount} page={pagination.page} onChange={handlePagination} />
      </>
  );
}

export default ItemsContainer;
