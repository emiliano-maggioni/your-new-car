
export type carInfo = {
  idprod?:any;
  name: string;
  year: string;
  fuel: string;
  price: number;
  imgurl: string;
};

// export type defState = {
//   isAuth: boolean
//   currentUser?: any
//   isLoading: boolean
//   error: any
// } 
export type defState = {
  cars: carInfo[]; 
  favorites: any[];
} 
