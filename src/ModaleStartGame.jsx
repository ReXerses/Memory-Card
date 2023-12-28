export default function ModaleStartGame ({gestisciIsStarted}) {

    return (
        <div className="finestraModale">
            <span>Click Play to start</span>
            <button onClick={gestisciIsStarted}  id="startGameBtn">Play</button>
        </div>
    )
}