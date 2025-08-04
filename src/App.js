
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import the router
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomeComponent from './Components/HomeComponent';
import NotAuthorized from './Components/NotAuthorized';
import Notfound from './Components/Notfound';
import RegisterComponent from './Components/RegisterComponent';
import LoginComponent from './Components/LoginComponent';
import AdminDashboard from './Components/admin/AdminDashboard';
import TeacherDashboard from './Components/teacher/TeacherDashboard';
import ParentDashboard from './Components/parent/ParentDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/notAuthorized" element={<NotAuthorized />} />
        <Route path='/login' element={<LoginComponent/>}/>
        <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
        <Route path='/teacher-dashboard' element={<TeacherDashboard/>}/>
        <Route path='/parent-dashboard' element={<ParentDashboard/>}/>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
