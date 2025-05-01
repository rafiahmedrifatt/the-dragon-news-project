import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import LatestNews from "../components/latestNews/LatestNews";
import Header from "../pages/header/Header";
import Navbar from "../components/navbar/Navbar";
import LeftAside from "../pages/leftAside/LeftAside";
import RightAside from "../pages/rightAside/RightAside";

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
      <main className="grid grid-cols-12 w-10/12 mx-auto">
        <section className="left_navbar col-span-3">
          <LeftAside />
        </section>
        <section className="middle_navbar col-span-6">
          <Outlet />
        </section>
        <section className="right_navbar col-span-3">
          <RightAside />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
