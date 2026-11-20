import { useEffect, useState } from 'react';
import { getEmployees } from '../api/employeeApi';

function EmployeePage() {
    const [employees, setEmployees] = useState([]);
    
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const data = await getEmployees();
        console.log('Employee data:', data);
        setEmployees(data);
    };

    
    
    return (
        <div>
            <h1>Employee Page</h1>
            <table>
            <thead>
                <tr>
                    <th>NIP</th>
                    <th>Nama</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.nip}>
                        <td>{employee.nip}</td>
                        <td>{employee.fullName}</td>
                        <td>{employee.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        
    );
}

export default EmployeePage;