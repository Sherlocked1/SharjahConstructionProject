import { useState } from "react"
import { useNavigate } from "react-router"
import MyButton from "../../core/custom/my_button"
import MyTextField from "../../core/custom/my_textfield"
import TextButton from "../../core/custom/text_button"

const Register = () => {

  const [name,setName] = useState<string>();
  const [password,setPassword] = useState<string>();
  const [email,setEmail] = useState<string>();
  const [confirmPassword,setConfirmPassword] = useState<string>();

  const navigate = useNavigate();

  const signUpClicked = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const signInClicked = () => {
    navigate("/login")
  }
  
  return (
    <div className="m-auto">
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
                                onchange={setName}
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">البريد الالكتروني</label>
                            <MyTextField
                                placeholder="البريد الالكتروني"
                                type='email'
                                onchange={setEmail}
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">كلمة المرور</label>
                            <MyTextField
                                placeholder="كلمة المرور"
                                type='password'
                                onchange={setPassword}
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">تأكيد كلمة المرور</label>
                            <MyTextField
                                placeholder="تأكيد كلمة المرور"
                                type='password'
                                onchange={setConfirmPassword}
                            />
                        </div>
                        <div className="mt-6">
                            <MyButton title="تسجيل الدخول" type="submit"/>
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