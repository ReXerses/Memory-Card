export default function ModaleVittoria ({gestisciVittoria}) {

    return (
        <div className="finestraModale">
            <span>You won!</span>
            <button onClick={gestisciVittoria}  id="startGameBtn">Restart</button>
        </div>
    )
}