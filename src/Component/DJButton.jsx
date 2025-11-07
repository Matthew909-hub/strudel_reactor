function DJButton() {
    return (
        <>
            <div className="input-group mb-3">
                <div className="row">
                    <div className="col">
                        <label htmlFor="cpm_text_input" className="form-label text-white">CPM Adjust</label>
                    </div>
                    <input type="text" className="form-control" id="cpm_text_input" placeholder="120" aria-label="Username" aria-describedby="cpm_label" />
                </div>
            </div>

            <div>
                <label htmlFor="volume range" className="form-label text-white">Adjust Music Volume</label>
                <input type="range" className="form-range" min="0" max="1" step="0.01" id="volume_range" />
            </div>

            <h5 className="text-white text-center">Instruments</h5>
            <div className="form-check">
                <input className="btn-check" type="checkbox" value="" id="bassline"/>
                <label className="btn text-white" htmlFor="bassline">
                    Baseline
                </label>
            </div>
            <br/>
            <div className="form-check">
                <input className="btn-check" type="checkbox" value="" id="drums" />
                <label className="btn text-white" htmlFor="drums">
                    Drums
                </label>
            </div>
            <br/>
            <div className="form-check">
                <input className="btn-check" type="checkbox" value="" id="drums2" />
                <label className="btn text-white" htmlFor="drums2">
                    Drums2
                </label>
            </div>


        </>
  );
}

export default DJButton;