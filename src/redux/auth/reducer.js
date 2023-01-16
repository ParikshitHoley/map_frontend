import { SIGNUP_ERROR,SIGNUP_SUCCESS,SIGNUP_REQUEST ,LOGIN_REQUEST,LOGIN_ERROR,LOGIN_SUCCESS} from "./action";


const init ={
    signuploading:false,
    signuptoken:"",
    signuperror:false,
    signuperrormessage:"",
    isauth:false,
    loginloading:false,
    logintoken:false,
    loginerror:false
}

export const authreducer=(state=init,action)=>{
    switch(action.type)
    {
        case SIGNUP_REQUEST : return {...state, signuploading:true,
            signuptoken:"",
            signuperror:false,
            signuperrormessage:"",
            isauth:false,
            loginloading:false,
            logintoken:false,
            loginerror:false}
        case SIGNUP_SUCCESS : return {...state, signuploading:false,
            signuptoken:action.payload,
            signuperror:false,
            signuperrormessage:"",
            isauth:false,
            loginloading:false,
            logintoken:false,
            loginerror:false} 
            
            case SIGNUP_ERROR : return {...state,signuploading:false,
                signuptoken:"",
                signuperror:true,
                isauth:false,
                loginloading:false,
                logintoken:false,
                loginerror:false
                
            }
            case LOGIN_ERROR : return {...state,signuploading:false,
                signuperror:false,
                isauth:false,
                loginloading:false,
                logintoken:false,
                loginerror:true
                
            }    
            case LOGIN_SUCCESS : return {...state,signuploading:false,
                signuperror:false,
                isauth:true,
                loginloading:false,
                logintoken:action.payload,
                loginerror:false
                
            } 
            
            case LOGIN_REQUEST : return {...state,signuploading:false,
                signuperror:false,
                isauth:false,
                loginloading:true,
                logintoken:false,
                loginerror:false
                
            }  
            
            default :return state
    }  
    
}