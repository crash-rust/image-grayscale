import React, { useState, useEffect, useRef } from 'react';
import './app.less';
import { grayscale } from '../pkg';

const App: React.FC = () => {
  const [source, setSource] = useState<string>('');
  const [graysource, setGraysource] = useState<string>('');
  const [time, setTime] = useState<number>(0);

  function handleFileChange(e) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onloadend = function (e) {
      setSource(e.target.result);
    };
  }

  useEffect(() => {
    if (source) {
      let sliceSource = (source as string).replace(
        /^data:image\/(png|jpeg|jpg);base64,/,
        ''
      );
      let start = new Date().getTime();
      let graySource = grayscale(sliceSource);
      let end = new Date().getTime();

      setGraysource(graySource);
      setTime(end - start);
      console.log('灰度耗时 =>', end - start);
    }
  }, [source]);

  return (
    <>
      <div className='bg fixed inset-y-0 -inset-x-2/4 opacity-50 z-0 bg-gradient-to-r from-yellow-400 to-pink-500'></div>
      <div className='bg fixed inset-y-0 -inset-x-2/4 opacity-50 z-0 bg-gradient-to-r from-yellow-400 to-pink-500'></div>
      <div className='bg fixed inset-y-0 -inset-x-2/4 opacity-50 z-0 bg-gradient-to-r from-yellow-400 to-pink-500'></div>
      <div className='flex items-center justify-center h-screen relative z-100'>
        <div className='bg-white bg-opacity-95 border shadow-lg p-10 text-center max-w-2xl'>
          <h1 className='text-4xl mb-8 font-bold'>一起来完成图片灰度吧～</h1>
          <p className='mb-4'></p>
          <label className='bg-green-600	text-white w-full p-6 block cursor-pointer font-bold mb-4'>
            <input
              type='file'
              id='upload'
              accept='.png'
              className='hidden'
              onChange={handleFileChange}
            />
            点击选择图片进行灰度
          </label>

          {graysource && (
            <>
              <div className='text-3xl mb-8'>
                图片灰度总耗时：{time + '毫秒'}
              </div>
              <div className='img-container'>
                <img id='old-img' src={source} />
                <img id='new-img' src={graysource} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
