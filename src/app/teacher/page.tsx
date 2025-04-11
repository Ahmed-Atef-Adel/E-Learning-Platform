"use client"

import TeacherSideMenu from "../components/TeacherSideMenu/TeacherSideMenu";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function TeacherDashboard() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Student Performance',
        data: [80, 75, 88, 90, 85, 70, 65, 77, 80, 90, 95, 92],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-200 via-red-100 to-gray-300">
      {/* Teacher Side Menu */}
      <TeacherSideMenu />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-white bg-opacity-95 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-700">Welcome to the Teacher Dashboard!</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Total Courses</h3>
            <p className="text-4xl text-red-700 mt-4">5</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Total Students</h3>
            <p className="text-4xl text-red-700 mt-4">120</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Pending Reports</h3>
            <p className="text-4xl text-red-700 mt-4">2</p>
          </div>
        </div>

        {/* Overview and Recent Reports */}
        <div className="grid grid-cols-3 gap-8">
          {/* Overview Chart */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Student Performance Overview</h3>
            <Bar data={chartData} options={{ maintainAspectRatio: true }} />
          </div>

          {/* Recent Reports */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Recent Reports</h3>
            <p className="text-sm text-gray-500 mb-4">You have 2 pending reports.</p>
            <ul className="divide-y divide-gray-200">
              <li className="py-2 flex justify-between">
                <div>
                  <p className="text-gray-800 font-medium">Math Report</p>
                  <p className="text-sm text-gray-500">Due: 25th Jan</p>
                </div>
                <p className="text-gray-900 font-semibold">Pending</p>
              </li>
              <li className="py-2 flex justify-between">
                <div>
                  <p className="text-gray-800 font-medium">Science Report</p>
                  <p className="text-sm text-gray-500">Due: 28th Jan</p>
                </div>
                <p className="text-gray-900 font-semibold">Pending</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
