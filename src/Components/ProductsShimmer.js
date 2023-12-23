import React, { useState, useEffect } from 'react';
import '../Routes/ProductsPage.css';
import './Shimmering.css'

export default function ProductsPage() {
   
const shimmer = 

      <div  className="product-card shimmer">
         <div style={{backgroundColor:'lightgrey', height:'280px'}} className="image-frame">
         </div>
          <div className="details-frame">
             <div className="white">

             </div>
          <button style={{width:'60px'}}></button>
          <button></button>
          </div>
       </div>


return (
    <>
    <div style={{display:'flex', flexWrap:'wrap'}} className="products-container">
       {shimmer}
       {shimmer}
       {shimmer}
       {shimmer}
       {shimmer}
       {shimmer}
       {shimmer}
       {shimmer}
    </div>
    </>
  );
}
