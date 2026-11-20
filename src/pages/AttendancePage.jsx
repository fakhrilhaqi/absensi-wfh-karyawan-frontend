import {useState, useEffect } from 'react';
import { createAttendance, getAttendances } from '../api/attendanceApi';

function AttendancePage() {
    const [employeeId,setEmployeeId] = useState('');
    const [photo,setPhoto] = useState(null); 
    const [attendances,setAttendances] = useState([]);

    const submitAttendance = async (e) => {
    e.preventDefault();

    const formData = new FormData();    

    formData.append('employeeId', employeeId);
    formData.append('photo', photo);

    const result = await createAttendance(formData);

    console.log('Attendance submission result:', result);

    await loadAttendances();

    alert("Attendance submitted");
    };

    useEffect(() => {
        loadAttendances();
    }, []);

    const loadAttendances = async () => {
        const data = await getAttendances();
        setAttendances(data);
    };

    return (
        <div>
            <h1>Attendance Page</h1>

            <form onSubmit={submitAttendance}>

                <input
                    type="text"
                    placeholder="Employee ID"   
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                />
                <button type="submit">Submit Attendance</button>
            </form>

<table>
            <thead>
                <tr>
                    <th>Employee</th>
                    <th>Date</th>
                    <th>Photo</th>
                </tr>
            </thead>
            <tbody>
                {attendances.map((item) => (
                    <tr key={item.id}>
                        <td>{item.employeeId}</td>
                        <td>{new Date(item.attendanceDatetime).toLocaleString()}</td>
                        <td><img src={`http://localhost:3000/uploads/attendance/${item.photo}`} alt="Attendance" width="100"/></td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
        
    );
}

export default AttendancePage;