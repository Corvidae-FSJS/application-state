import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getFace, getCoffeeCount, getSnackCount, getNapCount, getStudyCount, getSavedGame } from '../selectors/selectors';
import { drinkCoffee, eatSnack, takeNap, study, reset, saveGame } from '../actions/actions';
import History from '../components/history/history';


const Moods = ({ count, handleSelection, handleSavedGame, saved }) => {
  const face = getFace(count);
  
  return (
    <>
      <Controls handleSelection={handleSelection} count={count} handleSavedGame={handleSavedGame} />
      <Face emoji={face} />
      <History saved={saved} />
    </>
  );
};

Moods.propTypes = {
  count: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  handleSelection: PropTypes.func.isRequired,
  handleSavedGame: PropTypes.func.isRequired,
  saved: PropTypes.array
};

const mapStateToProps = state => {
  console.log(state);
  
  return {
    count: {
      coffees: getCoffeeCount(state),
      snacks: getSnackCount(state),
      naps: getNapCount(state),
      studies: getStudyCount(state)
    },
    saved: getSavedGame(state)
  };
};

const inputFactoryMethod = {
  coffees: drinkCoffee(),
  snacks: eatSnack(),
  naps: takeNap(),
  studies: study(),
  reset: reset(),
  saved: saveGame()
};

const mapDispatchToProps = dispatch => {
  return {
    handleSelection(name) {      
      dispatch(inputFactoryMethod[name]);
    },
    handleSavedGame(saved) {
      dispatch(saveGame(saved));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);
