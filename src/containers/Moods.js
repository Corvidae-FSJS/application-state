import React, { Component } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import actions from '../actions/actions';

const Moods = ({ actions, }) {

  // render() {
  //   const face = getFace(this.state);
  //   const controlActions = actions.map(action => ({
  //     ...action,
  //     count: this.state[action.stateName]
  //   }));

  const mapDispatchToProps = dispatch = ({
    
  })

    return (
      <>
        <Controls actions={controlActions} handleSelection={this.handleSelection}/>
        <Face emoji={face} />
      </>
    );
}
