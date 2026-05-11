// src/App.jsx
import React, { useState, useEffect } from 'react';
import { levels } from './gameData';
import PyramidProgress from './components/PyramidProgress';
import LevelCard from './components/LevelCard';
import './App.css';
import { AlertTriangle, CheckCircle, RefreshCcw, Trophy, Heart, Skull } from 'lucide-react';

function App() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [feedback, setFeedback] = useState(null); // { type: 'error' | 'success', message: '' }
  const [gameCompleted, setGameCompleted] = useState(false);
  const [shakeCard, setShakeCard] = useState(false);

  const currentLevel = levels[currentLevelIndex];
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  // src/App.jsx

  const handleOptionSelect = (option) => {
    if (option.isCorrect) {
      setFeedback({ type: 'success', message: option.successMessage });
      
      setTimeout(() => {
        setFeedback(null);
        if (currentLevelIndex < levels.length - 1) {
          setCurrentLevelIndex(prev => prev + 1);
        } else {
          setGameCompleted(true);
        }
      }, 2000);
    } else {
      // LÓGICA DE VIDAS: Restamos una vida
      const newLives = lives - 1;
      setLives(newLives);
      
      if (newLives <= 0) {
        // Si llega a 0, activamos Game Over
        setGameOver(true);
      } else {
        // Si aún tiene vidas, mostramos el error normal
        setFeedback({ type: 'error', message: option.failMessage });
        setShakeCard(true);
        setTimeout(() => setShakeCard(false), 500);
      }
    }
  };

  const handleRetry = () => {
    setFeedback(null);
  };

// src/App.jsx

  const handleRestartGame = () => {
    setCurrentLevelIndex(0);
    setGameCompleted(false);
    setGameOver(false); // Resetear Game Over
    setLives(3);        // Resetear Vidas
    setFeedback(null);
  };

// src/App.jsx

return (
  <div className="app-container">
    <div className="layout-grid">
      {/* Left Side - Pyramid */}
      <div className="pyramid-section">
        <PyramidProgress currentLevelId={gameCompleted ? 6 : currentLevel.id} />
      </div>

      {/* Right Side - Game Interface */}
      <div className="game-section">
        
        {/* === COLOCA EL CÓDIGO AQUÍ === */}
        <div className="lives-container glass">
          {[...Array(3)].map((_, i) => (
            <Heart 
              key={i} 
              size={24} 
              fill={i < lives ? "var(--secondary)" : "transparent"} 
              color={i < lives ? "var(--secondary)" : "var(--text-secondary)"}
              className={i < lives ? "heart-active" : "heart-lost"}
            />
          ))}
        </div>
        {/* ============================== */}

        {gameOver ? (
    <div className="glass error-card animate-fade-in">
      <Skull size={64} className="error-icon" />
      <h2>¡Game Over!</h2>
      <p>No lograste sobrevivir a los desafíos de la isla. Recuerda que en la Pirámide de Maslow, no puedes descuidar tus bases.</p>
      <button className="glass-btn primary mt-4" onClick={handleRestartGame}>
        <RefreshCcw size={18} />
        Intentar de nuevo
      </button>
    </div>
    ):gameCompleted ? (
          <div className="glass completion-card animate-fade-in">
            <Trophy size={64} className="trophy-icon" />
            <h2>¡Autorrealización Alcanzada!</h2>
            <p>Has tomado las decisiones correctas, cubriendo cada necesidad en orden, y has alcanzado la cima de la pirámide de Maslow.</p>
            <button className="glass-btn primary mt-4" onClick={handleRestartGame}>
              <RefreshCcw size={18} />
              Volver a Jugar
            </button>
          </div>
        ) : feedback?.type === 'error' ? (
          <div className={`glass error-card animate-fade-in ${shakeCard ? 'animate-shake' : ''}`}>
            <AlertTriangle size={48} className="error-icon" />
            <h2>Necesitas cubrir esto primero</h2>
            <p>{feedback.message}</p>
            <button className="glass-btn primary mt-4" onClick={handleRetry}>
              <RefreshCcw size={18} />
              Reintentar Nivel
            </button>
          </div>
        ) : feedback?.type === 'success' ? (
          <div className="glass success-card animate-fade-in">
            <CheckCircle size={48} className="success-icon" />
            <h2>¡Correcto!</h2>
            <p>{feedback.message}</p>
          </div>
        ) : (
          <LevelCard 
            level={currentLevel} 
            onOptionSelect={handleOptionSelect} 
          />
        )}
      </div>
    </div>
  </div>
);
}
export default App;
