import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { DialogContext } from "../../../contexts/dialog/dialog_context";
import { SocketContext } from "../../../contexts/socket/socket_context";
import { LoginFormData } from "./model";
import useLoginViewModel from "./viewModel";

const useLoginController = () => {

    const { isOpen, openDialog } = useContext(DialogContext);
    const [formData, setFormData] = useState<LoginFormData>({email:"",password:""});
    const [formErrors, setFormErrors] = useState<Partial<LoginFormData>>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const viewModel = useLoginViewModel();

    const navigate = useNavigate();

    const {socket,initializeSocket} = useContext(SocketContext);

    const signInClicked = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const errors = validate();

        if (Object.keys(errors).length !== 0) {
            setFormErrors(errors);
        } else {
            setIsLoading(true)

            const data = await viewModel.signInWith(formData!);

            setIsLoading(false);

            if (data.token) {
                localStorage.setItem('jwt', data.token)
                localStorage.setItem('name',data.user?.name)
                localStorage.setItem('email',data.user?.email)

                if(!socket){
                    initializeSocket();
                }

                navigate('/');
            } else {
                openDialog('خطأ', <p>{data.errorMessage}</p>)
            }
        }
    }


    const validate = (): Partial<LoginFormData> => {

        const validationErrors: Partial<LoginFormData> = {};

        if (!formData?.email) {
            validationErrors.email = "لا يمكن ترك البريد الالكتروني فارغا";
        }
        if (!formData?.password) {
            validationErrors.password = "لا يمكن ترك كلمة المرور فارغة";
        }

        return validationErrors;
    }

    const registerClicked = () => {
        navigate('/register');
    }


    return {
        signInClicked,
        registerClicked,
        isOpen,
        isLoading,
        formData,setFormData,formErrors,

    }


}

export default useLoginController;