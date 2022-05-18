import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://localhost:5001/mealstogo-54005/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResp = camelize(result);
  const { geometry = {} } = formattedResp.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
