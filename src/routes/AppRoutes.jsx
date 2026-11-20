import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import EmployeePage from '../pages/EmployeePages';
import AttendancePage from '../pages/AttendancePage';
import DashboardPage from '../pages/DashboardPage';
import AttendanceMonitoringPage from '../pages/AttendanceMonitoringPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/employees" element={<EmployeePage />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/attendance-monitoring" element={<AttendanceMonitoringPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;