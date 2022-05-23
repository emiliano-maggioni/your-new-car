import ItemsContainer from 'components/itemsContainer/ItemsContainer';
import TitleBar from 'components/titleBar/TitleBar';
import React, { useEffect, useState } from 'react';
import ControlsWrapper from './components/ControlsWrapper/ControlsWrapper';
import classes from "./HomeView.module.scss";
import {useDispatch, useSelector} from 'react-redux';
import { getCarData } from "store/cars"; 

const HomeView = () => {

  const dispatch = useDispatch();
  const cars = useSelector((state:any) => state.mainReducer.cars);
  const favorites = useSelector((state:any) => state.mainReducer.favorites);
  const searchString  = useSelector((state:any) => state.mainReducer.searchString); 
  
  const [itemsTot, setItemsTot] = useState(cars?.length ?? 0);

  useEffect(()=>{
    dispatch<any>(getCarData());
  },[]);
  
  useEffect(()=>{
   if(cars.length)
      setItemsTot(cars.length);
  },[cars]);


  return (
    <section className={classes.container}>         
        <TitleBar title="Car Availables"  btText="Add New Car" btPath="/addproduct" />
        <ControlsWrapper itemsTot={itemsTot} /> 
        <ItemsContainer list={cars}  favorites={favorites} searchString={searchString} passItemsLength={(val:number)=> setItemsTot(val)}  />
    </section>
  );
}

export default HomeView;
