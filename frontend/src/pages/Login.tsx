import Logo from "../assets/visualyze-logo.svg?react";
import tailwindcss from "@tailwindcss/vite";
//className="min-h-screen flex items-center justify-center bg-gray-100"
function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-red-500 p-8">
            <div id="login-blank-area"></div>
            <div id="login-form-area">
                <div id="login-header">
                    <Logo />
                    <h1>Visualyze</h1>
                    <h2>Welcome to Visualyze!</h2>
                    <p>Please login to start visualizing your tasks</p>
                </div>

                <form>
                    <h2>Login</h2>
                    <label>
                        <input type="email" id="email" name="email"></input>
                        Email
                    </label>
                    <label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                        ></input>
                        Password
                    </label>
                    <button className="form-button" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
