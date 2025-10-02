import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const FloatingButtons = () => {
  const [showButtons, setShowButtons] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const buttons = [
    {
      icon: '📞',
      label: 'Call Now',
      action: () => window.open('tel:5551234POOL'),
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      icon: '💬',
      label: 'Get Quote',
      action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      icon: '📧',
      label: 'Email Us',
      action: () => window.open('mailto:info@aquaclear.com'),
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700'
    }
  ]
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: showButtons ? 1 : 0,
        scale: showButtons ? 1 : 0.8
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Expanded buttons */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: isExpanded ? 1 : 0,
          y: isExpanded ? 0 : 20
        }}
        className="space-y-3 mb-4"
      >
        {buttons.map((button, index) => (
          <motion.button
            key={button.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: isExpanded ? 1 : 0,
              x: isExpanded ? 0 : 20
            }}
            transition={{ delay: index * 0.1 }}
            onClick={button.action}
            className={`flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${button.color} ${button.hoverColor} text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group`}
            whileHover={{ x: -10 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl group-hover:animate-bounce">{button.icon}</span>
            <span className="font-medium whitespace-nowrap">{button.label}</span>
          </motion.button>
        ))}
      </motion.div>
      
      {/* Main floating action button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 bg-gradient-to-r from-pool-500 to-aqua-500 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          rotate: isExpanded ? 45 : 0,
          backgroundColor: isExpanded ? '#ef4444' : undefined
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? '✕' : '💧'}
        </motion.span>
      </motion.button>
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-pool-400 opacity-30"
        initial={{ scale: 1 }}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Emergency notice */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: showButtons && !isExpanded ? 1 : 0,
          y: showButtons && !isExpanded ? 0 : 10
        }}
        className="absolute -top-12 right-0 bg-red-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap animate-pulse"
      >
        24/7 Emergency
      </motion.div>
    </motion.div>
  )
}

export default FloatingButtons