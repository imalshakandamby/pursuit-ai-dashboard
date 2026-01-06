import React, { useState } from "react";
import { Inspection } from "../data/mockData";
import { ChevronDown } from "lucide-react";

interface InspectionsTableProps {
  data: Inspection[];
}

const InspectionsTable: React.FC<InspectionsTableProps> = ({ data }) => {
  const [sortKey, setSortKey] = useState<keyof Inspection>("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const sortedData = [...data].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
    return sortOrder === "asc" ? comparison : -comparison;
  });

  const handleSort = (key: keyof Inspection) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("desc");
    }
  };

  const SortHeader = ({
    label,
    column,
  }: {
    label: string;
    column: keyof Inspection;
  }) => (
    <th
      onClick={() => handleSort(column)}
      className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider bg-gradient-to-r from-slate-50 to-slate-100 cursor-pointer hover:bg-slate-200 transition-colors"
    >
      <div className="flex items-center space-x-2">
        <span>{label}</span>
        {sortKey === column && (
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              sortOrder === "asc" ? "rotate-180" : ""
            }`}
          />
        )}
      </div>
    </th>
  );

  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="min-w-full divide-y divide-slate-200 bg-white">
        <thead>
          <tr>
            <SortHeader label="Date" column="date" />
            <SortHeader label="Score" column="score" />
            <SortHeader label="OFIs" column="ofis" />
            <SortHeader label="High Priority" column="highPriority" />
            <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider bg-gradient-to-r from-slate-50 to-slate-100">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {sortedData.map((inspection, index) => (
            <tr
              key={index}
              className="hover:bg-blue-50 transition-colors duration-200"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-medium">
                {new Date(inspection.date).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-12 h-6 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {inspection.score}%
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-amber-100 text-amber-800">
                  {inspection.ofis} OFIs
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-800">
                  {inspection.highPriority} Critical
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-sm">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InspectionsTable;
