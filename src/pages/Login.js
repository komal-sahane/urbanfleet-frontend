import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login()
{
    const[username, setUsername] = useState("");
    const[ password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) =>
    {
        e.preventDefault();
        if(username === "admin" && password === "admin"){
            navigate("/dashboard");
        }
        else{
            alert("Invalid username or password");
        }
    };

    return(
        <div className="login-container">
            <h2>UrbanFleet Login</h2>
            <form onSubmit={handleLogin}>
                <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e)=> setPassword(e.target.value)}
                required
                />
                <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <button type ="submit">Login</button>
            </form>
        </div>
    );
}
    
    export default Login;