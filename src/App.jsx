import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

import Dashboard from "./pages/Dashboard";
import Robots from "./pages/Robots";
import Tasks from "./pages/Tasks";
import Inventory from "./pages/Inventory";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 fade">
          <TopBar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/robots" element={<Robots />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
