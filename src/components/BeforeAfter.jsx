import { useState } from 'react'
import { motion } from 'framer-motion'

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50)
  
  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value)
  }
  
  return (
    <section className="section-padding bg-gradient-to-b from-white to-pool-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            See the Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your green, cloudy pool into a crystal clear oasis with our professional cleaning services
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Container for before/after images */}
          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            {/* Before Image (Background) */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-600 to-green-800">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4 opacity-50">🤢</div>
                  <h3 className="text-2xl font-bold mb-2">BEFORE</h3>
                  <p className="text-lg opacity-90">Green, Algae-Filled Pool</p>
                </div>
              </div>
            </div>
            
            {/* After Image (Foreground with clip) */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-pool-400 via-pool-500 to-aqua-500 transition-all duration-300 ease-out"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="absolute inset-0 bg-white/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4 opacity-80">✨</div>
                  <h3 className="text-2xl font-bold mb-2">AFTER</h3>
                  <p className="text-lg opacity-90">Crystal Clear & Clean</p>
                </div>
              </div>
            </div>
            
            {/* Slider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-300 ease-out"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer"
                >
                  <div className="flex gap-1">
                    <div className="w-1 h-6 bg-gray-400"></div>
                    <div className="w-1 h-6 bg-gray-400"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Slider Input */}
          <div className="mt-8">
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>Before</span>
              <span>Drag to reveal</span>
              <span>After</span>
            </div>
          </div>
        </motion.div>
        
        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { step: '1', title: 'Assessment', desc: 'Evaluate pool condition', icon: '🔍' },
            { step: '2', title: 'Treatment', desc: 'Apply cleaning chemicals', icon: '⚗️' },
            { step: '3', title: 'Cleaning', desc: 'Remove debris & algae', icon: '🧽' },
            { step: '4', title: 'Balance', desc: 'Perfect water chemistry', icon: '⚖️' }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pool-500 to-aqua-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                {item.step}
              </div>
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #0ea5e9, #14b8a6);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #0ea5e9, #14b8a6);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  )
}

export default BeforeAfter