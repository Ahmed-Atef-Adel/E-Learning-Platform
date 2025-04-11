"use client";

import { useState } from "react";

export default function ReportsPage() {
  const [search, setSearch] = useState("");
  const [reports, setReports] = useState([
    { id: 1, title: "Report 1", description: "This is report 1", date: "2025-01-01", status: "Active" },
    { id: 2, title: "Report 2", description: "This is report 2", date: "2025-01-02", status: "Inactive" },
    { id: 3, title: "Report 3", description: "This is report 3", date: "2025-01-03", status: "Active" },
    // More reports
  ]);

  const [selectedReport, setSelectedReport] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newReport, setNewReport] = useState({ title: "", description: "", date: "", status: "Active" });

  const filteredReports = reports.filter(
    (report) => report.title.toLowerCase().includes(search.toLowerCase()) ||
    report.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddReport = () => {
    setReports([...reports, { ...newReport, id: reports.length + 1 }]);
    setIsAddModalOpen(false);
  };

  const handleViewReport = (report) => {
    setSelectedReport(report);
    setIsViewModalOpen(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Reports</h1>

      {/* Search & Add Report Button */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/3"
          placeholder="Search reports..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Report
        </button>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReports.map((report) => (
          <div key={report.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-gray-800">{report.title}</h2>
            <p className="text-gray-600 mt-2">{report.description}</p>
            <p className="text-gray-500 text-sm mt-2">Date: {report.date}</p>
            <span
              className={`px-3 py-1 rounded-full text-white ${report.status === "Active" ? "bg-green-500" : "bg-red-500"}`}
            >
              {report.status}
            </span>
            <div className="flex mt-4 space-x-2">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm" onClick={() => handleViewReport(report)}>
                View
              </button>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm">Edit</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Report Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Add New Report</h2>
            <div className="mb-4">
              <input
                type="text"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Report Title"
                value={newReport.title}
                onChange={(e) => setNewReport({ ...newReport, title: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <textarea
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Report Description"
                value={newReport.description}
                onChange={(e) => setNewReport({ ...newReport, description: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                value={newReport.date}
                onChange={(e) => setNewReport({ ...newReport, date: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                value={newReport.status}
                onChange={(e) => setNewReport({ ...newReport, status: e.target.value })}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                onClick={() => setIsAddModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                onClick={handleAddReport}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Report Modal */}
      {isViewModalOpen && selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Report Details</h2>
            <p><strong>Title:</strong> {selectedReport.title}</p>
            <p><strong>Description:</strong> {selectedReport.description}</p>
            <p><strong>Date:</strong> {selectedReport.date}</p>
            <p><strong>Status:</strong> {selectedReport.status}</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                onClick={() => setIsViewModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
