import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:5000/api/v1/users/login",
                formData
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            setMessage(response.data.message);

            navigate("/");

        } catch (error) {

            setMessage(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };

    return (

        <div>

            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>

            </form>

            <br />

            <p>{message}</p>

        </div>
    );
}

export default Login;