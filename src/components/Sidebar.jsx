import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const navItem = (label, path, icon) => {
    const active = location.pathname === path;

    return (
      <Link
        to={path}
        className={`flex items-center gap-3 px-5 py-3 my-1 rounded-xl text-lg font-medium transition-all
          ${active ? "bg-blue-600 text-white shadow-xl scale-[1.02]" 
                   : "text-gray-700 hover:bg-blue-100"}
        `}
      >
        <span className="text-xl">{icon}</span>
        {label}
      </Link>
    );
  };

  return (
    <aside className="w-64 bg-white shadow-xl min-h-screen p-6 flex flex-col">
      <h2 className="text-3xl font-bold mb-10 text-blue-700 tracking-tight">
        Warehouse UI
      </h2>

      {navItem("Dashboard", "/", "📊")}
      {navItem("Robots", "/robots", "🤖")}
      {navItem("Tasks", "/tasks", "📝")}
      {navItem("Inventory", "/inventory", "📦")}

      <div className="flex-1" />

      <p className="text-gray-400 text-sm mt-6">© 2025 Warehouse System</p>
    </aside>
  );
}
