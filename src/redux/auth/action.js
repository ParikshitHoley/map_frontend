import axios from "axios";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const CITY = "CITY";

export const LOGOUT = "LOGOUT";

export const Signupactioncreator=(type,payload)=>{
    return {
        type,payload
    }
}

export const Usersignup=(data)=>async(dispatch)=>{
    dispatch(Signupactioncreator(SIGNUP_REQUEST,true))
    axios.post("http://localhost:8080/signup",data).then(({data})=>dispatch(Signupactioncreator(SIGNUP_SUCCESS,data.token))).catch((err)=>dispatch(Signupactioncreator(SIGNUP_ERROR,err.message)))
}

export const Userlogin=(data)=>async(dispatch)=>{
    dispatch(Signupactioncreator(LOGIN_REQUEST,true))
    axios.post("http://localhost:8080/login",data).then(({data})=>dispatch(Signupactioncreator(LOGIN_SUCCESS,data.token))).catch((err)=>dispatch(Signupactioncreator(LOGIN_ERROR,err.message)))
}