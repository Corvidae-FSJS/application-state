import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
//import actions from '../actions/actions';
import { getFace } from '../../src/selectors/selectors';

const Moods = ({ count, handleSelection, }) => {
  const face = getFace(count);
  
  // const controlActions = actions.map(action => ({
  //   ...action,
  //   // count: count[action.stateName]
  // }));
  return (
    <>
      <Controls  handleSelection={handleSelection}/>
      <Face emoji={face} />
    </>
  );
};

Moods.propTypes = {
  count: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  //face: PropTypes.string.isRequired,
  handleSelection: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  count: {
    coffees: state.count.coffees,
    snacks: state.count.snacks,
    naps: state.count.naps,
    studies: state.count.studies,
  },
  //face: getFace(state.count)
});

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch({
      type: name
    });
  },
});

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodsContainer;
