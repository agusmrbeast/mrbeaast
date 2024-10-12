import React from 'react';
import { Instagram, Youtube, Twitter } from 'lucide-react';

interface TasksSceneProps {
  coins: number;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
}

const TasksScene: React.FC<TasksSceneProps> = ({ coins, setCoins }) => {
  const handleTaskCompletion = (points: number) => {
    setCoins(prevCoins => prevCoins + points);
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold text-white mb-4">Tareas Diarias</h2>
      <div className="space-y-4">
        <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Instagram className="text-pink-500 mr-2" />
              <span className="text-white">Seguir en Instagram</span>
            </div>
            <button 
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleTaskCompletion(200)}
            >
              +200 puntos
            </button>
          </div>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Youtube className="text-red-500 mr-2" />
              <span className="text-white">Suscribirse en YouTube</span>
            </div>
            <button 
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleTaskCompletion(250)}
            >
              +250 puntos
            </button>
          </div>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Twitter className="text-blue-400 mr-2" />
              <span className="text-white">Seguir en X (Twitter)</span>
            </div>
            <button 
              className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleTaskCompletion(180)}
            >
              +180 puntos
            </button>
          </div>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-white">Configurar clave USDT BEP20</span>
            <button 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleTaskCompletion(300)}
            >
              +300 puntos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksScene;