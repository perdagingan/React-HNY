import React, { useEffect, useState } from "react";
import vidbg from "./vidbg.mp4";
import firework from "./firework.mp3";

const Main = () => {
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  useEffect(() => {

    const handleUserInteraction = () => {
      setIsUserInteracted(true);
      document.removeEventListener("click", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    
    if (isUserInteracted) {
      const audioElement = document.getElementById("fireworkAudio");
      audioElement.play().catch((error) => console.error("Audio playback error:", error));
    }
  }, [isUserInteracted]);

  return (
    <div className="relative h-screen z-50">
      <video autoPlay loop muted className="object-scale-down w-full h-full brightness-50">
        <source src={vidbg} type="video/mp4" />
      </video>
      <audio id="fireworkAudio" autoPlay loop muted={isUserInteracted}>
        <source src={firework} type="audio/mpeg" />
       
      </audio>
    </div>
  );
};

export default Main;
