/* global window */
import robots from "../data/robots";
import tasks from "../data/tasks";
import inventory from "../data/inventory";

// LOCAL RECHARTS IMPORT (npm install recharts)
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Dashboard() {
  const totalRobots = robots.length;
  const idleRobots = robots.filter((r) => r.status === "Idle").length;
  const busyRobots = robots.filter((r) => r.status === "Busy").length;
  const lowBattery = robots.filter((r) => r.battery < 20).length;

  const pendingTasks = tasks.filter((t) => t.status === "Pending").length;
  const inProgress = tasks.filter((t) => t.status === "In-progress").length;
  const completedTasks = tasks.filter((t) => t.status === "Completed").length;

  const totalItems = inventory.length;
  const lowStock = inventory.filter((i) => i.quantity <= 5).length;

  const chartData = [
    { status: "Idle", count: idleRobots },
    { status: "Busy", count: busyRobots },
    { status: "Low Batt", count: lowBattery }
  ];

  const cardGradient =
    "bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-xl";

  return (
    <div className="fade">
      {/* KPI Cards Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className={`${cardGradient} p-6 rounded-xl`}>
          <h3 className="text-xl font-bold">Total Robots</h3>
          <p className="text-4xl font-extrabold">{totalRobots}</p>
        </div>

        <div className={`${cardGradient} p-6 rounded-xl`}>
          <h3 className="text-xl font-bold">Idle Robots</h3>
          <p className="text-4xl font-extrabold">{idleRobots}</p>
        </div>

        <div className={`${cardGradient} p-6 rounded-xl`}>
          <h3 className="text-xl font-bold">Busy Robots</h3>
          <p className="text-4xl font-extrabold">{busyRobots}</p>
        </div>
      </div>

      {/* KPI Cards Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className={`${cardGradient} p-6 rounded-xl`}>
          <h3 className="text-xl font-bold">Pending Tasks</h3>
          <p className="text-4xl font-extrabold">{pendingTasks}</p>
        </div>

        <div className={`${cardGradient} p-6 rounded-xl`}>
          <h3 className="text-xl font-bold">Low Stock Items</h3>
          <p className="text-4xl font-extrabold">{lowStock}</p>
        </div>

        <div className={`${cardGradient} p-6 rounded-xl`}>
          <h3 className="text-xl font-bold">Completed Tasks</h3>
          <p className="text-4xl font-extrabold">{completedTasks}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow-xl p-6">
        <h3 className="text-xl font-bold mb-4">Robot Status Distribution</h3>

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
