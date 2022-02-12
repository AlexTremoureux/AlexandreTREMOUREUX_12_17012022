import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../utils/query";
//import { useFetchDataMocks } from "../utils/queryMocks";
import Page404 from "./Page404";
import Loader from "./Loader";

import Name from "../components/Name";
import TodayScore from "../components/TodayScore";
import UserActivity from "../components/UserActivity";
import UserAverageSessions from "../components/UserAverageSessions";
import UserPerformance from "../components/UserPerformance";
import KeyData from "../components/KeyData";

import "../styles/User.css";
import { displayKeyData } from "../utils/constantes";

// Component container that dispatch data to subcomponents
const User = () => {
  const { id } = useParams();
  // If we wants data from MockedData, use function: useFetchDataMocks(id)
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
