import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const location = useLocation()
    function handleSubmit(event) {
        event.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(event) {
        const { name, value } = event.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            {location.state?.message && 
            <h3 className="login-error">{location.state.message}</h3>}
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    )

}