import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { DialogContext } from "../../../contexts/dialog/dialog_context";
import { RegisterFormData } from "./model";
import useRegisterViewModel from "./viewModel";

const useRegisterController = () => {
    const [formData,setFormData] = useState<RegisterFormData>({name:"",email:"",password:"",confirmPassword:""});
    const [formErrors,setFormErrors] = useState<RegisterFormData>();

    const viewModel = useRegisterViewModel();
    const [isLoading,setIsLoading] = useState<boolean>(false);

    const {isOpen,openDialog} = useContext(DialogContext);
    const navigate = useNavigate();

    const signUpClicked = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errors = validate();

        if(Object.keys(errors).length !== 0){
            setFormErrors(errors);
        }else{
            setIsLoading(true)
            const data = await viewModel.registerWith(formData?.name!, formData?.email!, formData?.password!)
            setIsLoading(false);
            if (data.user) {
                navigate('/login');
            } else {
                openDialog("خطأ", <p>{data.message}</p>)
            }
        }

    }

    const validate = ():Partial<RegisterFormData>  => {
        const validationErrors: Partial<RegisterFormData> = {};

        if (!formData.name){
            validationErrors.name = "لا يمكن ترك الاسم فارغا"
        }
        if (!formData.email){
            validationErrors.email = "لا يمكن ترك البريد الالكتروني فارغا"
        }
        if (!formData.password){
           validationErrors.password = "لا يمكن ترك كلمة المرور فارغة"
        }
        if (formData.confirmPassword !== formData?.password){
            validationErrors.confirmPassword = "كلمة المرور وتأكيد كلمة المرور لا تتطابقان"
        }

        return validationErrors
    }

    const signInClicked = () => {
        navigate("/login")
    }

    return{
        signUpClicked,
        signInClicked,
        isLoading,setIsLoading,
        isOpen,openDialog,
        formData,setFormData,
        formErrors
    }
}

export default useRegisterController;