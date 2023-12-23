import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import './ProductsPage.css';
import Navbar from './Navbar';
import ProductsShimmer from '../Components/ProductsShimmer'


export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [find, setFind]=useState('')
    const handleSearchChange =(event)=>{
        const{value}=event.target;
        setFind(value)
     }
     console.log(find)
    useEffect(() => {
      const fetchData = async () => {
            try {
                    let response = await fetch('https://dummyjson.com/products')
                    if(find){
                           response = await fetch(`https://dummyjson.com/products/search?q=${find}`)
                    }
                    const data = await response.json();
                    setProducts(data.products);
                } 
            catch (error) {
                   console.error('Error fetching data:', error);
                }
};
fetchData()

}, [find]);

let navigate = useNavigate();
     const handleProductCard =(key)=>{
        navigate(`/productPage/${key}`)
     }
const dispayProducts = products.map((product) => (
    <div className="product-card"
     onClick={()=>handleProductCard(product.id)} 
     key={product.id}>
      <div className="image-frame">
        <img src={product.thumbnail} alt="" />
      </div>
      <div className="details-frame">
        <p>{product.rating}</p>
        <h2>{product.title}</h2>
        <div className="price">
        <p> MRP:{Math.floor(product.price/(1-(product.discountPercentage/100)))}/-</p> 
        <p style={{fontSize:'12px',color:'grey', lineHeight:'19px'}}>{product.discountPercentage}% off</p>
        <p style={{fontWeight:600}}>Buy:{product.price}/-</p>
        </div>
        <div className="buttons">
          <button style={{width:'60px'}}>Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  ))


return (
    <>
        <Navbar/>
      <div className="products-container">
        <div className="product-navigation">
                {/* <div className="page-navigation">
                    {products.map((product)=>(
                        <a href="">{product.index}</a>
                    ))}
                </div> */}
                <input
                className="search"
                type="text" 
                name='search'
                placeholder='Search'
                onChange={handleSearchChange}
                />
                <button
                className='theme-button'
                >Dark mode</button>
        </div>
        {dispayProducts.length > 0 ? (
          dispayProducts
        ) : (
          <ProductsShimmer />
        )}
      </div>
    </>
  );
}
