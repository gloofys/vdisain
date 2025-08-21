
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const GlobalParticles = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
            }}
            options={{
                fullScreen: { enable: false },
                particles: {
                    number: { value: 180, density: { enable: true, value_area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5 },
                    size: { value: 2, random: true },
                    move: { enable: true, speed: 0.3 },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        onClick: { enable: true, mode: "repulse" },
                    },
                    modes: {
                        repulse: { distance: 100, duration: 0.4 },
                    },
                },
                retina_detect: true,
            }}
        />
    );
};

export default GlobalParticles;
