import { data } from "../data/mocks";

import iconCalories from "../images/iconCalories.svg";
import iconGlucides from "../images/iconGlucides.svg";
import iconLipides from "../images/iconLipides.svg";
import iconProtein from "../images/iconProtein.svg";

import imgMeditation from "../images/iconMeditation.svg";
import imgNatation from "../images/iconNatation.svg";
import imgVelo from "../images/iconVelo.svg";
import imgMusculation from "../images/iconMusculation.svg";


// Environnement de travail
const prodUrl = "http://localhost:3000/user/";
const devUrl = data;
// eslint-disable-next-line no-unused-vars
const PROD = "production";
const DEV = "development";
const ENV = PROD;

export const url = ENV === DEV ? devUrl : prodUrl;


// Props of Card DataKey on dashboard
export const displayKeyData = [
    {
      icon: iconCalories,
      color: "rgba(255, 0, 0, 0.1)",
      unit: "kCal",
      name: "Calories",
      key: "calorieCount",
    },
    {
      icon: iconProtein,
      color: "rgba(74, 184, 255, 0.1)",
      unit: "g",
      name: "Proteines",
      key: "proteinCount",
    },
    {
      icon: iconGlucides,
      color: "rgba(249, 206, 35, 0.1)",
      unit: "g",
      name: "Glucides",
      key: "carbohydrateCount",
    },
    {
      icon: iconLipides,
      color: "rgba(253, 81, 129, 0.1)",
      unit: "g",
      name: "Lipides",
      key: "lipidCount",
    },
  ];

  // Array of Link for navigation Global
export const displayNavLink = [
    {
      route: "/",
      dest: "Accueil",
    },
    {
      route: `/profil`,
      dest: "Profil",
    },
    {
      route: `/reglages`,
      dest: "Réglage",
    },
    {
      route: `/communaute`,
      dest: "Communauté",
    },
  ];

  // Array of Future link of navigation
export const displayNavIcon = [
    {
      icon: imgMeditation,
      alt: "Meditation",
      dest: "/prochainement"
    },
    {
      icon: imgNatation,
      alt: "Natation",
      dest: "/prochainement"
    },
    {
      icon: imgVelo,
      alt: "Velo",
      dest: "/prochainement"
    },
    {
      icon: imgMusculation,
      alt: "Musculation",
      dest: "/prochainement"
    },
  ]