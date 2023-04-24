// Doc 'Fetch':
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const urlApi = process.env.NEXT_PUBLIC_API;
const url = `${urlApi}/races`;

export const getRaces = async () => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const { results } = await res.json();
  return results;
};

export const getRace = async (race: string) => {
  const res = await fetch(`${url}/${race}`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const jsonData = await res.json();
  return jsonData;
};
