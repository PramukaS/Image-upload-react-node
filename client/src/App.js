import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [file, setfile] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    axios.post("http://localhost:3001/images/upload", formData, config).then((response) => {
      alert('Image upload Successfull');
    }).catch((err) => {
      console.log('err', err);
    })
  };

  const onInputChange = (e) => {
    setfile(e.target.files[0])
  };



  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <h1>Simple File Upload</h1>
        <input type='text' name='imageName' /><br />
        <input type='file' name='photo' onChange={onInputChange} />
        <button type='submit'> Upload </button>
      </form>
    </div>
  );
}

export default App;
