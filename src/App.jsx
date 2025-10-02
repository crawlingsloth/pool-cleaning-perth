import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WhyMaintain from './components/WhyMaintain'
import Services from './components/Services'
import PoolLights from './components/PoolLights'
import GreenPool from './components/GreenPool'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pool-50 via-white to-aqua-50 overflow-x-hidden">
      <Navigation />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <WhyMaintain />
          <Services />
          <PoolLights />
          <GreenPool />
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App