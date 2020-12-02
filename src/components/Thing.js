import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

function Thing(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const clock = new THREE.Clock()
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        // mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        mesh.current.rotation.set(0,0,0)
        const time = clock.getElapsedTime()
        mesh.current.geometry.vertices.map(v => {
            const waveX1 = 0.5 * Math.sin(v.x * 2 + time)
            const waveX2 = 0.25 * Math.sin(v.x * 1 + time)
            const waveY1 = 0.1 * Math.sin(v.y * 5 + time * 0.5)
            const waveY2 = 0.75 * Math.sin(v.y * 2 + time * 0.5)
            v.z = waveX1 + waveX2 + waveY1 + waveY2
        })

        mesh.current.geometry.verticesNeedUpdate = true

    })
    return (
    <mesh
        {...props}
        ref={mesh}
        // scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        // onClick={(e) => setActive(!active)}
        // onPointerOver={(e) => setHover(true)}
        // onPointerOut={(e) => setHover(false)}>
        // width, height, width segments, height segments
    >
        <planeGeometry  args={[15, 15, 20, 20]} />
        {/* <meshBasicMaterial color={hovered ? 'hotpink' : 'orange'} side={'DoubleSide'} wireframe={true}/> */}
        <meshBasicMaterial color={'black'} side={'DoubleSide'} wireframe={true}/>

    </mesh>
    )
}

export default Thing