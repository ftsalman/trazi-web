import React from "react";
import { CardContainer } from "../ui/CardContainer";
import { Area, AreaChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import { IconChatBar } from "../../assets/icons/interfaceIcons2";
import { IconMenuDots } from "../../assets/icons/InterfaceIcons";
import { Button } from "../ui/button/Button";

export const EarningsChart = ({
  data = [],
  onFetch = () => {},
  isLoading = false,
}) => {
  return (
    <CardContainer className="w-full">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1 flex flex-col items-center text-center gap-2">
          <p className="text-sm text-gray-500">This month earnings</p>

          {isLoading ? (
            <div className="h-8 w-24 bg-gray-200 animate-pulse rounded-md"></div>
          ) : (
            <h2 className="text-4xl font-bold text-gray-800">₹ 12602</h2>
          )}

          {/* % Badge */}
          {!isLoading && (
            <span className="bg-green-100 px-3 py-1 rounded-full font-medium text-[#05CD99] text-sm">
              +2.45%
            </span>
          )}
        </div>

        {/* Icon */}
        <Button
          variant="tertiary"
          size="sm"
          className="p-2 bg-gray-50 rounded-lg "
        >
          <IconMenuDots size={20} className="text-yellow-500" />
        </Button>
      </div>

      {/* Chart */}
      <div className="w-full h-[180px] mt-4">
        {isLoading ? (
          <div className="w-full h-full bg-gray-100 animate-pulse rounded-lg"></div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data.length ? data : [{ value: 0 }]}>
              {/* Gradient */}
              <defs>
                <linearGradient id="earnGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFBE3D" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.1} />
                </linearGradient>
              </defs>

              {/* Smooth Area */}
              <Area
                type="monotone"
                dataKey="value"
                stroke="#FFBE3D"
                strokeWidth={3}
                fill="url(#earnGradient)"
              />

              {/* Line */}
              <Line
                type="monotone"
                dataKey="value"
                stroke="#FFBE3D"
                strokeWidth={3}
                dot={false}
              />

              <Tooltip cursor={false} />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </CardContainer>
  );
};
