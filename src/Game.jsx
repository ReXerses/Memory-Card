import { useState } from 'react';
import { carte } from './dati';
import './Card.css'

export default function Game () {
    const [bestScore, setBestScore] = useState(0);
    const [score, setScore] = useState(0);

    return (
        <div className="main">
            <div className="punteggi">
                <span className="bestScore">BestScore: {5+5}</span>
                <span className="punteggio">Score: {1}</span>
            </div>

            <div className="cardSpace">
                {carte.map((carta,index) => (
                      <div className="carta" key={carta.id} >
                        <h3 className='nomeCarta'>{carta.nome}</h3>
                        <img className='imgCarta' src={carta.img} alt={carta.nome} />
                      </div>
                ))}
            </div>
        </div>
    )
}