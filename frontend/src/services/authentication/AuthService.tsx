interface UserRegistrationData {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    country_code: string;
    phone_number: string;
    birth_date: string;
    accept_term: boolean;
}

interface UserLoginData {
    username: string;
    password: string;
}

const BASE_URL = "http://127.0.0.1:8000";

export const handleRegister = async (formData: UserLoginData) => {
    const response = await fetch(`${BASE_URL}/VisualyzeBackend/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });
    console.log(response.json);
    return await response.json();
};

export const getCountryCodes = async () => {
    const response = await fetch(
        `${BASE_URL}/VisualyzeBackend/api/countries/`,
        {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }
    );

    return await response.json();
};

// Exported separately so Login.tsx can use it
export const handleLogin = async (formData: UserLoginData) => {
    const response = await fetch(`${BASE_URL}/VisualyzeBackend/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });
    console.log("Login form Sent to the backend: ", response.json());
    return response.json();
};
