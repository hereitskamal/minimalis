import React, {useState, useEffect} from 'react'
import './ProductPage.css'
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHandPointRight } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Carousel from '../Components/Carousel';

export default function ProductPage() {

    const [products, setProducts] = useState([]);
    const {key} = useParams();
    console.log('params.key:', key);

  useEffect(() => {
    
    fetchData(key);
  }, []);

  const fetchData = async (key) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${key}`);
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
        <Navbar/>
        <Carousel/>
    <div className="ProductPage-container">
        <div className="product-conatiner">
            <div className="product-image-conatiner">
                 <div className="main-image">
                    <img src={products?.thumbnail} alt="" />
                 </div>
                 <div className="other-images">
                      {products?.images?.map((imageUrl, i) => (
                        <div className="other-image">
                        <img key={i} src={imageUrl} alt={`Image ${i + 1}`} />
                        </div>
                      ))} 
                </div>

            </div>
            <div className="discribtion-conatiner">
                     <h1>{products?.title}</h1>
                     <div className="price">
                       <p> MRP:
                               {Math.floor(products?.price/(1-(products?.discountPercentage/100)))}
                        /-</p> 
                       <p>
                               {products?.discountPercentage}
                        % off</p>
                       <p>Buy:
                        {products?.price}
                        /-</p>
                     </div>
                     <button>Add to Cart</button>
                     <button>Buy Now</button>
                     <button style={{width:'50px', float:'right', fontSize:'20px',lineHeight:'50px'}}><CiShoppingCart /></button>
                     <p>Add to Wishlist</p>
                     <hr />
                     <h3>Description</h3>
                     <p style={{width:'100%', textAlign:'center'}}>{products?.description}</p>
            </div>
        </div>
             {/* ))} */}
    </div>
    </>
  )
}
