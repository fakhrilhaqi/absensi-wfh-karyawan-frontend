import {Link, useNavigate} from 'react-router-dom';

function DashboardPage() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div>
            <h1>Dashboard Page</h1>
            <Link to="/employees">Employee</Link>
            <Link to="/attendance">Attendance</Link>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default DashboardPage;