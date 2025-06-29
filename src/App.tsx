import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageBase } from './pages/pageBase/pageBase'
import { Home } from './pages/Home/home'
import LoginPage from './pages/Login/Login'
import RegisterPage from './pages/Cadastro/Cadastro'
import NotFoundPage from './pages/NotFound/notFound'
import ProductPage from './pages/Productpage/ProductPage'
import { UseCardtItensProvider } from './contexts/userCarItens'


function App() {
  return (
    <>
    <UseCardtItensProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageBase />}>
            <Route index element={<Home />} />
            <Route path='/product/:id' element={<ProductPage />} />
            
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      </UseCardtItensProvider>
    </>
  )
}

export default App
