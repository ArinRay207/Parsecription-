import React from 'react'
import './Navbar.css'
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth((auth)=>({
      ...auth,
      user: null,
      token: ''
    }));
    localStorage.removeItem("auth");
    navigate('/login');
    // toast.success("Logged out sucessfully!");
  }

  return (
    <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">PARSECRIPTION</a>
        <div className = "navbar-items-list">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon menu-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/upload-file">Upload Prescription</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/" onClick={handleLogout} >Logout</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar