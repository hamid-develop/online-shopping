import "./App.scss";
import "antd/dist/antd.css";
import "swiper/css/bundle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import CategoryProducts from "./components/categoryProducts/CategoryProducts";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route element={<CategoryProducts />} path="/category/:categoryName" />
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
