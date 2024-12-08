import React from "react";
import "./Sidebar.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Reports from "./pages/Reports";
import Reports1 from "./pages/Reports1";
import { Reports2 } from "./pages/Reports2";
import { Reports3 } from "./pages/Reports3";
import Team from "./pages/Teams";

function SideBarMenu() {
  return (
    // <Router>
    //   <Sidebar />
    //     <Route path="/overview" exact component={Overview} />
    //     <Route path="/reports" exact component={Reports} />
    //     <Route path="/reports/reports1" exact component={ReportsOne} />
    //     <Route path="/reports/reports2" exact component={ReportsTwo} />
    //     <Route path="/reports/reports3" exact component={ReportsThree} />
    //     <Route path="/team" exact component={Team} />
    // </Router>

    <Router>
      <Sidebar />
      <Routes>
        <Route path="overview" exact element={<Overview />} />
        <Route path="reports" exact element={<Reports />} />
        <Route path="reports1" exact element={<Reports1 />} />
        <Route path="reports2" exact element={<Reports2 />} />
        <Route path="reports3" exact element={<Reports3 />} />

        <Route path="team" exact element={<Team />} />
      </Routes>
    </Router>

  );
}

export default SideBarMenu;
