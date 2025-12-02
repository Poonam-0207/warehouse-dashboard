/* global window */
import { useState } from "react";
import tasksData from "../data/tasks";

export default function Tasks() {
  const [tasks, setTasks] = useState(tasksData);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const pending = tasks.filter((t) => t.status === "Pending").length;
  const inProgress = tasks.filter((t) => t.status === "In-progress").length;
  const completed = tasks.filter((t) => t.status === "Completed").length;

  const cardGradient =
    "bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-xl";

  const filtered = tasks.filter((task) =>
    task.description.toLowerCase().includes(search.toLowerCase())
  );

  const addTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: tasks.length + 1,
      description: e.target.description.value,
      robot: e.target.robot.value,
      status: "Pending",
    };

    setTasks([newTask, ...tasks]);

    setShowForm(false);
    e.target.reset();

    // Toast success
    window.motion.animate(
      "#toast",
      { opacity: [0, 1, 1, 0] },
      { duration: 3 }
    );
  };

  return (
    <div className="fade">
      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className={`${cardGradient} p-6 rounded-xl`}>
          <h3 className="text-xl font-bold mb-2">Pending Tasks</h3>
          <p className="text-4xl font-extrabold">{pending}</p>
        </div>

        <div className={`${cardGradient} p-6 rounded-xl`}>
          <h3 className="text-xl font-bold mb-2">In Progress</h3>
          <p className="text-4xl font-extrabold">{inProgress}</p>
        </div>

        <div className={`${cardGradient} p-6 rounded-xl`}>
          <h3 className="text-xl font-bold mb-2">Completed</h3>
          <p className="text-4xl font-extrabold">{completed}</p>
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search task…"
        className="w-full p-3 border rounded-xl mb-6 shadow-sm focus:outline-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Add Task Button */}
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 mb-6"
      >
        + Add Task
      </button>

      {/* Task List */}
      <div className="grid grid-cols-1 gap-4">
        {filtered.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
          >
            <div className="flex justify-between">
              <p className="text-lg font-semibold">{task.description}</p>
              <span className="text-gray-600">{task.status}</span>
            </div>
            <p className="text-gray-500 mt-2">Robot: {task.robot}</p>
          </div>
        ))}
      </div>

      {/* No results */}
      {filtered.length === 0 && (
        <p className="text-gray-500 mt-4">No tasks found.</p>
      )}

      {/* Add Task Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <form
            onSubmit={addTask}
            className="bg-white rounded-xl p-8 w-96 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-4">Add New Task</h3>

            <label className="font-medium text-sm">Description</label>
            <input
              required
              name="description"
              className="w-full p-2 border rounded-lg mb-4"
            />

            <label className="font-medium text-sm">Robot ID</label>
            <input
              required
              name="robot"
              className="w-full p-2 border rounded-lg mb-6"
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toast */}
      <div
        id="toast"
        className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg opacity-0"
      >
        Task added successfully!
      </div>
    </div>
  );
}
