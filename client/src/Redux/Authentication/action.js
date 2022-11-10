import axios from "axios";
import { setToast } from "../../utils/Other";
import * as data from "./actionType"

const signUp = (payload, toast) => (dispatch) => {
    dispatch({ type: data.SIGNUP_FAILURE });
    return axios
        .post("http://localhost:8000/auth/signup", payload)
        .then((r) => {
            console.log(r);
            setToast(toast, "Signup Successful", "success");
            dispatch({ type: data.SIGNUP_SUCCESS, payload: r.data });
        })
        .catch((e) => {
            setToast(toast, e.response.data.message, "error");
            dispatch({ type: data.SIGNUP_FAILURE, payload: e });
        });
};

const Login = (payload, toast) => (dispatch) => {
    dispatch({ type: data.LOGIN_REQUEST })
    return axios.post("http://localhost:8000/auth/signup", payload).then((r) => {
        console.log(r)
        setToast(toast, "Login Successfully", "success");
        dispatch({ type: data.LOGIN_SUCCESS, payload: r.data })
    }).catch((e) => {
        setToast(toast, e.response.data.message, "error");
        dispatch({ type: data.LOGIN_FAILURE, payload: e });
    })
}
export { signUp, Login }
