import React from 'react';
import PropTypes from 'prop-types';

const History = ({ saved }) => {
  console.log(saved);

  return (
    <div>
      <p>
        {saved}
      </p>
    </div>
  );
};

History.propTypes = {
  saved: PropTypes.array
};

export default History;