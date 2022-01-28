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
      <main>
        <h1>Hello</h1>
        <section className="sectionUserInfos">
          <Name data={data.Infos} />
        </section>
        <section className="sectionCharts">
          <UserActivity data={data.Activity} />
          <UserAverageSessions data={data.AverageSessions} />
          <UserPerformance data={data.Performance} />
          <TodayScore data={data.Infos.todayScore} />
        </section>
        <section className="sectionKeyData">
          <KeyData data={data.Infos.keyData} />
        </section>
      </main>

      {/* 
       
       
      
      
    
    */}
    </>
  );
};

export default User;
/**/
