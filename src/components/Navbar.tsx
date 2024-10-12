import React from 'react';
import { Home, Pickaxe, Users, ClipboardList } from 'lucide-react';

interface NavbarProps {
  setCurrentScene: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentScene }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white p-4">
      <ul className="flex justify-around">
        <li>
          <button className="text-blue-900 flex flex-col items-center" onClick={() => setCurrentScene('home')}>
            <Home />
            <span className="text-xs mt-1">Inicio</span>
          </button>
        </li>
        <li>
          <button className="text-blue-900 flex flex-col items-center" onClick={() => setCurrentScene('mining')}>
            <Pickaxe />
            <span className="text-xs mt-1">Minería</span>
          </button>
        </li>
        <li>
          <button className="text-blue-900 flex flex-col items-center" onClick={() => setCurrentScene('tasks')}>
            <ClipboardList />
            <span className="text-xs mt-1">Tareas</span>
          </button>
        </li>
        <li>
          <button className="text-blue-900 flex flex-col items-center" onClick={() => setCurrentScene('friends')}>
            <Users />
            <span className="text-xs mt-1">Amigos</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;