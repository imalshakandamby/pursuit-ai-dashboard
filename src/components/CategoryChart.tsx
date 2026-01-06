import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CategoryData } from "../data/mockData";
import { colors } from "../constants/colors";

interface CategoryChartProps {
  data: CategoryData[];
  detailed?: boolean;
}

const CategoryChart: React.FC<CategoryChartProps> = ({ data, detailed }) => {
  // Sort by total issues (OFIs + High Priority) and take top 6 unless detailed view
  const displayData = detailed
    ? data
    : data
        .sort((a, b) => b.ofis + b.highPriority - (a.ofis + a.highPriority))
        .slice(0, 6);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-xl border border-slate-200">
          <p className="text-slate-700 font-semibold">
            {payload[0].payload.name}
          </p>
          {payload.map((entry: any) => (
            <p
              key={entry.dataKey}
              style={{ color: entry.color }}
              className="text-sm"
            >
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-gradient-to-br from-white to-slate-50 rounded-lg p-6 border border-slate-200 shadow-md">
      <h3 className="text-lg font-semibold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-6">
        {detailed ? "📋 All Categories" : "🎯 Top Categories by Issues"}
      </h3>
      <ResponsiveContainer width="100%" height={detailed ? 400 : 300}>
        <BarChart
          data={displayData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 200, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={colors.divider} />
          <XAxis
            type="number"
            stroke={colors.textLight}
            style={{ fontSize: "12px" }}
          />
          <YAxis
            dataKey="name"
            type="category"
            width={190}
            tick={{ fontSize: 12 }}
            stroke={colors.textLight}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="circle" />
          <Bar dataKey="ofis" fill={colors.ofi} radius={[0, 8, 8, 0]} />
          <Bar
            dataKey="highPriority"
            fill={colors.highPriority}
            radius={[0, 8, 8, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;
