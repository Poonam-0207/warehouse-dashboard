export default function RobotCard({ robot }) {
  const statusColor = {
    Idle: "bg-green-100 text-green-700",
    Busy: "bg-yellow-100 text-yellow-700",
    Charging: "bg-blue-100 text-blue-700",
  };

  // Motion One battery bar animation
  setTimeout(() => {
    window.motion.animate(
      `.battery-${robot.id}`,
      { width: `${robot.battery}%` },
      { duration: 1 }
    );
  }, 50);

  return (
    <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition-all">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Robot {robot.id}</h3>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor[robot.status]}`}
        >
          {robot.status}
        </span>
      </div>

      <p className="text-gray-500 mt-2">Location: {robot.location}</p>

      <div className="mt-4">
        <p className="text-sm font-medium">Battery: {robot.battery}%</p>

        <div className="w-full bg-gray-200 h-3 rounded-full mt-1">
          <div
            className={`battery-${robot.id} h-3 bg-blue-500 rounded-full`}
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
