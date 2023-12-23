import React, { useState}from 'react';
import './LoginPage.css';
import Navbar from './Navbar';
import cover from '../Images/Logincover.png';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate()
    const[formData, setFormData]=useState({
        name:'',
        email:'',
        password:'',
        number:'',
    })
    // body: JSON.stringify({ name, email, password }),
    const handleInputChange=(event)=>{
        const{name,value}=event.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    
    const handleInputClick =(event)=>{
        event.target.select();
    }
    
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:2000/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
          });  const data = await response.json();
    
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
      const handleLoginPage =()=> navigate('../LoginPage')
            return (
                <>
                <Navbar/>
      <div className="loginpage-container">
        <div className="creative-conatiner">
          <div className="text-heading">
            <h1>Dive Into Our Nest!</h1>
            {/* <h1 className='gradient-text'> ColleX</h1> */}
          </div>
          <div className='coverimage'>
             <img src={cover} alt="" />
          </div>
        </div>

        <div className="loginbox-conatiner">
          <div style={{ padding: '0% 15% 5%' }}>
            <div className="login-heading">
              <h2>SignUp here.</h2>
            </div>

            <input
              type="text"
              name="name"
              id='name'
              value={formData.name}
              onChange={handleInputChange}
              placeholder='Enter your Name'
              onClick={handleInputClick}
              required
            />

             <input
              type="email"
              name="email"
              id='email'
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Enter your Email ID/ Mobile no.'
              onClick={handleInputClick}
              required
            />

            <input
              type="password"
              name="password"
              id='password'
              value={formData.password}
              onChange={handleInputChange}
              onClick={handleInputClick}
              minLength={8}
              required
              placeholder='Set Password'
            />
            <input
              type="password"
              name="confirmPassword"
              id='ConfirmPassword'
            //   value={formData.confirmPassword}
              onChange={handleInputChange}
              onClick={handleInputClick}
              minLength={8}
              required
              placeholder='Confirm Password'
            />
             <input
              type="number"
              name="number"
              id='number'
              value={formData.number}
              onChange={handleInputChange}
              onClick={handleInputClick}
              minLength={10}
              maxLength={10}
              required
              placeholder='Number'
            />
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <button
                type='submit'
                onClick={handleSignup}
                className='login-button'>Sign Up</button>
                <button
                type='submit'
                onClick={handleLoginPage}
                className='signup-button'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
