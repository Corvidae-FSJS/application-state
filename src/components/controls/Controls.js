import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';
import { actions } from '../../actions/actions';

const Controls = ({ handleSelection }) => (
  
  <section className={styles.Controls}>
    {actions.map(({ name, text, count }) => (
      <button key={name} onClick={() => handleSelection(name)}>
        {text || name} {!!count && `- ${count}`}
      </button>
    ))}
  </section>
);

Controls.propTypes = {

  handleSelection: PropTypes.func.isRequired
};

export default Controls;
