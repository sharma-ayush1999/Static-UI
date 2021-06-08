import React from "react";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Main } from "../pages/main/Main";
import './Dashboard.css';

export const Dashboard = () => {
  return (
  <div id="dashboard">
      <Sidebar />
      <Main />
    </div>
    );
};
