"use client"

import StudentSideMenu from "../components/StudentSideMenu/StudentSideMenu";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function StudentDashboard() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Course Progress',
        data: [60, 75, 80, 85, 70, 90, 88, 92, 85, 90, 95, 100],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-200 via-blue-100 to-gray-300">
      {/* Student Side Menu */}
      <StudentSideMenu />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-white bg-opacity-95 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-700">Welcome to the Student Dashboard!</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">My Courses</h3>
            <p className="text-4xl text-blue-700 mt-4">3</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Assignments</h3>
            <p className="text-4xl text-blue-700 mt-4">5</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Completed</h3>
            <p className="text-4xl text-blue-700 mt-4">2</p>
          </div>
        </div>

        {/* Overview and Recent Assignments */}
        <div className="grid grid-cols-3 gap-8">
          {/* Course Progress Chart */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Course Progress Overview</h3>
            <Bar data={chartData} options={{ maintainAspectRatio: true }} />
          </div>

          {/* Recent Assignments */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Recent Assignments</h3>
            <p className="text-sm text-gray-500 mb-4">You have 3 pending assignments.</p>
            <ul className="divide-y divide-gray-200">
              <li className="py-2 flex justify-between">
                <div>
                  <p className="text-gray-800 font-medium">Math Assignment</p>
                  <p className="text-sm text-gray-500">Due: 25th Jan</p>
                </div>
                <p className="text-gray-900 font-semibold">Pending</p>
              </li>
              <li className="py-2 flex justify-between">
                <div>
                  <p className="text-gray-800 font-medium">Science Assignment</p>
                  <p className="text-sm text-gray-500">Due: 28th Jan</p>
                </div>
                <p className="text-gray-900 font-semibold">Pending</p>
              </li>
              <li className="py-2 flex justify-between">
                <div>
                  <p className="text-gray-800 font-medium">History Assignment</p>
                  <p className="text-sm text-gray-500">Due: 30th Jan</p>
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
