import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageBase } from './pages/pageBase/pageBase';
import { Home } from './pages/Home/home';
import LoginPage from './pages/Login/Login';
import RegisterPage from './pages/Cadastro/Cadastro';
import NotFoundPage from './pages/NotFound/notFound';
import ProductPage from './pages/Productpage/ProductPage';
import { UseCardtItensProvider } from './contexts/userCarItens';
import CartPage from './pages/cartPage/cart';
import { Checkout } from './pages/Checkout/checkout';

import { CategoryPage } from './pages/CategoryPage/categoryPage';
import { AuthProvider } from './contexts/AuthContext';




function App() {
  return (
    <>
      <UseCardtItensProvider>
        <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageBase />}>
              <Route index element={<Home />} />
              <Route path='/product/:id' element={<ProductPage />} />
              <Route path='/category/:category' element={<CategoryPage />} />
              <Route path='/shopping-cart' element={<CartPage />} />
              <Route path='/checkout' element={<Checkout />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

        </BrowserRouter>
        </AuthProvider>
      </UseCardtItensProvider>
    </>
  )
}

export default App
