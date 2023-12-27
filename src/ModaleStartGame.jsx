export default function ModaleStartGame ({gestisciIsStarted}) {

    return (
        <div className="finestraModale">
            <span>Clicca Play per iniziare</span>
            <button onClick={gestisciIsStarted}  id="startGameBtn">Play</button>
        </div>
    )
}