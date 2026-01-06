import React from "react";
import { Calendar } from "lucide-react";

interface DateRangeFilterProps {
  dateRange: { start: string; end: string };
  onChange: (range: { start: string; end: string }) => void;
}

const DateRangeFilter: React.FC<DateRangeFilterProps> = ({
  dateRange,
  onChange,
}) => {
  return (
    <div className="flex items-center space-x-4 bg-white/70 backdrop-blur px-4 py-2 rounded-lg border border-slate-200/50">
      <div className="flex items-center space-x-2">
        <Calendar className="w-5 h-5 text-blue-600" />
        <span className="text-sm font-semibold text-slate-700">
          Date Range:
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <input
          type="date"
          value={dateRange.start}
          onChange={(e) => onChange({ ...dateRange, start: e.target.value })}
          className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white hover:border-slate-400 transition-colors"
        />
        <span className="text-slate-400">→</span>
        <input
          type="date"
          value={dateRange.end}
          onChange={(e) => onChange({ ...dateRange, end: e.target.value })}
          className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white hover:border-slate-400 transition-colors"
        />
      </div>
    </div>
  );
};

export default DateRangeFilter;
