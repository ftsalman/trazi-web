import React from "react";
import { CardContainer } from "../ui/CardContainer";
import { Area, AreaChart, Line, ResponsiveContainer, Tooltip } from "recharts";

export const TodayRevenueCard = ({
  data = [],
  isLoading = false,
  onFetchData = () => {},
}) => {
  return (
    <>
      <CardContainer>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">Today Revenue</p>
            <h2 className="text-3xl font-bold text-[#0A214F] mt-1">$324.5</h2>
          </div>

        
          <span className="text-sm font-semibold text-[#05CD99]">▲ +7.45%</span>
        </div>

        {/* CHART */}
        <div className="w-full h-[245px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
          
              <defs>
                <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0BCC85" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#0BCC85" stopOpacity={0.05} />
                </linearGradient>
              </defs>

          
              <Area
                type="monotone"
                dataKey="value"
                stroke="#0BCC85"
                strokeWidth={3}
                fill="url(#revGradient)"
              />

           
              <Line
                type="monotone"
                dataKey="value"
                stroke="#0BCC85"
                strokeWidth={3}
                dot={false}
              />

              <Tooltip cursor={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContainer>
    </>
  );
};
