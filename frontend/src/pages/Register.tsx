import Logo from "../assets/visualyze-logo.svg?react";

function Register() {
    return (
        <div>
            <div id="login-blank-area"></div>
            <div id="login-form-area">
                <div id="login-header">
                    <Logo />
                    <h1>Visualyze</h1>
                    <h2>Welcome to Visualyze!</h2>
                    <p>Please login to start visualizing your tasks</p>
                </div>
            </div>
            <form>
                <h2>Register</h2>
                <label>
                    <input
                        type="text"
                        id="last-name"
                        className="name"
                        name="last-name"
                    ></input>
                    Last Name
                </label>
                <label>
                    <input
                        type="text"
                        id="first-name"
                        className="name"
                        name="first-name"
                    ></input>
                    First Name
                </label>
                <label>
                    <input
                        type="text"
                        id="username"
                        className="text-input"
                        name="username"
                    ></input>
                    Username
                </label>
                <label>
                    <input
                        type="email"
                        id="email"
                        className="text-input"
                        name="email"
                    ></input>
                    Email
                </label>
                <label>
                    <input
                        type="password"
                        id="password"
                        className="text-input"
                        name="password"
                    ></input>
                    Password
                </label>
                <label>
                    <input
                        type="password"
                        id="confirm-password"
                        className="text-input"
                        name="confirm-password"
                    ></input>
                    Confirm Password
                </label>
                <select name="country-code" id="country-code"></select>
                <label>
                    <input type="text" id="phone-number" className=""></input>
                    Phone Number
                </label>
                <select name="birthdate" id="birthdate"></select>

                <button className="form-button" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
