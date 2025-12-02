/* global window */
import { useState } from "react";
import inventoryData from "../data/inventory";

export default function Inventory() {
  const [search, setSearch] = useState("");

  const filtered = inventoryData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalItems = inventoryData.length;
  const lowStock = inventoryData.filter((i) => i.quantity <= 5).length;

  const cardGradient =
    "bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-xl";

  return (
    <div className="fade">
      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className={`${cardGradient} p-6 rounded-xl`}>
          <h3 className="text-xl font-bold mb-2">Total Items</h3>
          <p className="text-4xl font-extrabold">{totalItems}</p>
        </div>

        <div className={`${cardGradient} p-6 rounded-xl`}>
          <h3 className="text-xl font-bold mb-2">Low Stock Items</h3>
          <p className="text-4xl font-extrabold">{lowStock}</p>
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search item…"
        className="w-full p-3 border rounded-xl mb-6 shadow-sm focus:outline-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Inventory Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-xl">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 font-medium">Item Name</th>
              <th className="p-4 font-medium">Quantity</th>
              <th className="p-4 font-medium">Location</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50 transition-all"
              >
                <td className="p-4 font-semibold">{item.name}</td>

                <td
                  className={`p-4 font-semibold ${
                    item.quantity <= 5 ? "text-red-600" : "text-gray-700"
                  }`}
                >
                  {item.quantity}
                </td>

                <td className="p-4">{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <p className="text-gray-500 mt-4">No items found.</p>
      )}
    </div>
  );
}
