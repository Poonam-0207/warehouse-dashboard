/* global window */
import { useState } from "react";
import robots from "../data/robots";
import RobotCard from "../components/RobotCard";

// LOCAL RECHARTS IMPORT
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Robots() {
  const [search, setSearch] = useState("");

  const filtered = robots.filter((robot) =>
    robot.id.toLowerCase().includes(search.toLowerCase())
  );

  const idle = robots.filter((r) => r.status === "Idle").length;
  const busy = robots.filter((r) => r.status === "Busy").length;
  const charging = robots.filter((r) => r.status === "Charging").length;

  const chartData = [
    { status: "Idle", count: idle },
    { status: "Busy", count: busy },
    { status: "Charging", count: charging }
  ];

  const cardGradient =
    "bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-xl";

  return (
    <div className="fade">
      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className={`${cardGradient} p-6 rounded-xl`}>
          <h3 className="font-bold text-xl">Idle</h3>
          <p className="text-4xl font-extrabold">{idle}</p>
        </div>

        <div className={`${cardGradient} p-6 rounded-xl`}>
          <h3 className="font-bold text-xl">Busy</h3>
          <p className="text-4xl font-extrabold">{busy}</p>
        </div>

        <div className={`${cardGradient} p-6 rounded-xl`}>
          <h3 className="font-bold text-xl">Charging</h3>
          <p className="text-4xl font-extrabold">{charging}</p>
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search robot by ID…"
        className="w-full p-3 border rounded-xl mb-6 shadow-sm focus:outline-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Robots Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filtered.map((robot) => (
          <RobotCard key={robot.id} robot={robot} />
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow-xl p-6">
        <h3 className="text-xl font-bold mb-4">Robot Status Chart</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="status" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
