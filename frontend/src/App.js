
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import UnAuthRoutes from './routes/unAuthRoutes';
import AuthRoutes from './routes/authRoutes';
import { store } from './rtk/store';
import { Provider } from 'react-redux'; 
function App() {
  let token = localStorage.getItem('token');
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        { 
          ! token ? 
            <UnAuthRoutes/>
          : 
            <AuthRoutes/>
        }
      </Router>
      </Provider>
    </div>
  );
}

export default App;
