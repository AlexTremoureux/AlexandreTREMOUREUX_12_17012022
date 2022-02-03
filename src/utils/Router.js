import React from "react";
import { Route, Routes } from "react-router-dom";
import Construction from "../container/Construction";
import Home from "../container/Home";
import Page404 from "../container/Page404";
import User from "../container/User";

const Router = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user/:id" element={<User />} />
      <Route path="/profil" element={<Construction />} />
      <Route path="/reglages" element={<Construction />} />
      <Route path="/communaute" element={<Construction />} />
      <Route path="/prochainement" element={<Construction />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </>
);

export default Router;
