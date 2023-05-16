export type Character = {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string;
    url: string;
  };
};


export const fetchCharacters = async (ids: number[]) => {
  const response = await fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
          query ($ids: [ID!]!) {
            charactersByIds(ids: $ids) {
              id
              name
              image
              status
              species
              gender
            }
          }
        `,
      variables: {
        ids: ids,
      },
    }),
  });

  const { data } = await response.json();
  return data.charactersByIds;
};
