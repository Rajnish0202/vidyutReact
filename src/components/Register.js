import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  return (
    <div className='registerContainer'>
      <div className='topContainer'></div>

      <div className='row'>
        <div className='right-col'>
          <div className='register_form'>
            <h2>Register</h2>
            <hr />

            <input type='email' className='form-control' placeholder='email...' />
            <input type='password' className='form-control' placeholder='password...' />
            <input type='password' className='form-control' placeholder='Confirm password...' />
            <button className='reg-btn'>Register</button>

            <Link to='/login' className='login'>
              Click Here to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
