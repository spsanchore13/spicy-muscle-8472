import { Get_Data} from "./action";


const initstate = {
   data:"",
   
}


export const reducer = (store= initstate,{type,payload}) => {
    switch(type){
        case Get_Data:
            return({store,data:payload})
           
           default:
               return store   
    }
}