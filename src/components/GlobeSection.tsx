
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture, Text } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";
import { Sparkles } from "lucide-react";

const Pin = ({ position, flagEmoji }: { position: THREE.Vector3; flagEmoji: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  const pinHeight = 0.4;
  const pinHeadRadius = 0.15;
  
  useFrame(({ camera }) => {
    if (groupRef.current) {
      // Make the pin face the camera
      groupRef.current.lookAt(camera.position);
      // Add 90 degrees rotation to make the pin point outward from the globe
      groupRef.current.rotateX(Math.PI / 2);
    }
  });

  return (
    <group position={position} ref={groupRef}>
      {/* Pin head (circle) */}
      <mesh position={[0, pinHeight/2, 0]}>
        <circleGeometry args={[pinHeadRadius, 32]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      {/* Pin head outline */}
      <lineSegments position={[0, pinHeight/2, 0.001]}>
        <edgesGeometry args={[new THREE.CircleGeometry(pinHeadRadius, 32)]} />
        <lineBasicMaterial color="#E3492D" linewidth={1} />
      </lineSegments>
      {/* Pin body */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, pinHeight, 12]} />
        <meshStandardMaterial color="#E3492D" />
      </mesh>
      {/* Flag emoji text */}
      <Text
        position={[0, pinHeight/2, 0.01]}
        fontSize={0.15}
        anchorX="center"
        anchorY="middle"
      >
        {flagEmoji}
      </Text>
    </group>
  );
};

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  const earthTexture = useTexture('/earth-texture.jpg');

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
          
          float edge = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 8.0);
          color += vec3(0.5, 0.5, 0.5) * edge * 0.3;
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      transparent: true,
    });
  }, [earthTexture]);

  const languages = [
    { name: "Chinese", lat: 35.8617, lon: 104.1954, emoji: "🇨🇳" },
    { name: "Swedish", lat: 60.1282, lon: 18.6435, emoji: "🇸🇪" },
    { name: "Spanish", lat: 40.4637, lon: -3.7492, emoji: "🇪🇸" },
    { name: "Thai", lat: 15.87, lon: 100.9925, emoji: "🇹🇭" },
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
      <mesh ref={meshRef} material={globeMaterial}>
        <sphereGeometry args={[2, 64, 64]} />
      </mesh>

      {languages.map((lang) => {
        const position = convertLatLonToVector(lang.lat, lang.lon, 2.1);
        return (
          <Pin key={lang.name} position={position} flagEmoji={lang.emoji} />
        );
      })}
    </group>
  );
};

const GlobeSection = () => {
  const supportedLanguages = [
    "English",
    "Swedish",
    "Chinese",
    "Arabic",
    "Spanish",
    "French",
    "German",
    "Japanese",
    "Korean",
    "Russian",
    "Portuguese",
    "Italian",
    "Dutch",
    "Hindi",
    "Turkish",
  ];

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
          <div className="absolute inset-0 right-[320px]">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: true }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Globe />
                <Stars radius={100} depth={50} count={5000} factor={4} fade={true} />
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
          <div className="absolute right-0 top-0 bottom-0 w-[320px] p-6 space-y-4 bg-white/40 backdrop-blur-sm border-l border-white/10">
            <h3 className="text-2xl font-bold text-gray-900">We Support:</h3>
            <ul className="space-y-4">
              {supportedLanguages.map((language, index) => (
                <li key={index} className="flex items-center gap-3 animate-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="p-1 rounded-full bg-primary/10">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-700">{language}</span>
                </li>
              ))}
              <li className="flex items-center gap-3 animate-in" style={{ animationDelay: `${supportedLanguages.length * 100}ms` }}>
                <div className="p-1 rounded-full bg-primary/10">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">And every other language</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobeSection;
