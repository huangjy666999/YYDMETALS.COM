import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Ferroalloys from './pages/Ferroalloys'
import Ferrosilicon from './pages/Ferrosilicon'
import Ferrophosphorus from './pages/Ferrophosphorus'
import Ferrochrome from './pages/Ferrochrome'
import Ferrosulfur from './pages/Ferrosulfur'
import Resources from './pages/Resources'
import Sourcing from './pages/Sourcing'
import Production from './pages/Production'
import About from './pages/About'
import Contact from './pages/Contact'
import SubmitMaterial from './pages/SubmitMaterial'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ferroalloys" element={<Ferroalloys />} />
          <Route path="/ferrosilicon" element={<Ferrosilicon />} />
          <Route path="/ferrophosphorus" element={<Ferrophosphorus />} />
          <Route path="/ferrochrome" element={<Ferrochrome />} />
          <Route path="/ferrosulfur" element={<Ferrosulfur />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/sourcing" element={<Sourcing />} />
          <Route path="/production" element={<Production />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submit-material" element={<SubmitMaterial />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
