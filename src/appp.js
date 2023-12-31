import React from 'react';
import Particles from 'react-particles-js';
import Main from './Main'; // Import your Main component

function App() {
  // Your existing code...

  return (
    <div style={{ position: 'relative' }}>
      <Main /> {/* Your Main component with the video background */}

      {isFireworksTime && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 100 }}>
          <Particles 
            init={particlesInit}
            options={{
              preset: "fireworks",
              particles: {
                background: {
                  color: {
                    value: "transparent",
                  },
                },
                number: {
                  value: 10, // Adjust the number of particles
                },
                // Your existing code...
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;