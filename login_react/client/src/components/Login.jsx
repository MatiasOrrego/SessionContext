import React, {useState} from "react";
import { useSession } from "../hooks/useSession";

const Login = () => {
    const { login } = useSession();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {

        const response = await login(username, password);

        if(response.ok){
            setError("");
    } else {
        setError(response.error);
    }
}
return (
    <div>
        <h2>Login</h2>
        <input 
            type="text" 
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
    </div>
    )
};

export default Login;