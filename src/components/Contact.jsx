import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const services = [
    'Weekly Pool Cleaning',
    'Chemical Balancing',
    'Equipment Repair',
    'Pool Opening/Closing',
    'Green Pool Recovery',
    'Emergency Service'
  ]
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitted(true)
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData)
    }
  }
  
  if (isSubmitted) {
    return (
      <section className="section-padding bg-gradient-to-br from-pool-600 to-aqua-600">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="glass-card p-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="text-8xl mb-6"
            >
              ✅
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Thank You!
            </h2>
            <p className="text-white/90 text-lg mb-8">
              We've received your message and will get back to you within 2 hours during business hours.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSubmitted(false)}
              className="btn-secondary bg-white/30 text-white border-white/50"
            >
              Send Another Message
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
  }
  
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-pool-600 to-aqua-600 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-full h-full opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255,255,255,0.1) 35px,
              rgba(255,255,255,0.1) 70px
            )`
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ready to dive into crystal clear water? Contact us today for a free pool assessment and personalized service quote.
            </p>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-4 glass-card p-4"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                  📞
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:0402121600" className="text-aqua-200 hover:text-white transition-colors">
                    0402 121 600
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4 glass-card p-4"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                  📧
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:info@poolcleaningperth.com" className="text-aqua-200 hover:text-white transition-colors">
                    info@poolcleaningperth.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-4 glass-card p-4"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-white/90">37 St Georges Terrace<br />Perth WA 6000</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4 glass-card p-4"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                  ⏰
                </div>
                <div>
                  <h4 className="font-semibold">Hours</h4>
                  <p className="text-white/90">
                    Mon-Sat: 7AM-6PM<br />
                    Sun: 9AM-4PM<br />
                    <span className="text-aqua-200">24/7 Emergency Service</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative floating-label">
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/20 border ${
                    errors.name ? 'border-red-400' : 'border-white/30'
                  } rounded-lg text-white placeholder-transparent focus:outline-none focus:border-aqua-300 transition-all duration-300`}
                  placeholder="Your Name"
                  whileFocus={{ scale: 1.02 }}
                />
                <label className="absolute left-4 top-3 text-white/70 pointer-events-none transition-all duration-300 transform origin-left">
                  Your Name
                </label>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>
              
              {/* Email Field */}
              <div className="relative">
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/20 border ${
                    errors.email ? 'border-red-400' : 'border-white/30'
                  } rounded-lg text-white placeholder-transparent focus:outline-none focus:border-aqua-300 transition-all duration-300`}
                  placeholder="Your Email"
                  whileFocus={{ scale: 1.02 }}
                />
                <label className="absolute left-4 top-3 text-white/70 pointer-events-none transition-all duration-300">
                  Your Email
                </label>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>
              
              {/* Phone Field */}
              <div className="relative">
                <motion.input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/20 border ${
                    errors.phone ? 'border-red-400' : 'border-white/30'
                  } rounded-lg text-white placeholder-transparent focus:outline-none focus:border-aqua-300 transition-all duration-300`}
                  placeholder="Your Phone"
                  whileFocus={{ scale: 1.02 }}
                />
                <label className="absolute left-4 top-3 text-white/70 pointer-events-none transition-all duration-300">
                  Your Phone
                </label>
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.phone}
                  </motion.p>
                )}
              </div>
              
              {/* Service Selection */}
              <div className="relative">
                <label htmlFor="service" className="sr-only">Service Type</label>
                <motion.select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/20 border ${
                    errors.service ? 'border-red-400' : 'border-white/30'
                  } rounded-lg text-white focus:outline-none focus:border-aqua-300 transition-all duration-300 appearance-none`}
                  whileFocus={{ scale: 1.02 }}
                  aria-label="Select a service"
                >
                  <option value="" className="text-gray-800">Select a Service</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="text-gray-800">
                      {service}
                    </option>
                  ))}
                </motion.select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {errors.service && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.service}
                  </motion.p>
                )}
              </div>
              
              {/* Message Field */}
              <div className="relative">
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-3 bg-white/20 border ${
                    errors.message ? 'border-red-400' : 'border-white/30'
                  } rounded-lg text-white placeholder-transparent focus:outline-none focus:border-aqua-300 transition-all duration-300 resize-none`}
                  placeholder="Your Message"
                  whileFocus={{ scale: 1.02 }}
                />
                <label className="absolute left-4 top-3 text-white/70 pointer-events-none transition-all duration-300">
                  Your Message
                </label>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>
              
              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-pool-600 py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact