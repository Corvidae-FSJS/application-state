import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';
import { drinkCoffee, eatSnack, takeNap, study, reset, saveGame } from '../../actions/actions';

const Controls = ({ handleSelection, count, handleSavedGame }) => {
  
  return (
    <section className={styles.Controls}>
      <button key={drinkCoffee} onClick={() => handleSelection('coffees')}>
      Drink Coffee {!!count && `- ${count.coffees}`}
      </button>
      <button key={eatSnack} onClick={() => handleSelection('snacks')}>
      Eat Snack{!!count && `- ${count.snacks}`}
      </button>
      <button key={takeNap} onClick={() => handleSelection('naps')}>
      Take Nap{!!count && `- ${count.naps}`}
      </button>
      <button key={study} onClick={() => handleSelection('studies')}>
      Study{!!count && `- ${count.studies}`}
      </button>
      <button key={reset} onClick={() => handleSelection('reset')}>
      Reset
      </button>
      <button key={saveGame} onClick={() => handleSavedGame(count)}>
      Save Game
      </button>
    </section>
  );
};

Controls.propTypes = {
  handleSelection: PropTypes.func.isRequired,
  count: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  handleSavedGame: PropTypes.func,
};

export default Controls;
