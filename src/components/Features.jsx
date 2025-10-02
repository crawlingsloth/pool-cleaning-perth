import { motion } from 'framer-motion'

const features = [
  {
    title: '15+ Years Experience',
    description: 'Trusted pool maintenance expertise since 2008',
    icon: '⭐',
    stat: '15+',
    statLabel: 'Years'
  },
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed professionals with comprehensive insurance coverage',
    icon: '🛡️',
    stat: '100%',
    statLabel: 'Protected'
  },
  {
    title: 'Eco-Friendly Chemicals',
    description: 'Safe, environmentally responsible pool treatment products',
    icon: '🌱',
    stat: '100%',
    statLabel: 'Eco-Safe'
  },
  {
    title: 'Same-Day Service',
    description: 'Emergency repairs and urgent maintenance available',
    icon: '⚡',
    stat: '24/7',
    statLabel: 'Available'
  },
  {
    title: 'Free Water Testing',
    description: 'Complimentary pool water analysis with every visit',
    icon: '🧪',
    stat: 'FREE',
    statLabel: 'Testing'
  },
  {
    title: 'Customer Satisfaction',
    description: 'Over 500 happy customers throughout Miami',
    icon: '💯',
    stat: '500+',
    statLabel: 'Customers'
  }
]

const Features = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-pool-600 to-aqua-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-16 h-16 border border-white/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose AquaClear?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Professional pool service you can trust with certified technicians and eco-friendly practices
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-8 text-center group"
            >
              <motion.div
                className="text-6xl mb-6"
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0]
                }}
                transition={{ 
                  scale: { type: "spring", stiffness: 300 },
                  rotate: { duration: 0.5 }
                }}
              >
                {feature.icon}
              </motion.div>
              
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="mb-4"
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {feature.stat}
                </div>
                <div className="text-white/70 text-sm uppercase tracking-wider">
                  {feature.statLabel}
                </div>
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-aqua-200 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/90">
              <div className="flex items-center gap-2">
                <span className="text-aqua-300">📞</span>
                <a href="tel:5551234POOL" className="hover:text-aqua-200 transition-colors">
                  (555) 123-POOL
                </a>
              </div>
              <div className="hidden sm:block text-white/50">|</div>
              <div className="flex items-center gap-2">
                <span className="text-aqua-300">📧</span>
                <a href="mailto:info@aquaclear.com" className="hover:text-aqua-200 transition-colors">
                  info@aquaclear.com
                </a>
              </div>
              <div className="hidden sm:block text-white/50">|</div>
              <div className="flex items-center gap-2">
                <span className="text-aqua-300">📍</span>
                <span>Miami, FL</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features