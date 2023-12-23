import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {


   const navigate = useNavigate()
    const handleLoginPage =()=> navigate('../LoginPage')
    const handleHomePage =()=> navigate('../')
    const handleProductsPage =()=> navigate('../ProductsPage')
    // const handleSignupPage =()=> navigate('../SignupPage')

  return (
    <>
        <div className="nav-container">
            <h3>MINIMALIS</h3>
            <div className="nav-links">
                <a onClick={handleHomePage}>HOME</a>
                <a onClick={handleProductsPage}>PRODUCTS</a>
                <a onClick={handleLoginPage}>LOGIN</a>
                <a href="./">ABOUT</a>
            </div>
        </div>
    </>
  )
}
