import React, {useState}from 'react';
import './LoginPage.css';
import { SocialIcon} from 'react-social-icons';
import cover from '../Images/Logincover1.png';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import ProductsShimmer from '../Components/ProductsShimmer'


export default function LoginPage() {
    const navigate = useNavigate();
    const[formData, setFormData]=useState({
        email:'',
        password:'',
    })

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
      const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:2000/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
          });
    
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };

      const handleSignupPage =()=> navigate('../SignupPage')
  return (
    <>
    <Navbar/>
      <div className="loginpage-container">
        <div className="creative-conatiner">
          <div className="text-heading">
            <h1>Hurry UP! Grab the latest deals</h1>
            {/* <h1 className='gradient-text'> ColleX</h1> */}
          </div>
          <div className='coverimage'>
             <img src={cover} alt="" />
          </div>
        </div>

        <div className="loginbox-conatiner">
          <div style={{ padding: '0% 15% 5%' }}>
            <div className="login-heading">
              <h2>Login here.</h2>
            </div>

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
              placeholder=' Password'
            />
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <button
                onClick={handleSignupPage}
                className='login-button'>Sign Up</button>
                <button
                type='submit'
                onClick={handleLogin}
                className='signup-button'>Login</button>
            </div>
            <div className='forgot-password'>
              <div style={{ display: 'flex' }}>
                <input className='checkbox' type="checkbox" />
                <label style={{ width: '60px' }}>Remember</label>
              </div>
              <a href="/">Forgot password?</a>
            </div>
            <div style={{alignItems:'center',justifyContent:'center',display:'flex', paddingTop:'20px'}}>
                <div class="line"></div>
                <div class="text"><p style={{fontSize:'20px'}}>Login</p> 
                <pre> </pre> 
                <p style={{fontSize:'20px', fontWeight:'300'}}>with others</p></div>
                <div class="line"></div>
            </div>
            <div className="icons-links">
            <SocialIcon url="https://www.facebook.com" />
              <p style={{fontSize:'15px', fontWeight:'300', lineHeight:'14px'}}>Login with Facebook</p>
            </div>
            <div className="icons-links">
            <SocialIcon url="https://mail.google.com/" label="my video channel"/>
            <p style={{fontSize:'15px', fontWeight:'300', lineHeight:'14px'}}>Login with Gmail</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
