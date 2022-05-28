import camelize from "camelize";
import { host } from "../../utils/env";

export const locationRequest = (searchTerm) => {
  return fetch(`${host}/geocode?city=${searchTerm}`).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResp = camelize(result);
  const { geometry = {} } = formattedResp.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
