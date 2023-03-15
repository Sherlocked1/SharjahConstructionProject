import { FormEventHandler, useRef } from "react";
import { auth } from "../../../firebase";

const Login = () => {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const signInClicked = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('signing in')

        try {
            await auth.signInWithEmailAndPassword(
                emailRef.current!.value,
                passwordRef.current!.value
            );
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="m-auto">
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
                            <input
                                title="Email"
                                placeholder="البريد الالكتروني"
                                type="email"
                                ref={emailRef}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                كلمة المرور
                            </label>
                            <input
                                title="Password"
                                placeholder="كلمة المرور"
                                ref={passwordRef}
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <a
                            href="#"
                            className="text-xs text-purple-600 hover:underline"
                        >
                            هل نسيت كلمة المرور ؟
                        </a>
                        <div className="mt-6">
                            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                تسجيل الدخول
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        ليس لديك حساب ؟{" "}
                        <a
                            href="#"
                            className="font-medium text-purple-600 hover:underline"
                        >
                            تسجيل
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login