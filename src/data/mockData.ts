export interface Inspection {
  date: string;
  score: number;
  ofis: number;
  highPriority: number;
}

export interface MonthlyData {
  month: string;
  inspections: number;
  ofis: number;
  highPriority: number;
}

export interface CategoryData {
  name: string;
  ofis: number;
  highPriority: number;
}

export interface QuarterlyData {
  quarter: string;
  inspections: number;
  ofis: number;
  highPriority: number;
}

export const inspections: Inspection[] = [
  { date: "2023-01-15", score: 85, ofis: 12, highPriority: 3 },
  { date: "2023-02-10", score: 90, ofis: 8, highPriority: 1 },
  { date: "2023-03-05", score: 88, ofis: 15, highPriority: 4 },
  { date: "2023-04-20", score: 92, ofis: 6, highPriority: 2 },
  { date: "2023-05-12", score: 87, ofis: 18, highPriority: 5 },
  { date: "2023-06-08", score: 91, ofis: 9, highPriority: 1 },
  { date: "2023-07-25", score: 89, ofis: 14, highPriority: 3 },
  { date: "2023-08-14", score: 93, ofis: 7, highPriority: 2 },
  { date: "2023-09-30", score: 86, ofis: 16, highPriority: 4 },
  { date: "2023-10-18", score: 94, ofis: 5, highPriority: 1 },
  { date: "2023-11-22", score: 88, ofis: 13, highPriority: 3 },
  { date: "2023-12-10", score: 90, ofis: 11, highPriority: 2 },
];

export const monthlyTrends: MonthlyData[] = [
  { month: "Jan", inspections: 45, ofis: 120, highPriority: 15 },
  { month: "Feb", inspections: 52, ofis: 95, highPriority: 12 },
  { month: "Mar", inspections: 48, ofis: 135, highPriority: 18 },
  { month: "Apr", inspections: 55, ofis: 85, highPriority: 10 },
  { month: "May", inspections: 50, ofis: 145, highPriority: 20 },
  { month: "Jun", inspections: 58, ofis: 90, highPriority: 11 },
  { month: "Jul", inspections: 53, ofis: 125, highPriority: 16 },
  { month: "Aug", inspections: 60, ofis: 80, highPriority: 9 },
  { month: "Sep", inspections: 47, ofis: 150, highPriority: 22 },
  { month: "Oct", inspections: 62, ofis: 75, highPriority: 8 },
  { month: "Nov", inspections: 49, ofis: 130, highPriority: 17 },
  { month: "Dec", inspections: 56, ofis: 100, highPriority: 13 },
];

export const categories: CategoryData[] = [
  { name: "Electrical Safety", ofis: 45, highPriority: 8 },
  { name: "Fall Protection", ofis: 38, highPriority: 12 },
  { name: "Hazardous Materials", ofis: 52, highPriority: 15 },
  { name: "Equipment Operation", ofis: 29, highPriority: 6 },
  { name: "Personal Protective Equipment", ofis: 41, highPriority: 9 },
  { name: "Fire Safety", ofis: 33, highPriority: 7 },
  { name: "Ergonomics", ofis: 27, highPriority: 4 },
  { name: "Environmental Compliance", ofis: 36, highPriority: 10 },
];

export const quarterlyData: QuarterlyData[] = [
  { quarter: "Q1", inspections: 145, ofis: 350, highPriority: 45 },
  { quarter: "Q2", inspections: 163, ofis: 320, highPriority: 41 },
  { quarter: "Q3", inspections: 160, ofis: 355, highPriority: 47 },
  { quarter: "Q4", inspections: 167, ofis: 305, highPriority: 38 },
];

// KPI summaries
export const kpiData = {
  totalInspections: inspections.length,
  totalOfis: inspections.reduce((sum, i) => sum + i.ofis, 0),
  totalHighPriority: inspections.reduce((sum, i) => sum + i.highPriority, 0),
  totalCategories: categories.length,
};
