const { motion } = window.framerMotion;

export default function TaskCard({ task }) {
  const statusColors = {
    Pending: "bg-yellow-100 text-yellow-700",
    "In-progress": "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
    >
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">{task.description}</p>
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[task.status]}`}
        >
          {task.status}
        </span>
      </div>

      <p className="mt-3 text-gray-500">Assigned Robot: {task.robot}</p>
    </motion.div>
  );
}
