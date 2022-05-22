import ItemsContainer from 'components/itemsContainer/ItemsContainer';
import TitleBar from 'components/titleBar/TitleBar';
import React from 'react';
import classes from "./HomeView.module.scss";

const HomeView = () => {

  const list:any = [
    { idprod:1,  name: "Ferrari GTO", year: "1987", fuel: "gasoline",price: 50000, imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Ferrari_288_GTO_%281%29.JPG/1280px-Ferrari_288_GTO_%281%29.JPG"},
    { idprod:2,  name: "Ferrari GTO Yellow", year: "1987", fuel: "diesel",price: 30000, imgurl: "https://media.annunci.quattroruote.it/pictures/5082/93455082/103762641/0.jpg"},
    { idprod:3,  name: "Ferrari GTO", year: "1987", fuel: "gasoline",price: 50000, imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Ferrari_288_GTO_%281%29.JPG/1280px-Ferrari_288_GTO_%281%29.JPG"},
    { idprod:4,  name: "Ferrari GTO Yellow", year: "1987", fuel: "diesel",price: 30000, imgurl: "https://media.annunci.quattroruote.it/pictures/5082/93455082/103762641/0.jpg"},
    { idprod:5,  name: "Ferrari GTO", year: "1987", fuel: "gasoline",price: 50000, imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Ferrari_288_GTO_%281%29.JPG/1280px-Ferrari_288_GTO_%281%29.JPG"},
    { idprod:6,  name: "Ferrari GTO Yellow", year: "1987", fuel: "diesel",price: 30000, imgurl: "https://media.annunci.quattroruote.it/pictures/5082/93455082/103762641/0.jpg"},
    { idprod:7,  name: "Ferrari GTO", year: "1987", fuel: "gasoline",price: 50000, imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Ferrari_288_GTO_%281%29.JPG/1280px-Ferrari_288_GTO_%281%29.JPG"},
    { idprod:8,  name: "Ferrari GTO Yellow", year: "1987", fuel: "diesel",price: 30000, imgurl: "https://media.annunci.quattroruote.it/pictures/5082/93455082/103762641/0.jpg"}

  ];
  const searchString = "";
  return (
    <section className={classes.container}>         
    <TitleBar title="Car Availables"  btText="Back to demo" btPath="/" />
    {/* <SearchBar /> */} 
    <ItemsContainer list={(searchString) ? list.filter((el:any) => (el.brand.toLowerCase() == searchString) ||  (el.model.toLowerCase() == searchString) ) : list } />

    </section>
  );
}

export default HomeView;
