import axios from "axios";

export const instance = axios.create({
    baseURL: "https://yournextcar-80af1-default-rtdb.europe-west1.firebasedatabase.app/",
});

instance.interceptors.request.use((config) => {
    config.headers!["Content-Type"] = "application/json";
     return config;
});

instance.interceptors.response.use((res: any) => res, (error: any) => error );

 //FUNCTION TO MAKE GET API
 export const getAPI = (path:string) => {

  return instance.get(path).then(async (val)=>{ 
    return val.data; 
  }).catch(  (err)=>{      
      return "ERROR";
  });

}

 //FUNCTION TO MAKE GET API
 export const postAPI = (path:string,payload:any) => {

  return instance.post(path,payload).then(async (val)=>{ 
    return val.data; 
  }).catch(  (err)=>{      
      return "ERROR";
  });

}
