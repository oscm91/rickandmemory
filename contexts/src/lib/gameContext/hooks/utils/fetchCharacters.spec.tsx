import { test, vi } from 'vitest';
import { fetchCharacters } from './fetchCharacters';

test('fetchCharacters: should return characters', async () => {
  global.fetch = vi.fn().mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          data: {
            charactersByIds: [
              {
                id: '1',
                name: 'Rick Sanchez',
                image: 'url1',
                status: 'Alive',
                species: 'Human',
                gender: 'Male',
              },
              {
                id: '2',
                name: 'Morty Smith',
                image: 'url2',
                status: 'Alive',
                species: 'Human',
                gender: 'Male',
              },
            ],
          },
        }),
    })
  );

  const characters = await fetchCharacters([1, 2]);

  expect(characters).toEqual([
    {
      id: '1',
      name: 'Rick Sanchez',
      image: 'url1',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
    },
    {
      id: '2',
      name: 'Morty Smith',
      image: 'url2',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
    },
  ]);
});
