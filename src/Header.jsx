export default function Header ({isPlaying, gestisciIsPlaying}) {

    return (
        <h1 className='title' >Lovecraftian Memory Card Game 
            <button onClick={gestisciIsPlaying} id='volumeBtn' 
                className={(isPlaying) ? 'volumeOn' : 'volumeOff'}>
            </button> 
        </h1>
    )
}