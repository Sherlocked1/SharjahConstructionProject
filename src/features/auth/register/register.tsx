import MyDialog from "../../core/custom/dialog"
import ErrorLabel from "../../core/custom/error_label"
import LoadingIndicator from "../../core/custom/loading_indicator"
import MyButton from "../../core/custom/my_button"
import MyTextField from "../../core/custom/my_textfield"
import TextButton from "../../core/custom/text_button"
import useRegisterController from "./controller"

const Register = () => {

    const {
        isLoading,
        isOpen,
        signInClicked,signUpClicked,
        formData,setFormData,
        formErrors
    } = useRegisterController();

    return (
        <div className="m-auto">
            {isLoading && <LoadingIndicator/>}
            {isOpen && <MyDialog/>}
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-2xl font-semibold text-center text-purple-700">
                        تسجيل
                    </h1>
                    <form className="mt-6" onSubmit={signUpClicked}>
                        <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">الاسم</label>
                            <MyTextField
                                placeholder="الاسم"
                                type='text'
                                onchange={(text:string)=>{setFormData({...formData,name:text})}}
                                value={formData?.name}
                            />
                            <ErrorLabel text={formErrors?.name ?? ""}/>
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">البريد الالكتروني</label>
                            <MyTextField
                                placeholder="البريد الالكتروني"
                                type='email'
                                onchange={(text:string)=>{setFormData({...formData,email:text})}}
                                value={formData?.email}
                            />

                            <ErrorLabel text={formErrors?.email ?? ""} />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">كلمة المرور</label>
                            <MyTextField
                                placeholder="كلمة المرور"
                                type='password'
                                onchange={(text:string)=>{setFormData({...formData,password:text})}}
                                value={formData?.password}
                            />
                            <ErrorLabel text={formErrors?.password ?? ""}/>
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">تأكيد كلمة المرور</label>
                            <MyTextField
                                placeholder="تأكيد كلمة المرور"
                                type='password'
                                onchange={(text:string)=>{setFormData({...formData,confirmPassword:text})}}
                                value={formData?.confirmPassword}
                            />
                            <ErrorLabel text={formErrors?.confirmPassword ?? ""}/>
                        </div>
                        <div className="mt-6">
                            <MyButton title="متابعة" type="submit" />
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        <span> لديك حساب بالفعل ؟ </span>
                        <TextButton onClick={signInClicked}>تسجيل الدخول</TextButton>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register