import React, { useRef, useState } from "react";

import { Canvas, useFrame } from "react-three-fiber";

import Thing from "./Thing.js";
import { render } from "react-dom";



function Home() {
    return (
        <div class="home">
            <section class="flag">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <perspectiveCamera position={[75, window.innerWidth / window.innerHeight, 0.1, 1000]} />
                    <Thing position={[0, 0, 0]} />
                    
                </Canvas>
                <p>Home page stuff</p>
            </section>
        </div>
    );

}
export default Home