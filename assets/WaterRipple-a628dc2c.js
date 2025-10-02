import{r as e,P as v,u as s,j as n,D as c}from"./three-8157b017.js";const f=()=>{const o=e.useRef(),i=e.useRef(0),a=e.useMemo(()=>new v(20,20,100,100),[]),r=`
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
  `,l=`
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
  `,t=e.useMemo(()=>({uTime:{value:0}}),[]);return s(()=>{o.current&&(i.current+=.01,t.uTime.value=i.current)}),n.jsx("mesh",{ref:o,geometry:a,rotation:[-Math.PI*.3,0,0],position:[0,-2,0],children:n.jsx("shaderMaterial",{uniforms:t,vertexShader:r,fragmentShader:l,transparent:!0,side:c})})};export{f as default};
