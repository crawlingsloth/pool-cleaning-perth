import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-pool-400 mb-2">
              Pool Cleaning Perth
            </h3>
            <p className="text-gray-400">
              Professional pool maintenance and repair services in Perth, Western Australia
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="tel:0402121600" 
              className="text-gray-400 hover:text-pool-400 transition-colors"
            >
              0402 121 600
            </a>
            <a 
              href="mailto:info@poolcleaningperth.com" 
              className="text-gray-400 hover:text-pool-400 transition-colors"
            >
              info@poolcleaningperth.com
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} Pool Cleaning Perth • Site Refresh by Joe's IT Solutions
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer