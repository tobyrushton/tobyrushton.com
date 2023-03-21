'use client'

import * as THREE from 'three'
import React, { useRef } from 'react'
import { PerspectiveCamera, Text } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

const rotateX = 0.5
const rotateY = 0.002
interface props {
    position: [number, number, number]
}

const Icosahedron: React.FC<props> = ({ position }) => {
    const mesh = useRef<THREE.Mesh | null>(null)
    const edges = new THREE.EdgesGeometry(
        new THREE.IcosahedronGeometry(2, 0),
        15
    )

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x = mesh.current.rotation.y + rotateX
            mesh.current.rotation.y += rotateY
        }
    })

    return (
        <mesh position={position} ref={mesh}>
            <lineSegments geometry={edges}>
                <lineBasicMaterial
                    color="#404040"
                    opacity={0.75}
                    transparent
                    linewidth={2}
                />
            </lineSegments>
        </mesh>
    )
}

const ThreeBanner: React.FC = () => {
    return (
        <Canvas>
            <PerspectiveCamera
                makeDefault
                position={[0, 0, 4]}
                zoom={1}
                near={1}
                far={10}
                fov={40}
            />
            <Icosahedron position={[0, 0, 0]} />
            <Text scale={[0.6, 0.6, 0.6]} position={[0, 0, -0]}>
                tobyrushton
            </Text>
        </Canvas>
    )
}

export default ThreeBanner
