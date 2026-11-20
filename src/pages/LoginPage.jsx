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
        const payload = JSON.parse(atob(data.access_token.split('.')[1]));

        console.log('Login result:', data);

        localStorage.setItem('token', data.access_token);   
        localStorage.setItem('role', payload.role);


        navigate('/dashboard');

        alert('Login successful!');

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