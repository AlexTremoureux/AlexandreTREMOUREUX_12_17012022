import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../container/Home";
import Page404 from "../container/Page404";
import User from "../container/User";

const Router = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user/:id" element={<User />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </>
);

export default Router;
