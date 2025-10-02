import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const WaterRipple = () => {
  const meshRef = useRef()
  const timeRef = useRef(0)
  
  // Create geometry with vertices for wave animation
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(20, 20, 100, 100)
    return geo
  }, [])
  
  // Vertex shader for water ripple effect
  const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying float vElevation;
    
    void main() {
      vUv = uv;
      
      float elevation = sin(position.x * 0.3 + uTime * 2.0) * 0.1;
      elevation += sin(position.y * 0.2 + uTime * 1.5) * 0.1;
      elevation += sin(position.x * 0.5 + position.y * 0.4 + uTime * 3.0) * 0.05;
      
      vElevation = elevation;
      
      vec3 newPosition = position;
      newPosition.z += elevation;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `
  
  // Fragment shader for water appearance
  const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying float vElevation;
    
    void main() {
      vec3 color1 = vec3(0.055, 0.647, 0.910); // Pool blue
      vec3 color2 = vec3(0.078, 0.722, 0.651); // Aqua
      vec3 color3 = vec3(0.031, 0.290, 0.628); // Deep blue
      
      float mixValue = sin(vUv.x * 10.0 + uTime) * 0.5 + 0.5;
      vec3 color = mix(color1, color2, mixValue);
      color = mix(color, color3, vElevation * 2.0 + 0.5);
      
      float alpha = 0.4 + vElevation * 0.3;
      
      gl_FragColor = vec4(color, alpha);
    }
  `
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 }
  }), [])
  
  useFrame(() => {
    if (meshRef.current) {
      timeRef.current += 0.01
      uniforms.uTime.value = timeRef.current
    }
  })
  
  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI * 0.3, 0, 0]} position={[0, -2, 0]}>
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default WaterRipple