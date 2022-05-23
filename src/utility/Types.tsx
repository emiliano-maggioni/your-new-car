
export type carInfo = {
  idprod?:any;
  name: string;
  year: string;
  fuel: string;
  price: number;
  imgurl: string;
};

 
export type defState = {
  cars: carInfo[]; 
  favorites: any[];
  searchString:any;
} 

 
export type paginationInfo = {
  page: number;
  indexStart: number;
  indexEnd: number;
} 
