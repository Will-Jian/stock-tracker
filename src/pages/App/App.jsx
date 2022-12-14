import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import NavBar from '../../components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
    
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<LandingPage setUser={setUser} />} />
              <Route path="/favorites" element={<FavoritesPage user={user} setUser={setUser} />} />
              
            </Routes>
          
          </>
          :
          <AuthPage setUser={setUser} />
           
      }
    </main>
  );
}
