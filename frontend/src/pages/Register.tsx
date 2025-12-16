import Logo from "../assets/visualyze-logo.svg?react";
import RegisterButton from "../components/Button.tsx";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div
            id="register-page"
            className="flex flex-col items-center justify-center bg-gray-50"
        >
            <div className="bg-white max-w-lg shadow-2xl">
                <div
                    id="register-header"
                    className="p-10 items-center justify-center"
                >
                    <Logo className="w-10 h-auto  m-auto" />
                    <h1 className="text-4xl text-center font-bold mb-4">
                        Visualyze
                    </h1>
                    <h2 className="text-justify items-center">
                        Welcome to Visualyze!
                    </h2>
                </div>

                <div
                    id="register-form"
                    className="flex-1 flex-col items-center p-10"
                >
                    <form className="flex flex-col mt-2">
                        <h2 className="text-2xl font-bold mb-0.5">Register</h2>
                        <div className="grid grid-cols-2 gap 5 mb-2">
                            <div className="flex flex-col">
                                <label htmlFor="last-name">Last Name</label>
                                <input
                                    type="text"
                                    id="last-name"
                                    className="border border-black-400 rounded-md items-center min-h-10 mr-2"
                                    name="last-name"
                                    placeholder="last name..."
                                ></input>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="first-name">First Name</label>
                                <input
                                    type="text"
                                    id="first-name"
                                    className="border border-black-400 rounded-md items-center min-h-10 ml-2"
                                    name="first-name"
                                    placeholder="first name..."
                                ></input>
                            </div>
                        </div>

                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="border border-black-400 rounded-md items-center min-h-10 mb-2"
                            name="username"
                            placeholder="username..."
                        ></input>

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="border border-black-400 rounded-md items-center min-h-10 mb-2 "
                            name="email"
                            placeholder="email..."
                        ></input>

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="border border-black-400 rounded-md items-center min-h-10 mb-2"
                            name="password"
                            placeholder="password..."
                        ></input>

                        <label htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="border border-black-400 rounded-md items-center min-h-10 mb-2"
                            name="confirm-password"
                            placeholder="confirm password..."
                        ></input>

                        <select name="country-code" id="country-code"></select>

                        <label htmlFor="phone-number">Phone Number</label>
                        <input
                            type="text"
                            id="phone-number"
                            className="border border-black-400 rounded-md items-center min-h-10 mb-2"
                            placeholder="phone number..."
                        ></input>

                        <select name="birthdate" id="birthdate"></select>

                        <div className="text-justify">
                            <p>
                                Already have an account?{" "}
                                <Link
                                    to="/Login"
                                    className="text-purple-400 hover:text-purple-500"
                                >
                                    Login
                                </Link>
                            </p>
                            <p>
                                By signing up, you are agreeing with our{" "}
                                <Link
                                    to=""
                                    className="text-purple-400 hover:text-purple-500"
                                >
                                    Terms and Condition
                                </Link>{" "}
                                and confirm that you have read our{" "}
                                <Link
                                    to=""
                                    className="text-purple-400 hover:text-purple-500"
                                >
                                    Privacy Policy.
                                </Link>
                            </p>
                        </div>

                        <RegisterButton
                            handleClick={() => {
                                console.log("LoginButton Clicked");
                            }}
                            text="Register"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
