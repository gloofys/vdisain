import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import "../styles/components/Hero.scss";

const Hero = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    return (
        <section className="hero" id="home">
            {init && (
                <Particles
                    id="tsparticles"
                    options={{
                        particles: {
                            number: { value: 80, density: { enable: true, value_area: 800 } },
                            color: { value: "#ffffff" },
                            shape: { type: "circle" },
                            opacity: { value: 0.5 },
                            size: { value: 2, random: true },
                            move: { enable: true, speed: 0.7 },
                        },
                        interactivity: {
                            events: {
                                onhover: { enable: true, mode: "repulse" },
                                onclick: { enable: true, mode: "repulse" },
                                resize: true
                            },
                            modes: {
                                repulse: {
                                    distance: 150,
                                    duration: 0.6
                                },
                            },
                        },
                        retina_detect: true,
                    }}
                />
            )}

            <div className="hero__content">
                <h1>
                    Tõstame<br />
                    veebidisaini <span className="highlight">standardeid.</span>
                </h1>
                <div className="hero__buttons">
                    <a href="#projects" className="btn">Tehtud tööd</a>
                    <a href="#contact" className="btn btn--secondary">Kodulehe hooldus</a>
                </div>
            </div>

            <div className="hero__circle-text">
                <svg viewBox="0 0 300 300">
                    <path id="circlePath" d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0" />
                    <text>
                        <textPath href="#circlePath" startOffset="0%">
                            vDisain. Kastist välja mõtlemine.
                        </textPath>
                    </text>
                </svg>
                <button className="play-btn">▶</button>
            </div>
        </section>
    );
};

export default Hero;
