

import React, { useState } from 'react';
import data from '../../Json/TableData.json'

function QuizTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [viewData, setViewData] = useState(null);

  // Handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle filter change
  const handleFilterChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  // Filter data based on search term and status
  const filteredData = data.filter((row) => {
    const matchesSearch = row.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus ? row.status === selectedStatus : true;
    return matchesSearch && matchesStatus;
  });

  // Handle view button click
  const handleView = (row) => {
    setViewData(row);
  };

  return (
    <div className="p-4">
      {/* Search and Filter Section */}
      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 rounded w-full"
        />
        <select
          value={selectedStatus}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">All Statuses</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          {/* Add more options as needed based on your data */}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question Count</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attempts</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((row, index) => (
              <tr key={index} onClick={() => handleView(row)} className="cursor-pointer hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.questionCount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.duration}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.attempts}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Component */}
      {viewData && (
        <div className="mt-4 p-4 border rounded bg-gray-50">
          <h2 className="text-lg font-bold mb-2">{viewData.title}</h2>
          <p><strong>Question Count:</strong> {viewData.questionCount}</p>
          <p><strong>Duration:</strong> {viewData.duration}</p>
          <p><strong>Attempts:</strong> {viewData.attempts}</p>
          <p><strong>Status:</strong> {viewData.status}</p>
          <button
            onClick={() => setViewData(null)}
            className="mt-2 text-red-600 hover:text-red-900"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizTable;
