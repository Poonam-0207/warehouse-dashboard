import { useLocation } from "react-router-dom";

export default function TopBar() {
  const location = useLocation();

  const pageTitles = {
    "/": "Dashboard Overview",
    "/robots": "Robots Overview",
    "/tasks": "Task Management",
    "/inventory": "Inventory",
  };

  const title = pageTitles[location.pathname] || "Warehouse Dashboard";

  return (
    <div className="bg-white shadow-lg rounded-xl px-6 py-4 mb-6 flex justify-between items-center">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>

      <div className="flex gap-6 items-center text-gray-700 text-xl">
        <span className="cursor-pointer hover:text-blue-600">🔍</span>
        <span className="cursor-pointer hover:text-blue-600">🔔</span>

        {/* Profile Avatar */}
        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow cursor-pointer">
          P
        </div>
      </div>
    </div>
  );
}
