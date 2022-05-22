import { createSlice, configureStore, PayloadAction  } from '@reduxjs/toolkit';
import { getAPI, postAPI } from 'utility/callsAPI';
import { carInfo,defState } from 'utility/Types';


export const initialState: defState = {
  cars: [],
  favorites: [],
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
  },
});

export default slice.reducer

// Actions
const { carAdded, getCarList, favoriteAdded, favoriteRemoved } = slice.actions
export const sendCarData = (data:carInfo) => async (dispatch:any) => {
  try {

    const res = await postAPI("saveCar.json",data);
    console.log("@sendCarData:",data);    
    dispatch(carAdded(data));
    
  } catch (e:any) {
    return console.error(e.message);
  }
}
export const getCarData = () => async (dispatch:any) => {
  try {
    const res = await getAPI("saveCar.json");
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
  