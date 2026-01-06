import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Dashboard from './Dashboard';
import Pdfs from './Pdfs';
import PdfViewer from './PdfViewer';
import Students from './Students';
import Teachers from './Teachers';
import Assignments from './Assignments';
import Attendance from './Attendance';
import Grades from './Grades';
import Analytics from './Analytics';
import Reports from './Reports';
import Calendar from './Calendar';
import Resources from './Resources';
import Notifications from './Notifications';
import Settings from './Settings';
// ...existing code...

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/pdfs" element={<Pdfs />} />
        <Route path="/pdfs/:id" element={<PdfViewer />} />

        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;