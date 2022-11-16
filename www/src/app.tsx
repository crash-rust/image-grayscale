import React, { useState, useEffect } from 'react';
import './app.less';
import { say } from '../pkg';

const App: React.FC = () => {
  const [source, setSource] = useState<string>('');

  function handleFileChange(e) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = function (e) {
      setSource(
        (e.target.result as string).replace('data:image/jpeg;base64,', '')
      );
    };
  }

  useEffect(() => {
    if (source) {
      /**
       * const result = rust-grayScaleImage(source)
       *  const img = document.createElement('img');
       * img.src = e.target.result as string;
       * img.style.width = '500px';
       * img.style.height = '500px';
       * const root = document.querySelector('#root');
       * root.appendChild(img);
       */
      say(source);
    }
  }, [source]);

  return (
    <div className='image-grayscale'>
      <input type='file' onChange={handleFileChange} />
    </div>
  );
};

export default App;
