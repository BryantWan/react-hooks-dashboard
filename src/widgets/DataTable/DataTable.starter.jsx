import { useState, useEffect } from 'react';
import { mockDataApi } from '../../utils/mockApi';

/**
 * Data Table Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Implement pagination
 * - Fetch data based on page changes
 * - Calculate total pages
 * - Handle prev/next navigation
 *
 * TODO: Complete the missing parts marked with comments
 */
function DataTable() {
  // TODO: Initialize state for data (starts empty array)


  // TODO: Initialize state for page (starts at 1)


  // TODO: Initialize state for total (starts at 0)


  const perPage = 10;

  // TODO: Use useEffect to fetch data when page changes
  useEffect(() => {
    // Call mockDataApi.getData(page, perPage)
    // Use .then() to set data and total from response


  }, []); // TODO: Add page as dependency

  // TODO: Calculate totalPages (Math.ceil(total / perPage))
  const totalPages = 1;

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-3xl">
      <h3 className="text-2xl font-bold text-gray-800">Data Table</h3>

      <div className="w-full overflow-x-auto">
        <table className="w-full border-2 border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Value</th>
              <th className="px-4 py-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Map through data array */}
            {[].map(item => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.status}</td>
                <td className="px-4 py-2 border">${item.value}</td>
                <td className="px-4 py-2 border">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-2">
        {/* TODO: Implement Previous button - decrease page, disabled on page 1 */}
        <button
          onClick={() => {}}
          disabled={false}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded-lg"
        >
          Previous
        </button>
        <span className="px-4 py-2">Page 1 of 1</span>
        {/* TODO: Implement Next button - increase page, disabled on last page */}
        <button
          onClick={() => {}}
          disabled={false}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DataTable;
