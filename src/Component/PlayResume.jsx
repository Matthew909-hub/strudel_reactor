function PlayResume({ onPlay,onStop}) {
    return (
        <>
            <h5 className="text-white text-center">Controls</h5>
            <div className="form-control btn-group" role="group" aria-label="Basic mixed styles example">
                <button id="play" className="form-control btn btn-success" onClick={onPlay}>Play</button>
                <button id="stop" className="form-control btn btn-danger" onClick={onStop}>Stop</button>
            </div>
        </>

  );
}

export default PlayResume;