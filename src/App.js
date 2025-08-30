import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css"
// import the router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import NotAuthorized from "./Components/NotAuthorized";
import Notfound from "./Components/Notfound";
import RegisterComponent from "./Components/RegisterComponent";
import LoginComponent from "./Components/LoginComponent";
import AdminDashboard from "./Components/admin/AdminDashboard";
import TeacherDashboard from "./Components/teacher/TeacherDashboard";
import ParentDashboard from "./Components/parent/ParentDashboard";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./context/ProtectedRoute";
import AdminLayout from "./Components/admin/AdminLayout";
import Student from "./Components/admin/Student";
import Parent from "./Components/admin/Parent";
import Teacher from "./Components/admin/Teacher";
import Classes from "./Components/admin/Classes";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomeComponent />} />

          {/* Below are admin protected routes  */}
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<AdminDashboard />} />
            <Route path="Students" element={<Student/>}/>   
            <Route path="Parents" element={<Parent/>}/> 
            <Route path="Teachers" element={<Teacher/>}/> 
            <Route path="Classes" element={<Classes/>}/>

            </Route>
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/notAuthorized" element={<NotAuthorized />} />
          <Route path="/login" element={<LoginComponent />} />
          

          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/parent-dashboard" element={<ParentDashboard />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
