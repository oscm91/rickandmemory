// Importing necessary hooks from React and react-router-dom
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

// Defining possible actions
const actions = {
  HOME: 'HOME',
  PLAY: 'PLAY',
  RESULT: 'RESULT',
} as const;

// Defining the type for an action
type Action = { type: (typeof actions)[keyof typeof actions] };

// Defining the initial state
interface State {
  page: string;
}

const initialState: State = { page: 'HOME' };

// Defining the reducer
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actions.HOME:
      return { page: 'HOME' };
    case actions.PLAY:
      return { page: 'PLAY' };
    case actions.RESULT:
      return { page: 'RESULT' };
    default:
      return state;
  }
};

// Defining the custom hook
export const useRouteState = () => {
  // Using the useReducer hook to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Using the useNavigate hook to navigate between routes
  const navigate = useNavigate();

  // Function to go to the home page
  const goToHome = () => {
    dispatch({ type: actions.HOME });
    navigate('/');
  };

  // Function to go to the play page
  const goToPlay = () => {
    dispatch({ type: actions.PLAY });
    navigate('/play');
  };

  // Function to go to the result page
  const goToResult = () => {
    dispatch({ type: actions.RESULT });
    navigate('/result');
  };

  // Returning the current page and the navigation functions
  return { page: state.page, goToHome, goToPlay, goToResult };
};

export default useRouteState;
