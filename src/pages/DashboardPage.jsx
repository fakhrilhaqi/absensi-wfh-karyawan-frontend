import {Link, useNavigate} from 'react-router-dom';

function DashboardPage() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const role = localStorage.getItem('role');

    return (
        <div>
            <h1>Dashboard Page</h1>
            
            {role === 'ADMIN_HRD' && (
                <><Link to="/employees">Employee</Link><Link to="/attendance-monitoring">Attendance</Link><button onClick={handleLogout}>Logout</button></>
            )}
            {role === 'EMPLOYEE' && (
                <><Link to="/attendance">Attendance</Link><button onClick={handleLogout}>Logout</button></>
            )}
        </div>
    );
}

export default DashboardPage;