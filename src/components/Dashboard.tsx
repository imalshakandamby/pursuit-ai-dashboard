import React, { useState } from "react";
import {
  TrendingUp,
  AlertTriangle,
  FileText,
  BarChart3,
  PieChart,
} from "lucide-react";
import {
  kpiData,
  inspections,
  monthlyTrends,
  categories,
  quarterlyData,
} from "../data/mockData";
import KPICard from "./KPICard";
import DateRangeFilter from "./DateRangeFilter";
import InspectionsTable from "./InspectionsTable";
import TrendChart from "./TrendChart";
import CategoryChart from "./CategoryChart";
import QuarterlyChart from "./QuarterlyChart";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [dateRange, setDateRange] = useState({
    start: "2023-01-01",
    end: "2023-12-31",
  });

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "inspections", label: "Inspections", icon: FileText },
    { id: "trends", label: "Trends", icon: TrendingUp },
    { id: "categories", label: "Categories", icon: PieChart },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/70 border-b border-slate-200 px-6 py-6 shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Safety Performance Dashboard
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Real-time monitoring and analytics
            </p>
          </div>
          <DateRangeFilter dateRange={dateRange} onChange={setDateRange} />
        </div>
      </header>

      {/* KPI Cards */}
      <div className="px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Key Performance Indicators
          </h2>
          <p className="text-slate-500">Overview of your safety metrics</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Total Inspections"
            value={kpiData.totalInspections}
            icon={FileText}
            color="blue"
          />
          <KPICard
            title="Total OFIs"
            value={kpiData.totalOfis}
            icon={AlertTriangle}
            color="amber"
          />
          <KPICard
            title="High Priority"
            value={kpiData.totalHighPriority}
            icon={AlertTriangle}
            color="red"
          />
          <KPICard
            title="Categories"
            value={kpiData.totalCategories}
            icon={BarChart3}
            color="blue"
          />
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 bg-white/50 p-1 rounded-lg backdrop-blur w-fit">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                    : "text-slate-600 hover:bg-white/70"
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TrendChart data={monthlyTrends} />
                <CategoryChart data={categories} />
              </div>
              <QuarterlyChart data={quarterlyData} />
            </div>
          )}
          {activeTab === "inspections" && (
            <InspectionsTable data={inspections} />
          )}
          {activeTab === "trends" && (
            <TrendChart data={monthlyTrends} detailed />
          )}
          {activeTab === "categories" && (
            <CategoryChart data={categories} detailed />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
