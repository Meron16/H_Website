import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function NetworkCore() {
  const group = useRef<THREE.Group>(null)
  const points = useMemo(() => {
    const arr: THREE.Vector3[] = []
    for (let i = 0; i < 48; i++) {
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 4.2,
        (Math.random() - 0.5) * 3.2,
        (Math.random() - 0.5) * 3.2,
      )
      arr.push(v)
    }
    return arr
  }, [])

  const lineGeo = useMemo(() => {
    const positions: number[] = []
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 1.55) {
          positions.push(points[i].x, points[i].y, points[i].z, points[j].x, points[j].y, points[j].z)
        }
      }
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    return geo
  }, [points])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = t * 0.12
    group.current.rotation.x = Math.sin(t * 0.2) * 0.12
  })

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshStandardMaterial
          color="#936dff"
          emissive="#6941c6"
          emissiveIntensity={0.55}
          metalness={0.35}
          roughness={0.25}
          wireframe
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial color="#b79cff" emissive="#936dff" emissiveIntensity={0.8} roughness={0.2} />
      </mesh>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshStandardMaterial color="#ffffff" emissive="#936dff" emissiveIntensity={0.6} />
        </mesh>
      ))}
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#936dff" transparent opacity={0.35} />
      </lineSegments>
      <Sparkles count={40} scale={6} size={2} speed={0.35} color="#b79cff" />
    </group>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.75]}>
        <color attach="background" args={['#0b0714']} />
        <ambientLight intensity={0.55} />
        <pointLight position={[4, 3, 5]} intensity={40} color="#936dff" />
        <pointLight position={[-4, -2, 2]} intensity={20} color="#6941c6" />
        <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.7}>
          <NetworkCore />
        </Float>
      </Canvas>
    </div>
  )
}
