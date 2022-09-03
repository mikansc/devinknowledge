import React from "react";
import { MainContent } from "../components/MainContent";
import { Sidebar } from "../components/Sidebar";

export const Home = () => {
  return (
    <div className="root-container">
      <Sidebar />
      <MainContent />
    </div>
  );
};
