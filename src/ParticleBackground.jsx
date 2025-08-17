import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => setInit(true));
    }, []);

    if (!init) return null;

    return (
        <>
            {/* Nebula Layer */}
            <Particles
                id="nebula"
                className="absolute inset-0 -z-20"
                options={{
                    background: { color: { value: "#0d0d0d" } },
                    fpsLimit: 60,
                    particles: {
                        number: { value: 60, density: { enable: true, area: 1200 } },
                        color: {
                            value: ["#a855f7", "#ff6699", "#66ccff", "#facc15"],
                            animation: { enable: true, speed: 30, sync: false },
                        },
                        opacity: { value: 0.25, random: true, animation: { enable: true, speed: 0.6 } },
                        size: { value: { min: 10, max: 45 }, random: true },
                        move: {
                            enable: true,
                            speed: 0.7,
                            random: true,
                            direction: "none",
                            straight: false,
                            outModes: { default: "out" },
                        },
                        links: { enable: false },
                    },
                    detectRetina: true,
                }}
            />

            {/* Twinkling Star Layer */}
            <Particles
                id="stars"
                className="absolute inset-0 -z-10"
                options={{
                    fpsLimit: 60,
                    particles: {
                        number: { value: 500, density: { enable: true, area: 1200 } },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        opacity: {
                            value: 0.8,
                            random: { enable: true, minimumValue: 0.1 },
                            animation: { enable: true, speed: 2, minimumValue: 0.1, sync: false, random: true },
                        },
                        size: { value: { min: 0.2, max: 2 }, random: true },
                        move: {
                            enable: true,
                            speed: 0.6,
                            random: true,
                            straight: false,
                            outModes: { default: "out" },
                        },
                    },
                    detectRetina: true,
                }}
            />

            {/* Comet/Streak Layer */}
            <Particles
                id="comets"
                className="absolute inset-0 -z-5"
                options={{
                    fpsLimit: 60,
                    particles: {
                        number: { value: 20, density: { enable: false } },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        opacity: {
                            value: 0.9,
                            animation: { enable: true, speed: 5, minimumValue: 0.1, sync: false }
                        },
                        size: { value: { min: 0.5, max: 1.5 } },
                        move: {
                            enable: true,
                            speed: 8,
                            direction: "top-right",
                            straight: true,
                            random: false,
                            outModes: { default: "out" },
                        }
                    },
                    interactivity: { detectsOn: "canvas" },
                    detectRetina: true,
                }}
            />

        </>
    );
}
