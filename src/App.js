
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import the router
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomeComponent from './Components/HomeComponent';
import NotAuthorized from './Components/NotAuthorized';
import Notfound from './Components/Notfound';
import RegisterComponent from './Components/RegisterComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="*" element={<Notfound />} />
        <Route path="" element={<NotAuthorized />} />
        <Route path='/register' element={<RegisterComponent/>}/>
      </Routes>
    </Router>
  );
}

export default App;
