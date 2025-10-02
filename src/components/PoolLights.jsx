import { motion } from 'framer-motion'

const PoolLights = () => {
  const features = [
    {
      title: "LED Pool Lighting",
      description: "Energy-efficient LED lights that transform your pool into a stunning nighttime oasis.",
      icon: "💡",
      price: "From $450 installed"
    },
    {
      title: "Colour-Changing Systems",
      description: "Customisable colour schemes to match any mood or occasion with remote control.",
      icon: "🌈",
      price: "From $650 installed"
    },
    {
      title: "Fiber Optic Lighting",
      description: "Elegant fiber optic solutions for perimeter lighting and water features.",
      icon: "✨",
      price: "From $800 installed"
    },
    {
      title: "Smart Automation",
      description: "Integrate your pool lighting with home automation systems for seamless control.",
      icon: "📱",
      price: "From $350 installed"
    }
  ]

  const benefits = [
    "Extended swimming hours",
    "Enhanced safety and visibility",
    "Increased property value",
    "Energy-efficient solutions",
    "Customisable ambience",
    "Professional installation"
  ]

  return (
    <section id="pool-lights" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pool Lighting Solutions
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Transform your pool into a breathtaking nighttime feature with our professional lighting solutions. Perfect for entertaining and extending your swimming season.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>
              
              <p className="text-white/80 mb-4 text-sm">
                {feature.description}
              </p>
              
              <div className="text-lg font-semibold text-cyan-300">
                {feature.price}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Invest in Pool Lighting?
              </h3>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-white/90">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <motion.div
                className="text-8xl mb-6"
                animate={{
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🏊‍♂️✨
              </motion.div>
              
              <h4 className="text-2xl font-bold mb-4">
                Create Your Perfect Ambience
              </h4>
              
              <p className="text-white/80 mb-6">
                From subtle white lighting to vibrant colour displays, we'll design the perfect lighting scheme for your pool area.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full font-semibold transition-colors"
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Get Lighting Quote
              </motion.button>
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
          <p className="text-white/70 text-sm">
            All installations include warranty and professional setup. Licensed electricians ensure safety and compliance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PoolLights