import { useEffect, useState } from 'react';
import { carte } from './dati';
import './Card.css'
import ModaleVittoria from './ModaleVittoria';
import ModaleSconfitta from './ModaleSconfitta';

export default function Game() {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  const [carteRandom, setCarteRandom] = useState(carte);
  const [vittoria, setVittoria] = useState(false);
  const [sconfitta, setSconfitta] = useState(false);

  // Funzione per mescolare le carte
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Funzione chiamata quando una carta viene cliccata
  const gestisciClick = (index) => {
    const copiaCarte = [...carteRandom];
    const cartaCliccata = copiaCarte[index];
  
    if (!cartaCliccata.clicked) {
      cartaCliccata.clicked = true;
      shuffle(copiaCarte);
      setScore(score + 1);
      setCarteRandom(copiaCarte);

    } else {
      if (bestScore < score) {
        setSconfitta(true);
        setBestScore(score);
      } else {
        setSconfitta(true);
      }
    }
  };


  const resettaCarte = () => {
    const nuoveCarte = carte.map((carta) => ({ ...carta, clicked: false }));
    setCarteRandom(shuffle(nuoveCarte));
  };

  // Funzione chiamata quando si vince
  const gestisciVittoria = () => {
    setScore(0);
    setBestScore(0);
    setVittoria(false);
    resettaCarte()
  };

  // Funzione chiamata quando si perde
  const gestisciSconfitta = () => {
    setScore(0);
    setSconfitta(false);
    resettaCarte()
  };


  // useEffect per eseguire azioni quando lo stato di score cambia
  useEffect(() => {

    if (score === carteRandom.length) {
        setVittoria(true);
      }
    // Puoi inserire qui le azioni da eseguire quando lo stato di score cambia
    console.log("score è cambiato:", score);
  }, [score]);

  return (
    <div className="main">
      <div className="punteggi">
        <span className="bestScore">BestScore: {bestScore}</span>
        <span className="punteggio">Score: {score}</span>
      </div>

      {vittoria && <ModaleVittoria gestisciVittoria={() => gestisciVittoria()} />}

      {!vittoria && !sconfitta && (
        <div className="cardSpace">
          {carteRandom.map((carta, index) => (
            <div className="carta" key={carta.id} onClick={() => gestisciClick(index)}>
              <h3 className='nomeCarta'>{carta.nome}</h3>
              <img className='imgCarta' src={carta.img} alt={carta.nome} />
            </div>
          ))}
        </div>
      )}

      {sconfitta && <ModaleSconfitta gestisciSconfitta={() => gestisciSconfitta()} />}
    </div>
  );
}