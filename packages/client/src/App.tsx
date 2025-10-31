import { Route, Routes, Outlet } from 'react-router-dom'
import Home from './pages/home'
import Products from './pages/products'
import SellerHome from './pages/sellerHome'
import Dashboard from './pages/dashboard'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './pages/product'
import Checkout from './pages/checkout'
import Cart from './pages/cart'

const App = () => {
  const Layout = () => (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/seller">
          <Route path="" element={<SellerHome />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
