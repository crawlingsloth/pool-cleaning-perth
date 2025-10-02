import { lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Footer from './components/Footer'

// Lazy load heavy components
const WhyMaintain = lazy(() => import('./components/WhyMaintain'))
const Services = lazy(() => import('./components/Services'))
const PoolLights = lazy(() => import('./components/PoolLights'))
const GreenPool = lazy(() => import('./components/GreenPool'))
const Contact = lazy(() => import('./components/Contact'))

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
          <Suspense fallback={<div className="h-screen" />}>
            <WhyMaintain />
            <Services />
            <PoolLights />
            <GreenPool />
            <Contact />
          </Suspense>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App