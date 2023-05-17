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
import { Character, fetchCharacters } from './utils/fetchCharacters';

// Defining types for the game grid and the game logic
export type Grid = {
  [key: string]: {
    value: string;
    image: string;
    gender: string;
    name: string;
    species: string;
    status: string;
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
  selection: string[];
};

// Main hook that contains the game logic
export const useGameLogic = (): GameLogic => {
  // Initializing state variables
  const [grid, setGrid] = useState<Grid>({});
  const [gridKeys, setGridKeys] = useState<string[]>([]);
  const [selection, setSelection] = useState<string[]>([]);
  const [imagesArrSize, setImagesArrSize] = useState(0);

  // Initializing reducer for player state
  const [playerState, playerDispatch] = useReducer(
    PlayerReducer,
    initialPlayerState
  );

  // Function to start the game
  const handleStart = () => {
    if (imagesArrSize) {
      playerDispatch({ type: PlayerStateTypes.suffle });

      // Shuffling the grid keys
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

  // Function to restart the game
  const handleRestart = () => {
    setGrid({});
    setGridKeys([])
    setTimeout(() => {
      setGridValues();
      gridTimeout();
      playerDispatch({ type: PlayerStateTypes.resetGame });
    })
  };

  // Function to fetch images from an API
  const fetchImages = async () => {
    const ids = new Set<number>();
    while (ids.size < 6) {
      ids.add(Math.floor(Math.random() * 30) + 1);
    }

    try {
      const characters = await fetchCharacters(Array.from(ids)) as Character[];
      return characters.map((character) => ({
        image: character.image,
        value: character.id,
        gender: character.gender,
        name: character.name.trim().split(' ').slice(0, 2).join(' '),
        species: character.species,
        status: character.status,
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const setGridValues = useCallback(async () => {
    // Fetching images from the API
    const images = await fetchImages();
    const grid: Grid = {};

    // Create a grid object with random icons
    for (let i = 0; i < images.length; i++) {
      grid[`grid-${i}`] = {
        value: images[i].value,
        image: images[i].image,
        gender: images[i].gender,
        name: images[i].name,
        species: images[i].species,
        status: images[i].status,
        selected: true,
        disabled: false,
      };
      grid[`grid-${i}-copy`] = {
        value: images[i].value,
        image: images[i].image,
        gender: images[i].gender,
        name: images[i].name,
        species: images[i].species,
        status: images[i].status,
        selected: true,
        disabled: false,
      };
    }

    // Set icons array size
    setImagesArrSize(Object.keys(images).length);

    // Set grid state
    setGrid(grid);
    setGridKeys(Object.keys(grid));
  }, []);

   // Function to set grid timeout
   const gridTimeout = useCallback(() => {
    const initialTimeout: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < imagesArrSize; i++) {
      initialTimeout[i] = setTimeout(
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
      3000
      );
    }

    return () => initialTimeout.forEach((timeout) => clearTimeout(timeout));
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

  // Function to handle click on grid
  const handleClick = (ev: MouseEvent<HTMLDivElement>) => {
    // Handling click on grid
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

  // Returning the game logic
  return {
    grid,
    gridKeys,
    playerState,
    playerDispatch,
    handleClick,
    handleStart,
    handleRestart,
    selection,
  };
};
