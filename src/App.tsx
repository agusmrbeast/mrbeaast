import React, { useState, useEffect } from 'react';
import { Settings, Pickaxe } from 'lucide-react';
import Character from './components/Character';
import Config from './components/Config';
import Navbar from './components/Navbar';
import MiningScene from './components/MiningScene';
import TasksScene from './components/TasksScene';
import TokenInfoScene from './components/TokenInfoScene';
import FriendsScene from './components/FriendsScene';

function App() {
  const [coins, setCoins] = useState(0);
  const [miningRate, setMiningRate] = useState(0);
  const [currentScene, setCurrentScene] = useState('home');
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins(prevCoins => prevCoins + miningRate);
    }, 1000);
    return () => clearInterval(interval);
  }, [miningRate]);

  const handleCharacterClick = () => {
    const now = Date.now();
    if (now - lastClickTime > 3000) {
      setClickCount(0);
    }
    if (clickCount < 7) {
      setCoins(prevCoins => prevCoins + 100);
      setClickCount(prevCount => prevCount + 1);
      setLastClickTime(now);
    }
  };

  const renderScene = () => {
    switch (currentScene) {
      case 'mining':
        return <MiningScene coins={coins} setCoins={setCoins} miningRate={miningRate} setMiningRate={setMiningRate} />;
      case 'tasks':
        return <TasksScene coins={coins} setCoins={setCoins} />;
      case 'tokenInfo':
        return <TokenInfoScene setCurrentScene={setCurrentScene} />;
      case 'friends':
        return <FriendsScene coins={coins} setCoins={setCoins} />;
      default:
        return (
          <>
            <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-6 w-full mb-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <img src="public/images/tu_ruta_moneda_amarilla.png" alt="Coin" className="w-8 h-8 mr-2" />
                  <span className="text-3xl font-bold text-white">{coins.toFixed(2)}</span>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => setCurrentScene('tokenInfo')}
                    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Acerca del Token
                  </button>
                  <button onClick={() => setCurrentScene('config')} className="text-white">
                    <Settings />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center text-white text-sm mb-2">
                <Pickaxe size={16} className="mr-1" />
                <span>{Math.floor(miningRate * 3600)} monedas x hora</span>
              </div>
              <div onClick={handleCharacterClick}>
                <Character />
              </div>
              <p className="text-white text-center mt-2">{clickCount}/7 clicks</p>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {renderScene()}
      </div>
      <Navbar setCurrentScene={setCurrentScene} />
    </div>
  );
}

export default App;