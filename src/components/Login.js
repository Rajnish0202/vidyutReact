import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className='loginContainer'>
      <div className='loginTopContainer'></div>

      <div className='loginrow'>
        <div className='right-col'>
          <div className='login_form'>
            <h2>Login</h2>
            <hr />

            <input type='email' className='form-control' placeholder='email...' />
            <input type='password' className='form-control' placeholder='password...' />

            <button className='loginbtn'>Login</button>

            <Link to='/register' className='register'>
              Click Here to register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
