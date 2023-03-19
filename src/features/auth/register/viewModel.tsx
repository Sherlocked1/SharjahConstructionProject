import axios from "axios";
import {RegisterDTO} from './model'

const useRegisterViewModel = () => {
    const registerWith = async (name:string,email:string,password:string):Promise<RegisterDTO> => {
        const uri = process.env.REACT_APP_SERVER_URL+"/api/users/register"
        const body = {"email":email,name:name,"password":password};

        const data = axios.post(uri,body).then((response)=>{
            return response.data as RegisterDTO
        }).catch((error:Error)=>{
            return {message:error.message} as RegisterDTO
        })
        
        return data;
    }

    return{
        registerWith
    }
}

export default useRegisterViewModel;