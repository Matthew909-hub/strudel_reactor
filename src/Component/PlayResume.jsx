function PlayResume({ onPlay,onStop}) {
    return (
        <>
            <div className="form-control btn-group" role="group" aria-label="Basic mixed styles example">
                <button id="play" className="form-control btn btn-outline-success" onClick={onPlay}>Play</button>
                <button id="stop" className="form-control btn btn-outline-danger" onClick={onStop}>Stop</button>
            </div>
        </>

  );
}

export default PlayResume;