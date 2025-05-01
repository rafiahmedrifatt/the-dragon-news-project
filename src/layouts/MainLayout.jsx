import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import LatestNews from "../components/latestNews/LatestNews";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
        <section>
          <LatestNews />
        </section>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <section className="left_navbar"></section>
        <section className="middle_navbar">
          <Outlet />
        </section>
        <section className="right_navbar"></section>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
