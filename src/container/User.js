import React from "react";
import { useParams } from "react-router-dom";
import KeyData from "../components/KeyData";
import Name from "../components/Name";
import TodayScore from "../components/TodayScore";
import UserActivity from "../components/UserActivity";
import UserAverageSessions from "../components/UserAverageSessions";
import UserPerformance from "../components/UserPerformance";
import { useFetch } from "../utils/query";
import Page404 from "./Page404";
import "../styles/User.css";
import iconCalories from "../images/iconCalories.svg";
import iconGlucides from "../images/iconGlucides.svg";
import iconLipides from "../images/iconLipides.svg";
import iconProtein from "../images/iconProtein.svg";

const User = () => {
  const { id } = useParams();
  const { data, error } = useFetch(id);

  if (error) {
    return (
      <>
        <Page404 />
      </>
    );
  }
  return !data ? (
    <div>Chargement en cours...</div>
  ) : (
    <>
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
          <ul>
            <KeyData
              icon={iconCalories}
              color={"rgba(255, 0, 0, 0.1)"}
              count={data.Infos.keyData.calorieCount}
              unit={"kCal"}
              name={"Calories"}
            />
            <KeyData
              icon={iconProtein}
              color={"rgba(74, 184, 255, 0.1)"}
              count={data.Infos.keyData.proteinCount}
              unit={"g"}
              name={"Proteines"}
            />
            <KeyData
              icon={iconGlucides}
              color={"rgba(249, 206, 35, 0.1)"}
              count={data.Infos.keyData.carbohydrateCount}
              unit={"g"}
              name={"Glucides"}
            />
            <KeyData
              icon={iconLipides}
              color={"rgba(253, 81, 129, 0.1)"}
              count={data.Infos.keyData.lipidCount}
              unit={"g"}
              name={"Lipides"}
            />
          </ul>
        </section>
      </main>
    </>
  );
};

export default User;
