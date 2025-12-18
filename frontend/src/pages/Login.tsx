import Logo from "../assets/visualyze-logo.svg?react";
import { Link } from "react-router-dom";
import LoginButton from "../components/Button.tsx";

function Login() {
    return (
        <div className="bg-gray-50 min-h-screen py-40">
            <div className=" mx-auto">
                <div className="flex w-8/12 rounded-2xl  mx-auto shadow-lg overflow-hidden">
                    <div className="py-16 px-12 w-1/2 bg-purple-300 "> </div>
                    <div className="py-16 px-12 w-1/2 bg-white">
                        <div id="login-header" className="h-auto">
                            <Logo className="h-auto w-10 mx-auto" />
                            <h1 className="text-4xl text-center font-bold mb-2">
                                Visualyze
                            </h1>
                            <h2 className="text-center">
                                Welcome to Visualyze!
                            </h2>
                            <p className="text-center mb-4">
                                Please login to start visualizing your tasks
                            </p>
                        </div>
                        <div className="space-y-3 ">
                            <form className="space-y-6 flex flex-col">
                                <h2 className="text-3xl font-bold">Login</h2>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="border border-black-400 rounded-md items-center min-h-10"
                                    placeholder="email..."
                                />

                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="border border-black-400 rounded-md items-center min-h-10"
                                    placeholder="password..."
                                />
                                <p>
                                    Don't have an account yet?{" "}
                                    <Link
                                        to="/Register"
                                        className="text-purple-400 hover:text-purple-500"
                                    >
                                        Login
                                    </Link>
                                </p>

                                <LoginButton
                                    handleClick={() => {
                                        console.log("LoginButton Clicked");
                                    }}
                                    text="Login"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
