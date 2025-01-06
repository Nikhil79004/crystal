import Mid from "./components/Mid/Mid";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./Footer/Footer";
import Product from "./Home/Product";
import Slider from "./Slider/Slider";




function App() {
  return (
    <div className="bg-gradient-to-r from-slate-400 to-slate-500">
    <Navbar/>
    <Mid/>
    <Product/>
    <Slider/>
    <Footer/>
    </div>
  )
};

export default App;

