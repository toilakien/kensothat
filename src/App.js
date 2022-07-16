import {Routes,Route,Link}from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './App.css';
import BreakCrumb from './components/breakCrumb/BreakCrumb';
import Header from './layout/Header';
import ProductAllPage from './page/ProductAllPage';
import ProductDetail from './components/product/ProductDetail';
import Home from './page/Home';
function App() {
  // const productActive=useSelector(state=>state.productReducer.productActive);
  
  return (
    <div className="App">
      <Header/>
      <BreakCrumb/>
      <br/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/product' element= {<ProductAllPage/>}/>
        <Route path='/product/detail' element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
