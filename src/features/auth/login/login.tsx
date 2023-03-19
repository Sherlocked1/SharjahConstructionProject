import MyDialog from "../../core/custom/dialog";
import ErrorLabel from "../../core/custom/error_label";
import LoadingIndicator from "../../core/custom/loading_indicator";
import MyButton from "../../core/custom/my_button";
import MyTextField from "../../core/custom/my_textfield";
import TextButton from "../../core/custom/text_button";
import useLoginController from "./controller";


// I've implemented the authentication using firebase and then removed it due to time limitation
// But the use should be able to sign in or sign up and then we can use their id from firebase or any other source
// to sort their requests and emit events from the backend to them only using their ids

const Login = () => {

    const {formData,setFormData,formErrors,signInClicked,registerClicked,isOpen,isLoading} = useLoginController();

    return (
        <div className="m-auto">
            {isLoading && <LoadingIndicator/>}
            {isOpen && <MyDialog />}
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
                                value={formData?.email}
                                onchange={(text)=>{setFormData({...formData,email:text})}}
                            />
                            <ErrorLabel text={formErrors.email ?? ""}/>
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
                                value={formData?.password}
                                onchange={(text)=>{setFormData({...formData,password:text})}}
                            />
                            <ErrorLabel text={formErrors.password ?? ""}/>
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