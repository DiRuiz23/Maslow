import React from 'react';
import { levels } from '../gameData';
import './PyramidProgress.css';

// Paths SVG de cada icono Lucide usado en gameData
const ICON_PATHS = {
  Droplets: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
  Shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  Users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  Award: "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.21 13.89L7 23l5-3 5 3-1.21-9.12",
  Zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
};

const PyramidProgress = ({ currentLevelId }) => {
  const visualLevels = [...levels].reverse();

  const centerX = 220;
  const levelHeight = 58;
  const gap = 6;
  const slope = 34;
  const total = visualLevels.length;

  return (
    <div className="pyramid-container">
      <div className="pyramid-card">
        <svg viewBox="0 0 520 400" className="pyramid-svg">
          <g transform="translate(0, 30)">
            {visualLevels.map((level, index) => {
              const state =
                level.id === currentLevelId ? 'active' :
                level.id < currentLevelId ? 'completed' : 'locked';

              const y1 = index * (levelHeight + gap);
              const y2 = y1 + levelHeight;
              const top = index * slope;
              const bot = (index + 1) * slope;
              const centerY = y1 + levelHeight / 2;

              // index 0 = punta (pequeño), index 4 = base (grande)
              const iconSize = Math.round(12 + (index / (total - 1)) * 20);
              // Lucide usa viewBox 24x24, escalamos al tamaño deseado
              const scale = iconSize / 24;
              const iconColor = state === 'locked' ? 'rgba(255,255,255,0.3)' : '#ffffff';
              const iconName = level.icon.displayName ?? level.icon.name;

              return (
                <g key={level.id} className={`pyramid-group ${state}`}>
                  <polygon
                    points={`${centerX - top},${y1} ${centerX + top},${y1} ${centerX + bot},${y2} ${centerX - bot},${y2}`}
                    className="pyramid-segment"
                  />

                  {/* Icono: trasladamos al centro, luego escalamos desde origen 0,0 del path */}
                  <g transform={`translate(${centerX - iconSize / 2}, ${centerY - iconSize / 2}) scale(${scale})`}>
                    <path
                      d={ICON_PATHS[iconName]}
                      fill="none"
                      stroke={iconColor}
                      strokeWidth={2 / scale}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>

                  <text
                    x={centerX + bot + 11}
                    y={centerY}
                    className="pyramid-label"
                    dominantBaseline="central"
                  >
                    {level.title}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default PyramidProgress;