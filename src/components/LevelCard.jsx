import React, { useState, useEffect } from 'react';
import './LevelCard.css';

const LevelCard = ({ level, scenario, onOptionSelect }) => {
  const [animateState, setAnimateState] = useState('animate-fade-in');

  // When level changes, trigger fade in again
  useEffect(() => {
    setAnimateState('');
    setTimeout(() => {
      setAnimateState('animate-fade-in');
    }, 10);
  }, [level.id]);

  const handleOptionClick = (option) => {
    onOptionSelect(option);
  };

  const shuffledOptions = React.useMemo(() => {
    return [...scenario.options].sort(
      () => Math.random() - 0.5
    );
  }, [scenario]);

  return (
    <div className={`level-card glass ${animateState}`}>
      <div className="level-header">
        <level.icon className="level-header-icon" size={32} />
        <h2>Nivel {level.id}: {level.title}</h2>
      </div>
      
      <div className="level-body">
        <p className="description">{scenario.description}</p>
        <p className="question">{scenario.question}</p>
      </div>

      <div className="level-options">
        {shuffledOptions.map((option, index) => (
          <button 
            key={index} 
            className="glass-btn option-btn"
            onClick={() => handleOptionClick(option)}
          >
            <span className="option-letter">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="option-text">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelCard;
