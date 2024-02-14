import Header from './components/Header/Header';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
       <Route path='/product-detail/:id' element={<ProductDetail/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
