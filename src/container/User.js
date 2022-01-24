import React from "react";
import { useParams } from "react-router-dom";
import KeyData from "../components/KeyData";
import Name from "../components/Name";
import TodayScore from "../components/TodayScore";
import UserActivity from "../components/UserActivity";
import UserAverageSessions from "../components/UserAverageSessions";
import UserPerformance from "../components/UserPerformance";
import { USER_MAIN_DATA } from "../data/mocks";
import { url } from "../utils/constantes";
import { useFetchUserById } from "../utils/query";
import Page404 from "./Page404";

const User = () => {
  const id = useParams();
  return (
    <>
    <h1>Hello</h1>
      <Name id={id} />
      <UserActivity id={id} />
      <UserAverageSessions id={id} />
      <UserPerformance id={id} />
      <TodayScore id={id} />
      <KeyData id={id} />
    </>
  );
};

export default User;
