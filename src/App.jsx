import React, { useState } from 'react';
import ClassComp from './ClassComp';
import FunkComp from './FunkComp';
import './App.css';

const App = () => {
  const [korunot, setKorunot] = useState(true);
  const [takeBackVisible, setTakeBackVisible] = useState(false);

  const onKill = () => {
    setKorunot(false);
    setTakeBackVisible(true);
  };

  const takeBack = () => {
    setKorunot(true);
    setTakeBackVisible(false);
  };

  return (
    <div className='container'>
      {korunot && <ClassComp onKill={onKill} />}
      <hr />
      {korunot && <FunkComp onKill={onKill} />}
      {takeBackVisible && <button onClick={takeBack}>Take back</button>}
    </div>
  );
};

export default App;
