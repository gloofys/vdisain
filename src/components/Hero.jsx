import React from "react";
import RotatingHeadline from "./RotatingHeadline";
import GlobalParticles from "./GlobalParticles";
import Header from "./Header";
import "../styles/components/Hero.scss";

const Hero = () => {
    return (
        <div className="hero-section-wrapper">

            <GlobalParticles />
            <Header />

            <section className="hero" id="home">

                <div className="hero__slideshow" aria-hidden="true">
                    <span className="hero__slide"></span>
                    <span className="hero__slide"></span>
                    <span className="hero__slide"></span>
                </div>

                <div className="hero__content">
                    <div className="hero__panel">
                        <RotatingHeadline
                            rotatingWords={[
                                "veebilahenduste",
                                "veebidisaini",
                                "veebiarenduse",
                                "digiturunduse",
                            ]}
                        />
                        <div className="hero__buttons">
                            <a href="#projects" className="btn">
                                Tehtud tööd
                            </a>
                            <a href="#contact" className="btn btn--secondary">
                                Kodulehe hooldus
                            </a>
                        </div>

                        <div className="hero__circle-text">
                            <svg viewBox="0 0 300 300">
                                <path
                                    id="circlePath"
                                    d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                                />
                                <text>
                                    <textPath href="#circlePath" startOffset="0%">
                                        vDisain. Kastist välja mõtlemine.
                                    </textPath>
                                </text>
                            </svg>
                            <button className="play-btn">▶</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
