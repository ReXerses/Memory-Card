import { useState, useEffect } from 'react'
import './App.css'
import Footer from './Footer';
import Header from './Header';
import ModaleStartGame from './ModaleStartGame';
import Game from './Game';


function App() {
  const [isPlaying, setIsPlaying] = useState (true);
  const [isStarted, setIsStarted] = useState (false);

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

      {(!isStarted) ?
        <ModaleStartGame gestisciIsStarted= {() => setIsStarted(!isStarted)} />
      
      : 
        <Game />
      }
      
      <Footer/>
    </>
  );
}

export default App;

