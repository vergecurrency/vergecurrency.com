import React from 'react';

export default ({ size = 25, percentage, text }) => {
  const per = percentage / 100;
  return (
    <div className="roadmap-update-progress">
      <svg className="progress" width={size} height={size} viewBox="0 0 120 120">
        <circle className="progress__meter" cx="60" cy="60" r="54" strokeWidth="12" />
        <circle
          className="progress__value"
          cx="60"
          cy="60"
          r="54"
          strokeWidth="12"
          style={{
            strokeDashoffset: 2 * Math.PI * 54 * (1 - per),
            strokeDasharray: 2 * Math.PI * 54,
          }}
        />
      </svg>
      <p className="progress progress-text">
        {percentage}% - {text}
      </p>
    </div>
  );
};
