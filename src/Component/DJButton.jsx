function DJButton() {
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="cpm_label">setcpm</span>
                <input type="text" className="form-control" id="cpm_text_inbput" placeholder="120" aria-label="Username" aria-describedby="cpm_label"/>
            </div>
            <div>
                <label htmlFor="volume range" className="form-label text-white">Adjust Music Volume</label>
                <input type="range" className="form-range" min="0" max="1" step="0.01" id="volume_range" />
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="bassline"/>
                <label className="form-check-label text-white" htmlFor="bassline">
                    Baseline
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="drums" />
                <label className="form-check-label text-white" htmlFor="drums">
                    Drums
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="drums2" />
                <label className="form-check-label text-white" htmlFor="drums2">
                    Drums2
                </label>
            </div>


        </>
  );
}

export default DJButton;