import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MonthlyData } from "../data/mockData";
import { colors } from "../constants/colors";

interface TrendChartProps {
  data: MonthlyData[];
  detailed?: boolean;
}

const TrendChart: React.FC<TrendChartProps> = ({ data, detailed }) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-xl border border-slate-200">
          <p className="text-slate-700 font-semibold">
            {payload[0].payload.month}
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
      <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
        {detailed ? "📊 Monthly Trends - Detailed" : "📈 Monthly Trends"}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorInspections" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.neutral} stopOpacity={0.8} />
              <stop offset="95%" stopColor={colors.neutral} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={colors.divider} />
          <XAxis
            dataKey="month"
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
          {detailed && (
            <Line
              type="monotone"
              dataKey="inspections"
              stroke={colors.neutralDark}
              strokeWidth={3}
              dot={{ fill: colors.neutral, r: 5 }}
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;
