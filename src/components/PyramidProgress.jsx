import React from 'react';
import { levels } from '../gameData';
import './PyramidProgress.css';

const PyramidProgress = ({ currentLevelId }) => {
  // Maslow's pyramid visually is wider at the bottom
  // Levels in gameData are 1 to 5 (bottom to top)
  const reversedLevels = [...levels].reverse();

  return (
    <div className="pyramid-container glass">
      <div className="pyramid">
        {reversedLevels.map((level, index) => {
          const isActive = level.id === currentLevelId;
          const isCompleted = level.id < currentLevelId;
          const isLocked = level.id > currentLevelId;
          
          let stateClass = 'locked';
          if (isActive) stateClass = 'active';
          if (isCompleted) stateClass = 'completed';

          return (
            <div 
              key={level.id} 
              className={`pyramid-level level-${level.id} ${stateClass}`}
            >
              <div className="level-content">
                <level.icon size={20} className="level-icon" />
                <span className="level-title">{level.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PyramidProgress;
