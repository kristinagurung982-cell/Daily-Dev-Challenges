import React from 'react';
import './LoadingSkeleton.css';

/**
 * LoadingSkeleton component that displays a skeleton loading state
 * Used while weather data is being fetched
 */
const LoadingSkeleton = () => {
  return (
    <div className="weather-widget loading-skeleton">
      <div className="skeleton-header">
        <div className="skeleton-line skeleton-title"></div>
        <div className="skeleton-line skeleton-subtitle"></div>
      </div>

      <div className="skeleton-main">
        <div className="skeleton-icon"></div>
        <div className="skeleton-temp"></div>
      </div>

      <div className="skeleton-description">
        <div className="skeleton-line"></div>
      </div>

      <div className="skeleton-details">
        <div className="skeleton-detail">
          <div className="skeleton-label"></div>
          <div className="skeleton-value"></div>
        </div>
        <div className="skeleton-detail">
          <div className="skeleton-label"></div>
          <div className="skeleton-value"></div>
        </div>
        <div className="skeleton-detail">
          <div className="skeleton-label"></div>
          <div className="skeleton-value"></div>
        </div>
        <div className="skeleton-detail">
          <div className="skeleton-label"></div>
          <div className="skeleton-value"></div>
        </div>
      </div>

      <div className="skeleton-sun">
        <div className="skeleton-sun-item">
          <div className="skeleton-label"></div>
          <div className="skeleton-value"></div>
        </div>
        <div className="skeleton-sun-item">
          <div className="skeleton-label"></div>
          <div className="skeleton-value"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
