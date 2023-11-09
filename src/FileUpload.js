import React, { useState } from 'react';

const App = () => {
  const [file, setFile] = useState(null);

  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch('your_upload_url_here', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log('Upload successful', result);
        })
        .catch((error) => {
          console.error('Upload error', error);
        });
    } else {
      console.error('No file selected for upload.');
    }
  };

  return (
    <div>
      <h2>File Uploading in ReactJs</h2>
      <form onSubmit={handleUpload}>
        <input type="file" name="file" onChange={handleFile} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default App;
