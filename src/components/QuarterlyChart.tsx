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
import { QuarterlyData } from "../data/mockData";
import { colors } from "../constants/colors";

interface QuarterlyChartProps {
  data: QuarterlyData[];
}

const QuarterlyChart: React.FC<QuarterlyChartProps> = ({ data }) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-xl border border-slate-200">
          <p className="text-slate-700 font-semibold">
            {payload[0].payload.quarter}
          </p>
          {payload.map((entry: any) => (
            <p key={entry.dataKey} style={{ color: entry.color }}>
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
      <h3 className="text-lg font-semibold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent mb-6">
        📅 Quarterly Performance
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={colors.divider} />
          <XAxis
            dataKey="quarter"
            stroke={colors.textLight}
            style={{ fontSize: "12px" }}
          />
          <YAxis stroke={colors.textLight} style={{ fontSize: "12px" }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="circle" />
          <Bar
            dataKey="inspections"
            fill={colors.neutral}
            radius={[8, 8, 0, 0]}
          />
          <Bar dataKey="ofis" fill={colors.ofi} radius={[8, 8, 0, 0]} />
          <Bar
            dataKey="highPriority"
            fill={colors.highPriority}
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default QuarterlyChart;
