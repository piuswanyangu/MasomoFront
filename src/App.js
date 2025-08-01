
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import the router
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomeComponent from './Components/HomeComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
