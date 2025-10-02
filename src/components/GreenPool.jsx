import { motion } from 'framer-motion'

const GreenPool = () => {
  const causes = [
    {
      title: "Poor Filtration",
      description: "Inadequate filtration or clogged filters prevent proper water circulation.",
      icon: "🔄"
    },
    {
      title: "Chemical Imbalance",
      description: "Incorrect pH levels or insufficient chlorine create perfect algae conditions.",
      icon: "⚗️"
    },
    {
      title: "Weather Conditions",
      description: "Heavy rain, high temperatures, and storms can rapidly affect water quality.",
      icon: "🌧️"
    },
    {
      title: "Lack of Maintenance",
      description: "Irregular cleaning and testing allow problems to develop quickly.",
      icon: "⏰"
    }
  ]

  const process = [
    {
      step: "1",
      title: "Assessment",
      description: "We test water chemistry and identify the specific algae type affecting your pool."
    },
    {
      step: "2", 
      title: "Shock Treatment",
      description: "Powerful chemicals eliminate algae and bacteria throughout the water."
    },
    {
      step: "3",
      title: "Mechanical Cleaning",
      description: "Thorough vacuuming, brushing, and filter cleaning remove all debris."
    },
    {
      step: "4",
      title: "Water Balancing",
      description: "We restore proper chemical levels for long-lasting clarity."
    }
  ]

  return (
    <section id="green-pool" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Green Pool Recovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't let a green pool ruin your summer. Our expert recovery service transforms even the most neglected pools back to crystal clear perfection.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              What Causes Green Pools?
            </h3>
            
            <div className="space-y-4">
              {causes.map((cause, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="bg-white rounded-xl p-4 shadow-md flex items-center gap-4"
                >
                  <div className="text-3xl">{cause.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{cause.title}</h4>
                    <p className="text-gray-600 text-sm">{cause.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-8 text-white"
          >
            <h3 className="text-3xl font-bold mb-6">
              Our 4-Step Recovery Process
            </h3>
            
            <div className="space-y-6">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                    <p className="text-white/90">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <motion.div
                className="text-6xl mb-4"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🧽
              </motion.div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                Fast Recovery
              </h4>
              <p className="text-gray-600">
                Most green pools are crystal clear within 3-5 days
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                $550
              </div>
              <p className="text-gray-600 mb-4">
                Flat rate for standard residential pools
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ All chemicals included</li>
                <li>✓ Equipment provided</li>
                <li>✓ Satisfaction guaranteed</li>
              </ul>
            </div>
            
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-colors"
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Get Recovery Quote
              </motion.button>
              <p className="text-sm text-gray-500 mt-2">
                Emergency service available
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            <strong>Prevention is better than cure!</strong> Ask about our weekly maintenance plans to keep your pool crystal clear year-round.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default GreenPool