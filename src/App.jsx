import { useState, useEffect } from 'react'
import './App.css'
import Footer from './Footer';
import Header from './Header';
import { carte } from './assets/dati';


function App() {
  const [isPlaying, setIsPlaying] = useState (true);

  useEffect(() => {
    // Una volta che la pagina è stata caricata
    const audioElement = document.getElementById('myAudio');
    audioElement.play();
    if (audioElement) {
      audioElement.volume = 0.1; // volume va da 0.0 a 1.0
    }

    if(!isPlaying) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  }, [isPlaying]);

  function gestisciIsPlaying () {
    setIsPlaying(!isPlaying);
  }

  return (
    <>
      <Header isPlaying={isPlaying}  gestisciIsPlaying={() => setIsPlaying(!isPlaying)} />

      <audio autoPlay loop id="myAudio">
        <source src="/sound.mp3" type="audio/mp3" />
        Il tuo browser non supporta l'elemento audio.
      </audio>
      <video autoPlay muted loop id="myVideo">
        <source src="/background.mp4" type="video/mp4" />
      </video>
      
      <Footer/>
    </>
  );
}

export default App;

