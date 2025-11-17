import React from "react";
import { StatesList } from "../components/dashboard/StatesList";
import { EnrollmentsChart } from "../components/dashboard/EnrollmentsChart";
import { EarningsChart } from "../components/dashboard/EarningsChart";
import { CoursesChart } from "../components/dashboard/CoursesChart";

const ENROLL_DATA = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 70 },
  { month: "Mar", value: 60 },
  { month: "Apr", value: 65 },
  { month: "May", value: 55 },
  { month: "Jun", value: 134, highlight: true },
  { month: "Jul", value: 50 },
  { month: "Aug", value: 90 },
  { month: "Sep", value: 30 },
  { month: "Oct", value: 75 },
  { month: "Nov", value: 45 },
  { month: "Dec", value: 60 },
];

const DUMMY_CARD = {
  TOTAL: [{ TOTAL_USERS: 1520 }],
  ACTIVE: [{ ACTIVE_USERS: 430 }],
  COURSES: [
    {
      TOTAL_COURSES: 92,
      ACTIVE_COURSES: 76,
      CHART_VALUES: [10, 20, 15, 25, 8],
    },
  ],
};

const EARNINGS_DATA = [
  { value: 20 },
  { value: 40 },
  { value: 30 },
  { value: 60 },
  { value: 50 },
  { value: 70 },
  { value: 65 },
  { value: 80 },
];


const COURSES_DATA = [
  { month: "Dec", programming: 200, design: 150, technology: 120 },
  { month: "Jan", programming: 220, design: 180, technology: 140 },
  { month: "Feb", programming: 150, design: 120, technology: 100 },
  { month: "Mar", programming: 180, design: 150, technology: 120 },
  { month: "Apr", programming: 100, design: 60, technology: 50 },
  { month: "May", programming: 160, design: 130, technology: 90 },
  { month: "Jun", programming: 240, design: 200, technology: 150 },
  { month: "Jul", programming: 230, design: 180, technology: 140 },
  { month: "Aug", programming: 150, design: 100, technology: 80 },
  { month: "Sep", programming: 170, design: 140, technology: 100 },
];

export const DashboardPage = () => {
  return (
    <div className="w-full py-4 space-y-8">
      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome to Tarzi
        </h2>
        <p className="text-sm text-gray-500 mt-1">Hi Admin,</p>
      </div>

      {/* CARDS */}
      <StatesList data={DUMMY_CARD} />

      {/* CHART ROW */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
        <div className="xl:col-span-2">
          <EnrollmentsChart data={ENROLL_DATA} />
        </div>

        <div className="xl:col-span-1">
          <EarningsChart data={EARNINGS_DATA} />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
        <div className="xl:col-span-2">
          <CoursesChart 
          data={COURSES_DATA}
          
          />
        </div>

        <div className="xl:col-span-1">
          <EarningsChart data={EARNINGS_DATA} />
        </div>
      </div>
    </div>
  );
};
