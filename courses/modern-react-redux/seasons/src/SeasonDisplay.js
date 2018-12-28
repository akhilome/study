import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach! 💪🏾',
    iconName: 'sun'
  },
  winter: {
    text: 'Sh*t! it\'s chilly 😬',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  return month > 2 && month < 9 
    ? lat > 0 ? 'summer' : 'winter'
    : lat > 0 ? 'winter' : 'summer';
};

const SeasonDisplay = (props) => {
  const thisMonth = new Date().getMonth();
  const season = getSeason(props.lat, thisMonth);
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
