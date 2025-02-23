import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Load earth texture
  const earthTexture = useTexture('/earth-texture.jpg');

  // Custom shader material for the globe outline effect
  const globeMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        globeTexture: { value: earthTexture },
        time: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D globeTexture;
        uniform float time;
        varying vec2 vUv;
        varying vec3 vNormal;
        
        void main() {
          vec4 texColor = texture2D(globeTexture, vUv);
          vec3 color = texColor.rgb;
          
          // Add thin gray border
          float edge = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 8.0);
          color += vec3(0.5, 0.5, 0.5) * edge * 0.3;
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      transparent: true,
    });
  }, [earthTexture]);

  // Language coordinates (approximate)
  const languages = [
    { name: "Chinese", lat: 35.8617, lon: 104.1954, color: "#DE2910" }, // China
    { name: "Swedish", lat: 60.1282, lon: 18.6435, color: "#006AA7" }, // Sweden
    { name: "Spanish", lat: 40.4637, lon: -3.7492, color: "#F1BF00" }, // Spain
    { name: "Thai", lat: 15.87, lon: 100.9925, color: "#00247D" }, // Thailand
  ];

  const convertLatLonToVector = (lat: number, lon: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  };

  useFrame((state) => {
    if (meshRef.current) {
      globeMaterial.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <group>
      {/* Globe sphere */}
      <mesh ref={meshRef} material={globeMaterial}>
        <sphereGeometry args={[2, 64, 64]} />
      </mesh>

      {/* Language points */}
      {languages.map((lang) => {
        const position = convertLatLonToVector(lang.lat, lang.lon, 2.1);
        return (
          <group key={lang.name} position={position}>
            <mesh>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial
                color={lang.color}
                emissive={lang.color}
                emissiveIntensity={0.5}
              />
            </mesh>
            <pointLight color={lang.color} intensity={0.5} distance={1} />
          </group>
        );
      })}
    </group>
  );
};

const GlobeSection = () => {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn Any Language in the{" "}
            <span className="text-gradient">World</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI supports learning any language, with specialized expertise in
            numerous world languages
          </p>
        </div>

        <div className="relative h-[600px] w-full rounded-xl overflow-hidden glass">
          <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ antialias: true }}
          >
       
            <Suspense fallback={null}> 

            <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Globe />
              <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                fade={true}
              />
              <OrbitControls 
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.5}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.5}
              /> 
            </Suspense>
          </Canvas>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {["Chinese", "Swedish", "Spanish", "Thai"].map((language) => (
            <div
              key={language}
              className="glass p-4 rounded-lg text-center hover-lift"
            >
              <p className="font-semibold text-gray-900">{language}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobeSection;
