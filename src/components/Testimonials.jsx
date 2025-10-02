import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Martinez',
    location: 'Coral Gables, FL',
    rating: 5,
    text: 'AquaClear transformed our green swamp into a sparkling oasis! Their team is professional, reliable, and always goes above and beyond. Best pool service in Miami!',
    service: 'Green Pool Recovery'
  },
  {
    name: 'Michael Rodriguez',
    location: 'Miami Beach, FL',
    rating: 5,
    text: 'Been using AquaClear for 3 years now. They maintain our pool perfectly and the weekly service is always on time. Great value for the quality of work.',
    service: 'Weekly Cleaning'
  },
  {
    name: 'Jennifer Chen',
    location: 'Aventura, FL',
    rating: 5,
    text: 'Emergency pump repair on a Sunday - they came out same day! Professional, honest pricing, and got us back to swimming by Monday. Highly recommend!',
    service: 'Equipment Repair'
  },
  {
    name: 'Robert Johnson',
    location: 'Key Biscayne, FL',
    rating: 5,
    text: 'Love their eco-friendly approach and attention to detail. Our pool has never looked better, and I feel good about the chemicals they use around my family.',
    service: 'Chemical Balancing'
  },
  {
    name: 'Maria Gonzalez',
    location: 'Pinecrest, FL',
    rating: 5,
    text: 'Professional pool opening service every spring. They handle everything from cover removal to equipment startup. Makes pool season stress-free!',
    service: 'Pool Opening'
  },
  {
    name: 'David Wilson',
    location: 'Coconut Grove, FL',
    rating: 5,
    text: 'Outstanding customer service and competitive pricing. They explain everything they do and always leave detailed service notes. True professionals!',
    service: 'Weekly Cleaning'
  }
]

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-pool-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-pool-200 rounded-full blur-xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-aqua-200 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
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
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Over 500 satisfied customers trust us with their pool maintenance throughout Miami-Dade County
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-6 relative group"
            >
              {/* Quote decoration */}
              <div className="absolute -top-2 -left-2 text-6xl text-pool-200 opacity-50 font-serif">
                "
              </div>
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-yellow-400 text-xl"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
              
              {/* Service tag */}
              <div className="inline-block bg-gradient-to-r from-pool-500 to-aqua-500 text-white text-xs px-3 py-1 rounded-full mb-4">
                {testimonial.service}
              </div>
              
              {/* Testimonial text */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                {testimonial.text}
              </p>
              
              {/* Customer info */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-pool-600 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gradient-to-r from-pool-500 to-aqua-500 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block glass-card p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Join Our Happy Customers
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the AquaClear difference with a free pool assessment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary bg-white/40 text-gray-800 border-gray-300"
              >
                Read More Reviews
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials