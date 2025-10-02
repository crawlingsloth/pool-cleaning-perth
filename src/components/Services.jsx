import { motion } from 'framer-motion'

const services = [
  {
    title: 'Weekly Pool Cleaning',
    price: '$180/month',
    description: 'Complete pool maintenance including skimming, vacuuming, and chemical balancing',
    icon: '🏊‍♂️',
    features: ['Skimming & debris removal', 'Vacuuming & brushing', 'Filter cleaning', 'Chemical testing']
  },
  {
    title: 'Chemical Balancing',
    price: '$75/visit',
    description: 'Professional water testing and chemical adjustment for perfect pH levels',
    icon: '⚗️',
    features: ['pH testing & adjustment', 'Chlorine optimization', 'Alkalinity balancing', 'Shock treatment']
  },
  {
    title: 'Equipment Repair',
    price: '$120/hour + parts',
    description: 'Expert repair services for pumps, filters, heaters, and automation systems',
    icon: '🔧',
    features: ['Pump repair & maintenance', 'Filter replacement', 'Heater service', 'Automation fixes']
  },
  {
    title: 'Pool Opening/Closing',
    price: '$300/service',
    description: 'Seasonal pool preparation and winterisation services',
    icon: '🌊',
    features: ['Equipment inspection', 'Chemical startup', 'Cover installation', 'System testing']
  },
  {
    title: 'Green Pool Recovery',
    price: '$550 flat rate',
    description: 'Complete algae treatment and pool restoration to crystal clear condition',
    icon: '🧽',
    features: ['Algae elimination', 'Deep cleaning', 'Chemical shock', 'Water clarification']
  }
]

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-pool-50 to-white relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-water-texture opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional pool maintenance and repair services to keep your pool crystal clear year-round
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 group hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-center mb-6">
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <div className="text-3xl font-bold text-gradient mb-4">
                  {service.price}
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-center text-gray-600"
                  >
                    <span className="w-2 h-2 bg-aqua-500 rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary group-hover:shadow-lg"
              >
                Book Service
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services