import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-54005.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-54005/us-central1";

const isDev = process.env.NODE_ENV === "production";
export const isAndroid = Platform.OS === "android";
export const isMock = true;
export const host = !isDev || isAndroid ? liveHost : localHost;
