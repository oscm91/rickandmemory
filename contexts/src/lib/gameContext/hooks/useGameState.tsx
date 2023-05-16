import {
  useState,
  useEffect,
  MouseEvent,
  useCallback,
  useReducer,
  Dispatch,
  useMemo,
} from 'react';
import {
  PlayerActions,
  PlayerReducer,
  PlayerState,
  PlayerStateTypes,
  initialPlayerState,
} from '@rickandmemory/reducers';

export type Grid = {
  [key: string]: {
    value: string;
    image: string;
    selected: boolean;
    disabled: boolean;
  };
};

export type GameLogic = {
  grid: Grid;
  gridKeys: string[];
  playerState: PlayerState;
  playerDispatch: Dispatch<PlayerActions>;
  handleClick: (ev: MouseEvent<HTMLDivElement>) => void;
  handleStart: () => void;
  handleRestart: () => void;
  setNewGame: () => void;
  selection: string[];
};

export const useGameLogic = (): GameLogic => {
  const [grid, setGrid] = useState<Grid>({});
  const [gridKeys, setGridKeys] = useState<string[]>([]);
  const [selection, setSelection] = useState<string[]>([]);
  const [imagesArrSize, setImagessArrSize] = useState(0);

  const [playerState, playerDispatch] = useReducer(
    PlayerReducer,
    initialPlayerState
  );

  // Set up a new game
  const setNewGame = () => {
    handleRestart();
  };

  // Start the game
  const handleStart = () => {
    if (Object.keys(grid).length) {
      playerDispatch({ type: PlayerStateTypes.suffle });

      const suffleGridKeys = [...gridKeys];

      for (let i = suffleGridKeys.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [suffleGridKeys[i], suffleGridKeys[j]] = [
          suffleGridKeys[j],
          suffleGridKeys[i],
        ];
      }

      setGridKeys(suffleGridKeys);
    }
  };

  // Restart the game
  const handleRestart = () => {
    setGridValues();
    playerDispatch({ type: PlayerStateTypes.resetGame });
    gridTimeout();
  };

  // Get images path
  const fetchImages = async () => {
    const ids = new Set<number>();
    while (ids.size < 6) {
      ids.add(Math.floor(Math.random() * 30) + 1);
    }

    try {
      return Array.from(ids).map((id) => ({
        image: `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`,
        value: `Character ${id}`,
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const setGridValues = useCallback(async () => {
    const images = await fetchImages();
    const grid: Grid = {};

    // Create a grid object with random icons
    for (let i = 0; i < images.length; i++) {
      grid[`grid-${i}`] = {
        value: images[i].value,
        image: images[i].image,
        selected: true,
        disabled: false,
      };
      grid[`grid-${i}-copy`] = {
        value: images[i].value,
        image: images[i].image,
        selected: true,
        disabled: false,
      };
    }

    // Set icons array size
    setImagessArrSize(Object.keys(images).length);

    // Set grid state
    setGrid(grid);
    setGridKeys(Object.keys(grid));
  }, []);

  // Set grid timeout
  const gridTimeout = useCallback(() => {
    let initialTimeout: ReturnType<typeof setTimeout>;
    for (let i = 0; i < imagesArrSize; i++) {
      initialTimeout = setTimeout(
        () =>
          setGrid((grid) => {
            return {
              ...grid,
              [`grid-${i}`]: { ...grid[`grid-${i}`], selected: false },
              [`grid-${i}-copy`]: {
                ...grid[`grid-${i}-copy`],
                selected: false,
              },
            };
          }),
        2000
      );
    }

    return () => clearTimeout(initialTimeout);
  }, [imagesArrSize]);

  // Effect to set grid values
  useEffect(() => {
    const setupGrid = async () => {
      await setGridValues();
    };

    setupGrid();
  }, [setGridValues]);

  // Effect to set grid timeout
  useEffect(() => {
    gridTimeout();
  }, [gridTimeout]);

  // Handle click on grid
  const handleClick = (ev: MouseEvent<HTMLDivElement>) => {
    ev.stopPropagation();
    const id = (ev.currentTarget as HTMLDivElement).getAttribute('data-id');

    if (id) {
      if (selection.length === 0) {
        setGrid((grid) => {
          const target = grid[id as string];
          return {
            ...grid,
            [id as string]: { ...target, selected: !target.selected },
          };
        });
        setSelection([id]);
      } else {
        const target_1 = grid[selection[0]];
        const target_2 = grid[id];

        if (target_1.value !== target_2.value) {
          // Set timeout and hide boxes
          setGrid((grid) => {
            return {
              ...grid,
              [id as string]: { ...target_2, selected: true },
            };
          });

          setTimeout(
            () =>
              setGrid((grid) => {
                return {
                  ...grid,
                  [selection[0]]: { ...target_1, selected: false },
                  [id as string]: { ...target_2, selected: false },
                };
              }),
            500
          );

          // Increase player mistakes
          playerDispatch({ type: PlayerStateTypes.mistakes });
        } else {
          setGrid((grid) => {
            return {
              ...grid,
              [selection[0]]: { ...target_1, disabled: true, selected: true },
              [id as string]: { ...target_2, disabled: true, selected: true },
            };
          });

          // Increase player matches
          playerDispatch({ type: PlayerStateTypes.matches });
        }
        setSelection([]);
      }
    }
  };

  // Effect to check if the game has ended
  const finished = useMemo(
    () =>
      Object.keys(grid).length !== 0 &&
      Object.entries(grid).every(([_, item]) => item.disabled),
    [grid]
  );

  useEffect(() => {
    playerDispatch({
      type: PlayerStateTypes.completed,
      completedPayload: finished,
    });
  }, [grid, finished]);

  return {
    grid,
    gridKeys,
    playerState,
    playerDispatch,
    handleClick,
    handleStart,
    handleRestart,
    setNewGame,
    selection,
  };
};
