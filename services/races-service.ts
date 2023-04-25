const urlApi = process.env.NEXT_PUBLIC_API;
const url = `${urlApi}/races`;

// Doc 'Fetch':
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

export const fetchRaces = async () => {
  try {
    const res = await fetch(url);
    const { results } = await res.json();

    if (!res.ok) {
      return;
    }

    return results;
  } catch (error) {
    throw new Error("Couldn't find the races list");
  }
};

export const fetchRace = async (race: string) => {
  const res = await fetch(`${url}/${race}`);
  const jsonData = await res.json();

  if (!res.ok) {
    return Promise.reject(new Error(`No race found with name "${race}"`));
  }

  return jsonData;
};

// Axios (+ react-query in component)

// export const fetchRaces = async (): Promise<IRace[]> => {
//   const response = await axios.get(url);
//   const classes = response.data.results;
//   return classes;
// };

// export const fetchRace = async (raceName: string) => {
//   const response = await axios.get(`${url}/${raceName}`);
//   const classRes = response.data;
//   return classRes;
// };
