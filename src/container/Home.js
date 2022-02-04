import React from "react";
import CallToAction from "../components/CallToAction";
import { USER_MAIN_DATA } from "../data/mocks";
import "../styles/Home.css";

const Home = () => (
  <main className="Home-main">
    <h2>Bienvenue sur SportSee, veuillez selectionner un utilisateur:</h2>
    <ul className="userList">

      {USER_MAIN_DATA.map((user) => (
        <li key={user.id}>
          <CallToAction dest={`/user/${user.id}`} text={user.userInfos.firstName  + " " + user.userInfos.lastName} />
        </li>
      ))}
      
    </ul>
  </main>
);

export default Home;
