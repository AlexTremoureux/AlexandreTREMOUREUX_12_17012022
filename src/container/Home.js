import React from "react";
import { Link } from "react-router-dom";
import { USER_MAIN_DATA } from "../data/mocks";
import '../styles/Home.css'

const Home = () => {
  return (
    <main className="Home-main">
      <h2>Bienvenue sur SportSee, veuillez selectionner un utilisateur:</h2>
      <ul className="userList">
        {USER_MAIN_DATA.map((user) => (
          <li key={user.id}>
            <Link className="user_link" to={`/user/${user.id}`}>
              <p>
                {user.userInfos.firstName} {user.userInfos.lastName}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
