import axios from "axios";
import { LoginDTO } from "../../core/models/auth";
import { LoginFormData } from "./model";

const useLoginViewModel = () => {

    const signInWith = async(userData:LoginFormData) : Promise<LoginDTO> => {
        
        const uri = process.env.REACT_APP_SERVER_URL+"/api/users/login"
        const body = {"email":userData.email,"password":userData.password};

        const data = axios.post(uri,body).then((response)=>{
            return response.data as LoginDTO
        }).catch((error:Error)=>{
            return {errorMessage:error.message} as LoginDTO
        })
        
        return data;
    }

    return {signInWith}

}
export default useLoginViewModel;