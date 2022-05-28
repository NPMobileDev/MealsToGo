const liveHost = "https://us-central1-mealstogo-54005.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-54005/us-central1";

const isDev = process.env.NODE_ENV === "development";

export const host = isDev ? localHost : liveHost;
