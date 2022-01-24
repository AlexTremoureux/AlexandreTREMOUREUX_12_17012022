import React from "react";
import { useParams } from "react-router-dom";
import KeyData from "../components/KeyData";
import Name from "../components/Name";
import TodayScore from "../components/TodayScore";
import UserActivity from "../components/UserActivity";
import UserAverageSessions from "../components/UserAverageSessions";
import UserPerformance from "../components/UserPerformance";


const User = () => {
  const id = useParams();
  return (
    <>
    <h1>Hello</h1>
      <Name user={id} />
      <UserActivity user={id} />
      <UserAverageSessions user={id} />
      <UserPerformance user={id} />
      <TodayScore user={id} />
      <KeyData user={id} />
    </>
  );
};

export default User;
