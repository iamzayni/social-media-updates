function UploadForm() {
  return (
    <form>
      <label htmlFor="caption">Caption</label>
      <input id="caption" name="caption" type="text" placeholder="Enter a caption" />
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadForm;
