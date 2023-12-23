
import './App.css';
import HomePage from './Routes/HomePage';
import LoginPage from './Routes/LoginPage';
import ProductPage from './Routes/ProductPage';
import ProductsPage from './Routes/ProductsPage';
import SignupPage from './Routes/SignupPage';
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route path="/SignupPage" element={<SignupPage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/ProductsPage" element={<ProductsPage/>} />
        <Route path="/productPage/:key" element={<ProductPage/>} />
        <Route path='/LoginPage' element={<LoginPage/>} />
    </Routes>
  );
}

export default App;
