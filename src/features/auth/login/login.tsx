import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { DialogContext } from "../../../contexts/dialog_context";
import { auth } from "../../../firebase";
import MyDialog from "../../core/custom/dialog";
import LoadingIndicator from "../../core/custom/loading_indicator";
import MyButton from "../../core/custom/my_button";
import MyTextField from "../../core/custom/my_textfield";
import TextButton from "../../core/custom/text_button";

const Login = () => {

    const { isOpen, openDialog, closeDialog } = useContext(DialogContext);

    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");

    const [isLoading,setIsLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const signInClicked = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        try {
            let isLoggedIn = await auth.signInWithEmailAndPassword(
                email,
                password
            );

            if (isLoggedIn.user) {
                navigate('/');
            }
        } catch (error:any) {
            setIsLoading(false)
            openDialog("خطأ",<h1>{error}</h1>)
            // console.error(error);
        }
    }

    const registerClicked = () => {
        navigate('/register');
    }

    const openDialogClicked = () => {
        openDialog("title",<h1>hi</h1>);
    }

    return (
        <div className="m-auto">

            {
                isLoading &&
                <LoadingIndicator/>
            }

            {
                isOpen &&
                <MyDialog title={"مرحبا"} isOpen={isOpen} onClose={closeDialog} onClick={closeDialog} children={<h1>خطأ</h1>}/>
            }
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-2xl font-semibold text-center text-purple-700">
                        تسجيل الدخول
                    </h1>
                    <form className="mt-6" onSubmit={signInClicked}>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                البريد الالكتروني
                            </label>
                            <MyTextField
                                placeholder="البريد الالكتروني"
                                type='email'
                                onchange={setEmail}
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                كلمة المرور
                            </label>
                            <MyTextField
                                placeholder="كلمة المرور"
                                type='password'
                                onchange={setPassword}
                            />
                        </div>
                        <TextButton className="text-sm"> هل نسيت كلمة المرور ؟ </TextButton>
                        <div className="mt-6">
                            <MyButton title="تسجيل الدخول" type="submit"/>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        <span> ليس لديك حساب ؟ </span>
                        <TextButton onClick={registerClicked}>تسجيل</TextButton>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login