import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="left_navbar"></section>
        <section className="middle_navbar">
          <Outlet />
        </section>
        <section className="right_navbar"></section>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
