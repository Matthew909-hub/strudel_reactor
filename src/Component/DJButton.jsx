function DJButton() {
    return (
        <>
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