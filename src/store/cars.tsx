import { createSlice, configureStore, PayloadAction  } from '@reduxjs/toolkit';
import { getAPI, postAPI } from 'utility/callsAPI';
import { carInfo,defState } from 'utility/Types';


export const initialState: defState = {
  cars: [],
  favorites: [],
  searchString: "",
}

// Slice
const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    carAdded: (state, action) => {
      state.cars = [...state.cars,action.payload];
    },
    getCarList: (state, action) =>  {
      state.cars = action.payload;
    },
    favoriteAdded: (state, action) =>  {
      state.favorites = [...state.favorites,action.payload];
    },
    favoriteRemoved: (state, action) =>  {
      state.favorites = state.favorites.filter((el)=> el != action.payload);
    },
    setFilterProductsString: (state, action) =>  {
      state.searchString = action.payload;
    },
  },
});

export default slice.reducer

// Actions
const { carAdded, getCarList, favoriteAdded, favoriteRemoved, setFilterProductsString } = slice.actions
export const sendCarData = (data:carInfo) => async (dispatch:any) => {
  try {
    const res = await postAPI("carData.json",data);    
    dispatch(carAdded(data));
    alert("Car added successfully.");
    
  } catch (e:any) {
    return console.error(e.message);
  }
}
export const getCarData = () => async (dispatch:any) => {
  try {
    const res = await getAPI("carData.json");
    const list: carInfo[] = [];
    if(res){
      for(let key in res){
        list.push({idprod:key,name:res[key].name,year:res[key].year,fuel:res[key].fuel,price:res[key].price,imgurl:res[key].imgurl});
      }
    }

    dispatch(getCarList(list));
  } catch (e:any) {
    return console.error(e.message);
  }
}
export const addToFavorites = (idCar:any) => async (dispatch:any) => {
  try {
    dispatch(favoriteAdded(idCar));
  } catch (e:any) {
    return console.error(e.message);
  }
}
export const removeFromFavorites = (idCar:any) => async (dispatch:any) => {
  try {
    dispatch(favoriteRemoved(idCar));
  } catch (e:any) {
    return console.error(e.message);
  }
}
export const filterProductsByString = (searchText:string) => async (dispatch:any) => {
  try {
    if(searchText)
      searchText = searchText.toLowerCase();

    dispatch(setFilterProductsString(searchText)); 
  } catch (e:any) {
    return console.error(e.message);
  }
}
  