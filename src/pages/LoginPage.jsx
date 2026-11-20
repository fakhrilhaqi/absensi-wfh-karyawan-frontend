import {useState} from 'react';
import { login } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const data = await login({ username, password });

        console.log('Login result:', data);

        localStorage.setItem('token', data.access_token);

        navigate('/dashboard');

        alert('Login successful!');

        console.log(localStorage.getItem('token'));
    } catch (error) {
        alert('Login failed: ' + error.response.data.message);
    }  
  };

  return (
    <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;