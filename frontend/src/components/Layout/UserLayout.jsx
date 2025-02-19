import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Home from "../../pages/Home";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      {/* Header*/}
      <Header />
      {/* Content*/}
      <main>
        <Outlet />
      </main>
      {/* Footer*/}
      <Footer />
    </>
  );
};

export default UserLayout;
