import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getFace, getCoffeeCount, getSnackCount, getNapCount, getStudyCount } from '../selectors/selectors';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/actions';


const Moods = ({ count, handleSelection }) => {
  const face = getFace(count);
  
  return (
    <>
      <Controls handleSelection={handleSelection} count={count} />
      <Face emoji={face} />
    </>
  );
};

Moods.propTypes = {
  count: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  handleSelection: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    count: {
      coffees: getCoffeeCount(state),
      snacks: getSnackCount(state),
      naps: getNapCount(state),
      studies: getStudyCount(state)
    }
  };
};

const inputFactoryMethod = {
  coffees: drinkCoffee(),
  snacks: eatSnack(),
  naps: takeNap(),
  studies: study()
};

const mapDispatchToProps = dispatch => {
  return {
    handleSelection(name) {      
      dispatch(inputFactoryMethod[name]);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);
