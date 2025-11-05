function DJButton() {
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="cpm_label">Tempo</span>
                <input type="text" class="form-control" id="cpm_text_inbput" placeholder="120" aria-label="Username" aria-describedby="cpm_label"/>
            </div>
            <div>
                <label for="volume range" className="form-label text-white">Adjust Music Volume</label>
                <input type="range" className="form-range" min="0" max="1" step="0.01" id="volume_range" />
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="bassline"/>
                <label className="form-check-label text-white" for="bassline">
                    Baseline
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="drums" />
                <label className="form-check-label text-white" for="drums">
                    Drums
                </label>
            </div>
            <div className="form-check">
                <input className="btn-check" type="checkbox" value="" id="drums2" autocomplete="off" />
                <label className="btn text-white" for="drums2">
                    Drums 2
                </label>
            </div>


        </>
  );
}

export default DJButton;