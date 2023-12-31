import Particles from "react-particles";
import { loadFireworksPreset} from "tsparticles-preset-fireworks";
import { Typewriter } from 'react-simple-typewriter'
import { useState } from "react";
import Countdown from "react-countdown";
import Main from './Main';

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Bye 2023!", "Hitung mundur Tahun Baru", "2024"])

  const particlesInit = async(engine) => {
    await loadFireworksPreset(engine);
  }

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;
    return remainingTime;
  }

  return (
      <div>
        <Main />
        <div className="absolute top-0 left-0 w-full h-full z-40 bg-black">
        <Particles
            init={particlesInit}
            options={{
              background: {
                opacity: 0,
              },
              preset: "fireworks",
              fpsLimit: 60,
            }}
          />
        </div>
      
      <div className="flex flex-col justify-center items-center min-h-screen absolute top-0 left-0 w-full h-full">
        <span className="text-white text-4xl font-bold  px-4 z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"✨"}
            cursor
            
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown
            date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage(["Selamat", "Tahun", "Baru", "2024", "Happy New Year 2024!", "新年あけましておめでとうございます 2024", "새해 복 많이 받으세요 2024", "Wilujeng warsa enggal 2024", "Feliz Año Nuevo 2024", "Gelukkig Nieuwjaar 2024", "عام سعيد ۲۰۲٤ م"])}
          />
        </div>
      </div>
    </div>
  );
}

export default App;