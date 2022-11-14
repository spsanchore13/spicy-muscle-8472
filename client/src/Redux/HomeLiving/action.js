
import * as types from "./actionType" 
import axios from "axios"

export const getData  = (payload)=>(dispatch)=>{

    // console.log(payload)
    dispatch({type:types.DATA_REQUEST,payload:payload})

   return axios.get("https://project-j62u.onrender.com/product").then((res)=>{
    //    console.log(res.data.msg)
        dispatch({type:types.DATA_SUCESS,payload:res.data.msg})
    }).catch((e)=>{
        dispatch({type:types.DATA_FAILURE})
    })

}

export const postData = (payload)=>(dispatch)=>{

dispatch({type:types.POST_REQUEST})

return axios.post("https://project-j62u.onrender.com/product/add",payload).then((res)=>{

return dispatch({type:types.POST_SUCESS,payload:res.data})

}).catch((res)=>{

    dispatch({type:types.POST_FAILURE})
})

}
