/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef, use } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("black");
  const [text,setText] = useState("black");
  const [textColor,setTextColor] = useState("black");

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "black",
    "white",
  ];

  function randomColorsArray(arr) {
    return [...arr].sort(() => 0.5 - Math.random());
  }

  const shuffledRef = useRef(randomColorsArray(colors));
  const shuffledTextRef = useRef(randomColorsArray(colors));
  const shuffledTextRandomCol = useRef(randomColorsArray(colors));

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= shuffledRef.current.length) {
        clearInterval(interval);
        return;
      }
      setBgColor(shuffledRef.current[i]);
      setText(shuffledTextRef.current[i]);
      setTextColor(shuffledTextRandomCol.current[i]);
      i++;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return(
    <>
    <div className="w-full h-screen flex justify-center items-center">
        <h1 style={{ color: textColor }} className="text-4xl md:text-6xl font-extrabold text-transparent 
           drop-shadow-lg tracking-wide capitalize">{text}</h1>
    </div>
    </>
  );
}

export default App;
