import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Collection from "./Pages/Collection"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import PlaceOrder from "./Pages/PlaceOrder"
import Orders from "./Pages/Orders"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
import Verify from "./Pages/Verify"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Collection />} path="/collection" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Product />} path="/product/:productId" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Login />} path="/login" />
        <Route element={<PlaceOrder />} path="/place-order" />
        <Route element={<Orders />} path="/orders" />
        <Route element={<Verify />} path="/verify" />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

