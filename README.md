# LAB 36 & 37 - Application State & Redux in Depth

For this assignment, you will be refactoring an app that uses basic
state management into one that uses the more advanced Redux state
management system, with a reducer.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

### Connect to a store

For this assignment, you're going to take an existing application which
changes a face based based on button clicks.

* You've been provided starter code to work with
* Connect `index.js` to the redux store and pass it down to the `App` component
* Remove the state declaration in the container
* extract code from `Moods.js` into the appropriate files
  * create actions, selectors, and reducers
* Map state and dispatch to props in `Moods.js`
* Export the connected `Moods` container

### Create a new reducer

In this assignment, we have a working app that uses Redux for it's state
management. Now, it's time to extend it.

When the page first loads there should be a start button. Upon clicking
the start button your `Moods` container should display. There should be
a timer under the face emoji. When the timer elapses the game should 
reset (all state goes back to 0) and you should be sent to the initial
view.

###### Testing

* Tests are not required for this lab

###### Stretch Goals:

* Add more moods
* Use combine reducer to extract all your timer state from
  your button click state

### Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations



# LAB 37 - Redux in Depth

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

### Refactor

Refactor your Moods application so it uses action creators and selectors.

#### Action creators

* use action creators to dispatch actions
* create action type constants

#### Selectors

* use selectors to select data in `mapStateToProps`
* use selectors to derive data

#### Reducers

* extract reducer into its own file
* use action type constants

### Add Reset button

Add a reset button that resets all state to 0. You should only add one
action type.

### Add a new reducer

Add the ability to save a game state. Store the state with a new reducer.

* add a new reducer and use `combineReducer`
* create a button to store your current game state
* create a sidebar with all previous stored games

#### Stretch

* add ability to click on a previous game and load that game as
  your current game
  
### Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
