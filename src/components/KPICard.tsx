import React from "react";
import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: "blue" | "amber" | "red";
}

const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  icon: Icon,
  color,
}) => {
  const colorConfig = {
    blue: {
      gradient: "from-blue-50 to-blue-100",
      icon: "text-blue-600",
      text: "text-blue-700",
      border: "border-blue-200/50",
    },
    amber: {
      gradient: "from-amber-50 to-amber-100",
      icon: "text-amber-600",
      text: "text-amber-700",
      border: "border-amber-200/50",
    },
    red: {
      gradient: "from-red-50 to-red-100",
      icon: "text-red-600",
      text: "text-red-700",
      border: "border-red-200/50",
    },
  };

  const config = colorConfig[color];

  return (
    <div
      className={`relative p-6 rounded-xl border ${config.border} bg-gradient-to-br ${config.gradient} shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group`}
    >
      {/* Background gradient accent */}
      <div
        className="absolute top-0 right-0 -m-8 w-32 h-32 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
        style={{
          background:
            color === "blue"
              ? "#3b82f6"
              : color === "amber"
              ? "#f59e0b"
              : "#ef4444",
        }}
      />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
            {title}
          </p>
          <p className={`text-4xl font-bold ${config.text} mt-2`}>
            {value.toLocaleString()}
          </p>
        </div>
        <div
          className={`p-3 rounded-lg ${config.gradient} border ${config.border}`}
        >
          <Icon className={`w-8 h-8 ${config.icon}`} />
        </div>
      </div>
    </div>
  );
};

export default KPICard;
