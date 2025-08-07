import React, { useEffect, useState } from "react";
import "../styles/components/RotatingHeadline.scss";

const RotatingHeadline = ({
                              staticText = "Tõstame",
                              rotatingWords,
                              interval = 2500,
                          }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const loop = setInterval(() => {
            setIndex((prev) => (prev + 1) % rotatingWords.length);
        }, interval);

        return () => clearInterval(loop);
    }, [rotatingWords, interval]);

    return (
        <h1 className="rotating-headline">
            <span className="rotating-headline__prefix">{staticText}<br /></span>
            <span className="rotating-headline__words">
        {rotatingWords.map((word, i) => (
            <span
                key={i}
                className={`rotating-headline__word ${
                    i === index ? "active" : "inactive"
                }`}
            >
            {word}
          </span>
        ))}
      </span>
            <span className="highlight">standardeid.</span>
        </h1>
    );
};

export default RotatingHeadline;