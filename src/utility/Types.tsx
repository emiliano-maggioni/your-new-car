export type todosResponse = {
  userId: number;
  id: any;
  title: number;
  completed: boolean;
};

export type productInfo = {
  idprod:any;
  name: string;
  year: string;
  fuel: string;
  price: number;
  imgurl: string;
};

export type defState = {
  isAuth: boolean
  currentUser?: any
  isLoading: boolean
  error: any
} 
