function MusicInput({ defaultValue,onChange}) {
  return (
      <>
          <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Input your code below</label>
          <textarea className="form-control" rows="15" defaultValue={defaultValue} onChange={ onChange} id="proc" ></textarea>
      </>
  );
}

export default MusicInput;