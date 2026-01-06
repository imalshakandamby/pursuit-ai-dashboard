# Safety Performance Dashboard

A modern, enterprise-grade Safety Performance dashboard built with React, TypeScript, and Recharts. This dashboard provides comprehensive visualization and monitoring of safety inspections, observations for improvement (OFIs), and high-priority items.

## Features

- **KPI Summary Cards**: Quick overview of total inspections, OFIs, high priority items, and categories
- **Global Date Range Filter**: Filter data across all charts and tables
- **Tabbed Interface**: Organized views for Overview, Inspections, Trends, and Categories
- **Interactive Charts**:
  - Monthly trend visualization with inspections, OFIs, and high-priority tracking
  - Category-based bar charts showing distribution of issues
  - Quarterly performance comparison
- **Data Table**: Inspections table with sorting and detail views
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Modern UI**: Clean, enterprise-grade design with consistent color scheme

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Recharts** - Data visualization library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Project Structure

```
src/
├── components/
│   ├── Dashboard.tsx          # Main dashboard layout with tabs
│   ├── KPICard.tsx           # KPI summary cards
│   ├── DateRangeFilter.tsx   # Date range selector
│   ├── InspectionsTable.tsx  # Inspections data table
│   ├── TrendChart.tsx        # Monthly trends visualization
│   ├── CategoryChart.tsx     # Category-based charts
│   └── QuarterlyChart.tsx    # Quarterly performance chart
├── data/
│   └── mockData.ts           # Mock data and interfaces
├── constants/
│   └── colors.ts             # Color scheme constants
├── App.tsx                   # Root component
└── main.tsx                  # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Color System

The dashboard uses a consistent color scheme:

- **OFIs**: Amber (#f59e0b)
- **High Priority**: Red (#ef4444)
- **Neutral Metrics**: Blue (#3b82f6)
- **Background**: Slate-50 (#f8fafc)
- **Cards**: White (#ffffff)

## Components

### KPICard

Displays a metric with icon, value, and color coding.

### DateRangeFilter

Global date range filter for filtering data across the dashboard.

### TrendChart

Monthly trend visualization with composed chart showing inspections, OFIs, and high-priority items.

### CategoryChart

Horizontal bar chart showing OFIs and high-priority items by category.

### QuarterlyChart

Quarterly performance comparison across all key metrics.

### InspectionsTable

Interactive table displaying individual inspection records with sorting and detail actions.

## Customization

### Adding New Data

Update the mock data in `src/data/mockData.ts` with your actual data sources.

### Modifying Colors

Adjust colors in `src/constants/colors.ts`.

### Extending Components

Components are designed to be composable. Create new variations by extending existing components.

## Development

- Hot Module Replacement (HMR) enabled for fast development
- TypeScript strict mode for type safety
- ESLint configured for code quality

## Production Build

The production build is optimized for performance with:

- Code minification
- Tree shaking
- CSS optimization

## License

Copyright (c) 2024. All rights reserved.
