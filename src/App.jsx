import { useState, useEffect } from 'react'
import './App.css'


function App() {
  useEffect(() => {
    // Una volta che la pagina è stata caricata
    const audioElement = document.getElementById('myAudio');
    if (audioElement) {
      audioElement.volume = 0.1; // Imposta il volume desiderato (da 0.0 a 1.0)
    }
  }, []);

  return (
    <>
      <h1 className='title' >Lovecraftian Memory Card Game</h1>
      <audio autoPlay loop id="myAudio">
        <source src="/sound.mp3" type="audio/mp3" />
        Il tuo browser non supporta l'elemento audio.
      </audio>
      <video autoPlay muted loop id="myVideo">
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <footer>

        <a href="https://github.com/ReXerses" target="_blank">
            <img src="/github.svg" alt="Personal Github link"/>
        </a>
        <a class='nome-github' href="https://github.com/ReXerses" target="_blank">ReXerses</a>

      </footer>
    </>
  );
}

export default App;

