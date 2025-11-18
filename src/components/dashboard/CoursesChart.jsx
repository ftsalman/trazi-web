import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const CoursesChart = ({
  data = [],
  onFetch = () => {},
  isLoading = false,
}) => {
  return (
    <>
      <div className="w-full bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Courses</h2>

        <div className="w-full h-[225px]">
          <ResponsiveContainer>
            <BarChart data={data} barSize={35}>
              <XAxis dataKey="month" tick={{ fill: "#555" }} tickLine={false} />
              <YAxis tick={{ fill: "#555" }} />
              <Tooltip cursor={{ fill: "transparent" }} />
              <Bar
                dataKey="programming"
                stackId="courses"
                fill="#FFD700"
              />{" "}
              <Bar dataKey="design" stackId="courses" fill="#FFA500" />{" "}
              <Bar dataKey="technology" stackId="courses" fill="#6A5500" />{" "}
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-around gap-6 mt-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-[#FFD700]"></span>
            <p>Programing</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-[#FFA500]"></span>
            <p>Graphic Design</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-[#6A5500]"></span>
            <p>Technology</p>
          </div>
        </div>
      </div>
    </>
  );
};
