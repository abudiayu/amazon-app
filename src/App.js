import "./index.css"
import './App.css';
import Header from './components/Header/Header';
import Carousel from "./components/Carousel/CarouselEffect"
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <Header/>
      <Carousel/>
      <Category/>
      <Product/>
    </>
  );
}

export default App;
