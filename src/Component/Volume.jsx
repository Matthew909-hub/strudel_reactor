function Volume() {
  return (
      <>
          <div>
              <label htmlFor="volume range" className="form-label text-white">Adjust Music Volume</label>
              <input type="range" className="form-range" min="0" max="1" step="0.01" id="volume_range" />
          </div>
      </>
  );
}

export default Volume;