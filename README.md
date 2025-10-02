# AquaClear Pool Services - Landing Page

A stunning React landing page for a pool cleaning service featuring advanced animations, 3D effects, and modern design.

## Features

- 🌊 **3D Water Ripple Effect** - Interactive Three.js water animation in hero section
- ✨ **Framer Motion Animations** - Smooth page transitions, scroll-triggered reveals, and micro-interactions
- 🎨 **Glassmorphism Design** - Modern glass-effect cards with backdrop blur
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🎯 **Interactive Elements** - Before/after image slider, floating action buttons
- 📝 **Contact Form** - Floating labels with smooth validation animations
- 🎭 **Performance Optimized** - Code splitting and lazy loading

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for Three.js

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pool-cleaning-service
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/           # React components
│   ├── Hero.jsx         # Hero section with 3D water effect
│   ├── WaterRipple.jsx  # Three.js water ripple component
│   ├── Services.jsx     # Services section with glassmorphism cards
│   ├── Features.jsx     # Features section with animations
│   ├── BeforeAfter.jsx  # Interactive before/after slider
│   ├── Testimonials.jsx # Customer testimonials
│   ├── Contact.jsx      # Contact form with validation
│   └── FloatingButtons.jsx # Floating action buttons
├── assets/              # Static assets
├── hooks/               # Custom React hooks
├── App.jsx             # Main App component
├── main.jsx            # Entry point
└── index.css           # Global styles and Tailwind config
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- `pool` colors - Primary blue tones
- `aqua` colors - Secondary teal tones

### Animations
Framer Motion animations can be adjusted in individual components:
- Scroll-triggered animations use `whileInView`
- Hover effects use `whileHover`
- Page transitions use `initial`, `animate`, and `exit`

### 3D Effects
Three.js water ripple shader can be modified in `WaterRipple.jsx`:
- Adjust wave frequency and amplitude
- Change colors and opacity
- Modify animation speed

## Performance Considerations

- 3D effects are optimized with LOD (Level of Detail)
- Components use lazy loading where appropriate
- Images should be optimized before deployment
- Consider using WebP format for better compression

## Browser Support

- Modern browsers with WebGL support for 3D effects
- Fallback handling for devices without WebGL
- Mobile-optimized touch interactions

## Contact Information

For the AquaClear Pool Services business:
- Phone: (555) 123-POOL
- Email: info@aquaclear.com
- Address: 1234 Poolside Drive, Miami, FL 33101
- Hours: Mon-Sat 7AM-6PM, Sun 9AM-4PM
- Emergency: 24/7 Emergency Service Available

## License

This project is created for portfolio purposes. Please modify the business information before using for a real business.