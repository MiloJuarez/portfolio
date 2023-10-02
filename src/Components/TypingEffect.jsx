import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setcurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setcurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;
};

export default TypingEffect;
