import Footer from "daisyui/components/footer";
import Navbar from "daisyui/components/navbar";
import React from "react";
import { Outlet } from "react-router";

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
