export enum PlayerStateTypes {
  matches = 'MATCHES',
  mistakes = 'MISTAKES',
  suffle = 'SUFFLE',
  completed = 'COMPLETED',
  resetGame = 'RESETGAME',
}

// Interfaces
export interface PlayerActions {
  type: PlayerStateTypes;
  completedPayload?: boolean;
}

export interface PlayerState {
  matches: number;
  mistakes: number;
  suffle: boolean;
  completed?: boolean;
}

export const initialPlayerState = {
  matches: 0,
  mistakes: 0,
  suffle: false,
  completed: false,
};

export const PlayerReducer = (state: PlayerState, action: PlayerActions) => {
  switch (action.type) {
    case PlayerStateTypes.suffle: {
      return { ...state, suffle: true };
    }

    case PlayerStateTypes.matches: {
      return { ...state, matches: state.matches + 1 };
    }

    case PlayerStateTypes.mistakes: {
      return { ...state, mistakes: state.mistakes + 1 };
    }

    case PlayerStateTypes.completed: {
      return {
        ...state,
        completed: action.completedPayload,
      };
    }

    case PlayerStateTypes.resetGame: {
      return { ...initialPlayerState, suffle: false };
    }

    default: {
      return state;
    }
  }
};
