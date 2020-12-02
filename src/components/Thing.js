import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

function Thing(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        // mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        // const time = clock.getElapsedTime()

        mesh.current.rotation.set(0,0,0)
        mesh.current.geometry.vertices.map(v => {
            v.z = 0.5 * Math.sin(v.x * 2)
        })
    })
    return (
    <mesh
        {...props}
        ref={mesh}
        scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}>
        {/* width, height, width segments, height segments */}
        <planeGeometry  args={[15, 15, 20, 20]} />
        <meshBasicMaterial color={hovered ? 'hotpink' : 'orange'} side={'DoubleSide'} wireframe={true}/>
    </mesh>
    )
}

export default Thing