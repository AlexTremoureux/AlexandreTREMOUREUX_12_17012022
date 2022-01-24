import { data } from "../data/mocks";
// Environnement de travail
const prodUrl = "http://localhost:3000/user/";
const devUrl = data;
// eslint-disable-next-line no-unused-vars
const PROD = "production";
const DEV = "development";
const ENV = PROD;
export const url = ENV === DEV ? devUrl : prodUrl;
