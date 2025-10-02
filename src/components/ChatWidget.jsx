import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! Welcome to AquaClear Pool Services! How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickReplies = [
    "I need a free quote",
    "Emergency pool service",
    "Schedule weekly cleaning",
    "Chemical balancing help",
    "Equipment repair"
  ]

  const botResponses = {
    "quote": "I'd be happy to provide you with a free quote! Please fill out our contact form below or call us at (555) 123-POOL for immediate assistance.",
    "emergency": "For emergency pool services, please call our 24/7 hotline at (555) 123-POOL. We're here to help with urgent pool issues!",
    "cleaning": "Our weekly pool cleaning service is just $120/month and includes skimming, vacuuming, and chemical testing. Would you like to schedule a consultation?",
    "chemical": "Chemical balancing is crucial for pool health! Our technicians can test and balance your pool chemicals for $45 per visit. Need immediate help?",
    "repair": "Our certified technicians can repair any pool equipment at $85/hour plus parts. What type of equipment needs attention?",
    "default": "Thanks for your message! For immediate assistance, please call us at (555) 123-POOL or use our contact form. One of our pool experts will get back to you soon!"
  }

  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return

    const newMessage = {
      id: messages.length + 1,
      text: text,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false)
      let responseKey = 'default'
      
      if (text.toLowerCase().includes('quote') || text.toLowerCase().includes('price')) {
        responseKey = 'quote'
      } else if (text.toLowerCase().includes('emergency') || text.toLowerCase().includes('urgent')) {
        responseKey = 'emergency'
      } else if (text.toLowerCase().includes('clean') || text.toLowerCase().includes('weekly')) {
        responseKey = 'cleaning'
      } else if (text.toLowerCase().includes('chemical') || text.toLowerCase().includes('balance')) {
        responseKey = 'chemical'
      } else if (text.toLowerCase().includes('repair') || text.toLowerCase().includes('equipment')) {
        responseKey = 'repair'
      }

      const botMessage = {
        id: messages.length + 2,
        text: botResponses[responseKey],
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    }, 1500)
  }

  const handleQuickReply = (reply) => {
    handleSendMessage(reply)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-pool-500 to-aqua-500 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          rotate: isOpen ? 180 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? '✕' : '💬'}
        </motion.span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-pool-500 to-aqua-500 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🏊‍♂️</span>
                </div>
                <div>
                  <h3 className="font-semibold">AquaClear Support</h3>
                  <p className="text-xs text-white/80">We typically reply instantly</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-pool-500 text-white rounded-br-sm'
                        : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 px-3 py-2 rounded-2xl rounded-bl-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">Quick replies:</p>
                <div className="flex flex-wrap gap-1">
                  {quickReplies.slice(0, 3).map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pool-500 focus:border-transparent text-sm"
                />
                <motion.button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="w-8 h-8 bg-pool-500 text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-sm">→</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification Badge */}
      {!isOpen && messages.length > 1 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-20 right-20 z-50 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
        >
          {messages.filter(m => m.sender === 'bot').length}
        </motion.div>
      )}
    </>
  )
}

export default ChatWidget