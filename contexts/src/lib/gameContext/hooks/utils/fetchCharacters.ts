// Defining a type for a character
export type Character = {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
};

// Function to fetch characters from the Rick and Morty API
export const fetchCharacters = async (ids: number[]) => {
  // Making a POST request to the Rick and Morty API
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

  // Parsing the response and returning the characters
  const { data } = await response.json();
  return data.charactersByIds;
};
