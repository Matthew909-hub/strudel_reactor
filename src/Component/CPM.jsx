function CPM() {
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
      </>
  );
}

export default CPM;