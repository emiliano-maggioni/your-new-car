import ItemsContainer from 'components/itemsContainer/ItemsContainer';
import TitleBar from 'components/titleBar/TitleBar';
import React, { useEffect } from 'react';
import ControlsWrapper from './components/ControlsWrapper/ControlsWrapper';
import classes from "./HomeView.module.scss";
import {useDispatch, useSelector} from 'react-redux';
import { getCarData } from "store/cars"; 

const HomeView = () => {

  const dispatch = useDispatch();
  const { cars } = useSelector((state:any) => state.cars);
  const { favorites } = useSelector((state:any) => state.cars);

  useEffect(()=>{
    dispatch<any>(getCarData());
  },[]);

  // const list:any = [
  //   { idprod:1,  name: "Ferrari GTO", year: "1987", fuel: "gasoline",price: 50000, imgurl: "https://i.ibb.co/267DQ80/147.jpg"},
  // ];
  /* IMMAGINI DISPONIBILI:
    https://i.ibb.co/267DQ80/147.jpg
    https://i.ibb.co/D1258FS/500.jpg
    https://i.ibb.co/nz73MqV/ducato.jpg
    https://i.ibb.co/Y09hcrn/giulietta.jpg
    https://i.ibb.co/zZhwn0Q/gto.jpg
    https://i.ibb.co/vvSnpYj/gto-yellow.jpg
    https://i.ibb.co/tsF5b5J/maserati.jpg
    https://i.ibb.co/mXScvDn/porsche.jpg
    https://i.ibb.co/yRkBMYy/volkswagen.jpg
 */

  const searchString = "";

  return (
    <section className={classes.container}>         
        <TitleBar title="Car Availables"  btText="Back" btPath="/addproduct" />
        <ControlsWrapper /> 
        <ItemsContainer list={cars}  favorites={favorites}  />
    </section>
  );
}

export default HomeView;
