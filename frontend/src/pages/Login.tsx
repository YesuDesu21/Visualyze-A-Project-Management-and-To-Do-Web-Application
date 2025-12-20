import Logo from "../assets/visualyze-logo.svg?react";
import { Link } from "react-router-dom";
import LoginButton from "../components/Button.tsx";
import { handleLogin as HandleLogin } from "../services/authentication/AuthService.tsx";
import { useState } from "react";

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        //so that you can type on first and last name fields
        const stateKey = name;
        setFormData((prev) => ({
            ...prev,
            [stateKey]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await HandleLogin(formData);
        } catch (error) {
            console.log("Login error: ", error);
        }
    };

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
                            <form
                                className="space-y-6 flex flex-col"
                                onSubmit={handleSubmit}
                                method="POST"
                            >
                                <h2 className="text-3xl font-bold">Login</h2>
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="border border-black-400 rounded-md items-center min-h-10"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="username..."
                                />

                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="border border-black-400 rounded-md items-center min-h-10"
                                    value={formData.password}
                                    onChange={handleChange}
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
