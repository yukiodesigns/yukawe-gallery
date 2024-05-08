import './index.css';
import Title from './components/Title';
import Upload from './components/Upload';
import Image from './components/Image';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <Upload />
      <Image setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
