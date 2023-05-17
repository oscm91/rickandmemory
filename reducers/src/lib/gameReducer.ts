// Defining the types of actions that can be dispatched
export enum PlayerStateTypes {
  matches = 'MATCHES',
  mistakes = 'MISTAKES',
  suffle = 'SUFFLE',
  completed = 'COMPLETED',
  resetGame = 'RESETGAME',
}

// Defining the interface for an action
export interface PlayerActions {
  type: PlayerStateTypes;
  completedPayload?: boolean;
}

// Defining the interface for the state
export interface PlayerState {
  matches: number;
  mistakes: number;
  suffle: boolean;
  completed?: boolean;
}

// Defining the initial state
export const initialPlayerState = {
  matches: 0,
  mistakes: 0,
  suffle: false,
  completed: false,
};

// Defining the reducer
export const PlayerReducer = (state: PlayerState, action: PlayerActions) => {
  switch (action.type) {
    case PlayerStateTypes.suffle: {
      // If the action is "suffle", set "suffle" to true
      return { ...state, suffle: true };
    }

    case PlayerStateTypes.matches: {
      // If the action is "matches", increment "matches" by 1
      return { ...state, matches: state.matches + 1 };
    }

    case PlayerStateTypes.mistakes: {
      // If the action is "mistakes", increment "mistakes" by 1
      return { ...state, mistakes: state.mistakes + 1 };
    }

    case PlayerStateTypes.completed: {
      // If the action is "completed", set "completed" to the payload of the action
      return {
        ...state,
        completed: action.completedPayload,
      };
    }

    case PlayerStateTypes.resetGame: {
      // If the action is "resetGame", reset the state to the initial state and set "suffle" to false
      return { ...initialPlayerState };
    }

    default: {
      // If the action is not recognized, return the current state
      return state;
    }
  }
};
