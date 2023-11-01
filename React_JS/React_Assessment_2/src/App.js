import './App.css';
import LoginForm from './Components/loginform';
import Register from './Registeration';
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <LoginForm />
        <div className='content'>
        <Routes>  
          <Route path="Register" element={<Register/>}></Route>
        </Routes>      
        </div>
      </div>
    </Router>
  );
}

export default App;
