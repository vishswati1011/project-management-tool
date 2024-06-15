
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import UnAuthRoutes from './routes/unAuthRoutes';
import AuthRoutes from './routes/authRoutes';

function App() {
  let token = localStorage.getItem('token') || 'token';
  return (
    <div className="App">
      <Router>
        { 
          ! token ? 
            <UnAuthRoutes/>
          : 
            <AuthRoutes/>
        }
      </Router>
    </div>
  );
}

export default App;
