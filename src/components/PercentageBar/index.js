import React from 'react';

const PercentageBar = ({ label, percentage, colour, url }) => (
  <a href={url} target="_blank">
    <div className="pb">
      <p className="pb-label">{label}</p>
      <span className="pb-bar-full">
        <span className="pb-bar" style={{ backgroundColor: colour, width: `${percentage}%` }} />
      </span>
    </div>
  </a>
);

export default PercentageBar;