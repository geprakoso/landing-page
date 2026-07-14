import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PortfolioLanding from './LandingPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioLanding />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
