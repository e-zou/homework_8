import React, { useRef, useState } from "react";

import { Canvas, useFrame } from "react-three-fiber";

import SplashObject from "./SplashObject.js";
import { render } from "react-dom";
import ProjectCard from "./ProjectCard.js";

// Styling
import '../styles/Home.css';

// project images
import p1 from '../images/project-kst.png';
import p2 from '../images/project-hack.png';
import p3 from '../images/project-muddy-paws.png';
import p4 from '../images/project-dashboard.png';


// Home Page items
function Home({ projectcard }) {
    return (
        <div class="home flex flex-d-col center">
            <div class="flag flex center">
                <div class="flag-title flex center flex-d-col">
                    <h1 class="h1-splash">
                        Emily Zou
                    </h1>
                    <h2 class="h2-splash">
                        aspiring UX researcher who seeks to <br/> always grow and learn
                    </h2>
                </div>
                <Canvas class="flag-bg">
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <perspectiveCamera position={[75, window.innerWidth / window.innerHeight, 0.1, 1000]} />
                    <SplashObject position={[0, 0, 0]} />
                </Canvas>
               
            </div>
            <section class="projects" id="#projects">
                <h3>
                    Projects
                </h3>
                <div class="projects-row flex flex-d-row space-between">
                    <ProjectCard 
                        imgLink={p1}
                        title="Kelly Strayhorn"
                        tags={['user research', 'project management']}
                        link={process.env.PUBLIC_URL + '/project-kst'}
                    />
                    <ProjectCard 
                        class="hi"
                        imgLink={p2}
                        title="Hack to the Future"
                        tags={['leadership', 'product thinking', 'visual design']} 
                        link={process.env.PUBLIC_URL + '/project-hack'}
                    />
                </div>
                <div class="projects-row flex flex-d-row space-between">
                    <ProjectCard 
                        imgLink={p3}
                        title="Muddy Paws Adventure"
                        tags={['front-end dev','react']} 
                    />
                    <ProjectCard 
                        imgLink={p4}
                        title="Adidas Dashboard"
                        tags={['user research', 'rapid prototyping', 'interaction design']} 
                    />
                </div>
            </section>
        </div>
    );

}
export default Home