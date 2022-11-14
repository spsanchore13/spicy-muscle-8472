
import * as types from "./actionType"

const init = {
    data:[],
    isError:false,
    isLoading:false,
}
const reducer = (state=init,action)=>{
const {type,payload}  =  action;

switch(type){
case types.DATA_REQUEST  : {return {...state,isError:false,isLoading:false,data:[]}}
case types.DATA_SUCESS  : {return {...state,isError:false,isLoading:false,data:payload}}
case types.DATA_FAILURE  : {return {...state,isError:true,data:[],isLoading:false}}

case types.POST_REQUEST  : {return {...state,isError:false,isLoading:false,data:[]}}
case types.POST_SUCESS  : {return {...state,isError:false,isLoading:false,data:payload}}
case types.POST_FAILURE  : {return {...state,isError:true,data:[],isLoading:false}}

    default :return state
}


}

export  {reducer};