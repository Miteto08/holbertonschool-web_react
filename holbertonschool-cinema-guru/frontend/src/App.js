import React, { useState, useEffect } from 'react';
import './App.css';

// Placeholders pour les composants à venir
const Dashboard = () => <div>Dashboard</div>;
const Authentication = () => <div>Authentication</div>;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return;
    fetch('/api/auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.username) {
          setIsLoggedIn(true);
          setUserUsername(data.username);
        }
      })
      .catch(() => { });
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard /> : <Authentication />}
    </div>
  );
}

export default App;
