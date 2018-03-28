import React from 'react';

const Action = (props) => (
  <div>
    <button
      className="big-button"
      disabled={!props.hasOptions}
      onClick={props.selectOption}
    >
      What Should I Do?
    </button>
  </div>
);

export default Action;
