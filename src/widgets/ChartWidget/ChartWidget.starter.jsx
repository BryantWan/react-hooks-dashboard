import { useState, useEffect } from 'react';
import { mockChartApi } from '../../utils/mockApi';

/**
 * Chart Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Fetch and display chart data
 * - Calculate dynamic values for visualization
 * - Handle loading states
 * - Use .then() for promises
 *
 * TODO: Complete the missing parts marked with comments
 */
function ChartWidget() {
  // TODO: Initialize state for chartData (starts null)


  // TODO: Use useEffect to fetch chart data on mount
  useEffect(() => {
    // Fetch data from mockChartApi.getChartData()
    // Use .then() to set chartData when promise resolves


  }, []);

  // TODO: Show loading message if chartData is null
  if (true) return <div>Loading...</div>;

  // TODO: Calculate max value from chartData.datasets[0].data
  // Hint: Use Math.max(...chartData.datasets[0].data)
  const maxValue = 100;

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">Sales Chart</h3>

      <div className="w-full p-6 bg-white border-2 border-gray-300 rounded-lg">
        <div className="flex items-end justify-around h-64 gap-2">
          {chartData.labels.map((label, index) => {
            const value = chartData.datasets[0].data[index];
            const height = (value / maxValue) * 100;

            return (
              <div key={label} className="flex flex-col items-center flex-1">
                <div className="text-sm font-bold mb-2">${value.toFixed(0)}</div>
                <div
                  className="w-full bg-blue-500 rounded-t transition-all duration-500"
                  style={{ height: `${height}%` }}
                />
                <div className="text-xs mt-2">{label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChartWidget;
