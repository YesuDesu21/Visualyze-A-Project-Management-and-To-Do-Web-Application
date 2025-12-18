import Logo from "../assets/visualyze-logo.svg?react";
import RegisterButton from "../components/Button.tsx";
import { handleRegister as HandleRegister } from "../services/authentication/AuthService.tsx";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        country_code: "",
        phone_number: "",
        birth_date: "",
        accept_term: false,
    });

    //updates form values
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirm_password) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const result = await HandleRegister(formData);

            console.log("Registration successful!");
            alert(`User created with ID: ${result.user_id}`);
        } catch (error) {
            console.log("There was a problem during the registration: ", error);
        }
    };

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
                        Welcome to Visualyze! Please register to use Visualyze.
                    </h2>
                </div>

                <div
                    id="register-form"
                    className="flex-1 flex-col items-center p-10"
                >
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-bold mb-4">Register</h2>
                        <div className="grid grid-cols-2 gap 5 mb-2">
                            <div className="flex flex-col">
                                <label htmlFor="last-name">Last Name</label>
                                <input
                                    type="text"
                                    id="last-name"
                                    className="border border-black-400 rounded-md items-center min-h-10 mr-2"
                                    name="last-name"
                                    value={formData.last_name}
                                    onChange={handleChange}
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
                                    value={formData.first_name}
                                    onChange={handleChange}
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
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="username..."
                        ></input>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="border border-black-400 rounded-md items-center min-h-10 mb-2 "
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email..."
                        ></input>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="border border-black-400 rounded-md items-center min-h-10 mb-2"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
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
                            value={formData.confirm_password}
                            placeholder="confirm password..."
                        ></input>
                        <label htmlFor="country-code">Country Code</label>
                        <select
                            name="country-code"
                            id="country-code"
                            className="border border-black-400 rounded-md  mb-2"
                            value={formData.country_code}
                            // onChange={handleChange}
                        ></select>
                        <label htmlFor="phone-number">Phone Number</label>
                        <input
                            type="text"
                            id="phone-number"
                            className="border border-black-400 rounded-md items-center min-h-10 mb-2"
                            value={formData.phone_number}
                            onChange={handleChange}
                            placeholder="phone number..."
                        ></input>
                        <label htmlFor="country-code">Birth Date</label>
                        <select
                            name="birthdate"
                            id="birthdate"
                            className="border border-black-400 rounded-md  mb-2 "
                            value={formData.birth_date}
                            //onChange={handleChange}
                        ></select>
                        <div className="text-center mb-0.5">
                            <p className="mb-10">
                                Already have an account?{" "}
                                <Link
                                    to="/Login"
                                    className="text-purple-400 hover:text-purple-500"
                                >
                                    Login
                                </Link>
                            </p>
                            <p className="text-center">
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
                        <RegisterButton type="submit" text="Register" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
