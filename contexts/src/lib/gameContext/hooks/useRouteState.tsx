import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

// Define las acciones posibles
const actions = {
  HOME: 'HOME',
  PLAY: 'PLAY',
  RESULT: 'RESULT',
} as const;

type Action = { type: typeof actions[keyof typeof actions] };

// Define el estado inicial
interface State {
  page: string;
}

const initialState: State = { page: 'HOME' };

// Define el reductor
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

// Define el hook personalizado
export const useRouteState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const goToHome = () => {
    dispatch({ type: actions.HOME });
    navigate('/');
  };
  const goToPlay = () => {
    dispatch({ type: actions.PLAY });
    navigate('/play');
  };
  const goToResult = () => {
    dispatch({ type: actions.RESULT });
    navigate('/result');
  };

  return { page: state.page, goToHome, goToPlay, goToResult };
};

export default useRouteState;
