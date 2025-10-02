import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const Canvas = lazy(() => import('@react-three/fiber').then(module => ({ default: module.Canvas })))
const WaterRipple = lazy(() => import('./WaterRipple'))

const Hero = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pool-600 to-aqua-600 overflow-hidden">
      {/* 3D Water Ripple Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <WaterRipple />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Animated Pool Equipment */}
      <motion.div
        className="absolute top-20 right-20 text-white/20 text-8xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🏊‍♂️
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20 text-white/20 text-6xl"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🧽
      </motion.div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white section-padding max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Pool Cleaning Perth
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 font-light opacity-90 space-y-2"
        >
          <p>Is your pool ready for winter?</p>
          <p>Can your pool equipment handle a heavy storm?</p>
          <p>Is your pool winterised?</p>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl mb-8 font-light opacity-90 max-w-2xl mx-auto"
        >
          Book in for a <strong>winteriser treatment</strong> and get a <strong>free assessment</strong> of your pool equipment today—before winter really hits.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Book a Winteriser Treatment
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary text-lg px-8 py-4"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contact Us
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm opacity-80"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-aqua-300 rounded-full"></span>
            15+ Years Experience
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-aqua-300 rounded-full"></span>
            Licensed & Insured
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-aqua-300 rounded-full"></span>
            24/7 Emergency Service
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero