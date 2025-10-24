import Landing_page from './components/ecommerce/Landing_page'
import Shopping_page from './components/ecommerce/Shopping_page'
import ShoppingCart_page from './components/ecommerce/ShoppingCart_page'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from './constants/CartContext'
import Checkout from './components/ecommerce/Checkout';
import Checkout_modal from './components/ecommerce/Checkout_modal';


function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing_page />}></Route>
            <Route path="/shop" element={<Shopping_page />}></Route>
            <Route path="/cart" element={<ShoppingCart_page />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/place-order" element={<Checkout_modal />}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  )
}

export default App
