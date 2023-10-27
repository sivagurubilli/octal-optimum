import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Authreducer/action';
import Navbar from '../Navbar/Navbar';
import './LoginPage.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    mobileNo: '',
    password: '',
    roles: 'user',
    firebaseToken: 'ndvgcuydgsuct76d67c',
    location: {
      type: 'Point',
      coordinates: [17.4382139072552, 78.4958441684098],
    },
  });
  const user = useSelector((state) => state?.auth?.user);
const navigate = useNavigate()
  const handleLogin = () => {
    dispatch(login(formData));
   
    if(user?.data?.name){
        localStorage.setItem('myData', JSON.stringify(user));
        navigate("/")

    }

  };

  return (
    <div >
        <Navbar />
         <div className="login-container">
      
       <h3>Login</h3>

      <input
        type="text"
        className="login-input"
        placeholder="Mobile Number"
        value={formData.mobileNo}
        onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })}
      />
      <input
        type="password"
        className="login-input"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <div>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      </div>
      </div>
    </div>
  );
}

export default LoginPage;
