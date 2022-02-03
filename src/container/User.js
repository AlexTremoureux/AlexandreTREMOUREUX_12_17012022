import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../utils/query";
import Page404 from "./Page404";
import Loader from "./Loader";

import Name from "../components/Name";
import TodayScore from "../components/TodayScore";
import UserActivity from "../components/UserActivity";
import UserAverageSessions from "../components/UserAverageSessions";
import UserPerformance from "../components/UserPerformance";
import KeyData from "../components/KeyData";

import iconCalories from "../images/iconCalories.svg";
import iconGlucides from "../images/iconGlucides.svg";
import iconLipides from "../images/iconLipides.svg";
import iconProtein from "../images/iconProtein.svg";

import "../styles/User.css";

const displayKeyData = [
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

const User = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(id);

  if (error) return <Page404 />;
  if (isLoading) return <Loader />;

  return (
    <main className="main">
      <section className="sectionUserInfos">
        <Name data={data.Infos} />
      </section>
      <section className="sectionCharts">
        <UserActivity data={data.Activity} />
        <UserAverageSessions data={data.AverageSessions} />
        <UserPerformance data={data.Performance} />
        <TodayScore
          data={
            !data.Infos.score
              ? data.Infos.todayScore * 100
              : data.Infos.score * 100
          }
        />
      </section>
      <section className="sectionKeyData">
        <ul className="keyDataList">
          {displayKeyData.map((keyData) => (
            <KeyData
              icon={keyData.icon}
              color={keyData.color}
              count={data.Infos.keyData[keyData.key]}
              unit={keyData.unit}
              name={keyData.name}
              key={keyData.key}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default User;
