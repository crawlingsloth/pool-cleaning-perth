import { motion } from 'framer-motion'

const WhyMaintain = () => {
  const reasons = [
    {
      title: "Keep your family safe",
      description: "Balanced pH, chlorine, and calcium keep water healthy and safe for swimmers.",
      icon: "🛡️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Extend your pool's life",
      description: "Regular care prevents expensive repairs on a major investment.",
      icon: "⏰",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Keep it in shape",
      description: "Outdoor pools face harsh weather—proper maintenance keeps them pristine year-round.",
      icon: "🌟",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section id="why" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Maintain Your Pool?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Regular pool maintenance isn't just about looks—it's about safety, longevity, and peace of mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <motion.div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${reason.color} flex items-center justify-center text-2xl mb-6 mx-auto`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {reason.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-pool-600 to-aqua-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Don't wait until it's too late
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Winter weather can damage your pool equipment and water quality. Protect your investment with our professional winteriser treatment.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-pool-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-shadow"
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Get Your Free Assessment
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyMaintain