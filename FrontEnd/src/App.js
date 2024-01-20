import './App.css';
import Signup from './pages/Signup';
import Graphs from './pages/Graphs';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Test from './pages/Test';
import FileUpload from './components/FileUpload';
import { useAuth } from './context/auth';
import Graph from './components/Graph';
import Calendar from './components/Calender';
import Dashboard from './pages/Dashboard';
import Prescription from './pages/Prescription';

function App() {
  const [auth, setAuth] = useAuth();
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Test />} /> */}
        <Route path='/signup' element={<Signup type={"signup"} />} />
        <Route path='/login' element={<Signup type={"login"} />} />
        <Route path='/graph' element={!auth.user ? <Signup type={"login"} /> : <Graphs />} />
        <Route path='/auth/google' element=<Test /> />
        <Route path='/calendar' element=<Calendar /> />
        <Route path='/home' element=<Dashboard /> />
        <Route path='/upload-file' element=<Prescription /> />
      </Routes>
    </div>
  );
}

export default App;
