export default function ModaleSconfitta ({gestisciSconfitta}) {

    return (
        <div className="finestraModale">
            <span>You lost your...</span>
            <button onClick={gestisciSconfitta}  id="startGameBtn">Retry</button>
        </div>
    )
}