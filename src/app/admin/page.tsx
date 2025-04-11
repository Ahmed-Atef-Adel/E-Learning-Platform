"use client"

import SideMenu from "../components/SideMenu/page";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export default function AdminDashboard() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [3000, 1500, 4500, 6000, 4800, 5000, 4000, 3800, 4600, 5500, 4900, 4100],
        backgroundColor: 'black',
      },
    ],
  };

  return (
    <div className="flex">
      {/* Side Menu */}
      <SideMenu />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">$45,231.89</p>
            <p className="text-sm text-green-600">+20.1% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-sm font-medium text-gray-500">Subscriptions</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">+2,350</p>
            <p className="text-sm text-green-600">+180.1% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-sm font-medium text-gray-500">Sales</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">+12,234</p>
            <p className="text-sm text-green-600">+19% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-sm font-medium text-gray-500">Active Now</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">+573</p>
            <p className="text-sm text-green-600">+201 since last hour</p>
          </div>
        </div>

        {/* Overview and Recent Sales */}
        <div className="grid grid-cols-3 gap-6">
          {/* Overview Chart */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Overview</h3>
            <Bar data={chartData} options={{ maintainAspectRatio: true }} />
          </div>

          {/* Recent Sales */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Recent Sales</h3>
            <p className="text-sm text-gray-500 mb-4">You made 265 sales this month.</p>
            <ul className="divide-y divide-gray-200">
              <li className="py-2 flex justify-between">
                <div>
                  <p className="text-gray-800 font-medium">Olivia Martin</p>
                  <p className="text-sm text-gray-500">olivia.martin@email.com</p>
                </div>
                <p className="text-gray-900 font-semibold">+$1,999.00</p>
              </li>
              <li className="py-2 flex justify-between">
                <div>
                  <p className="text-gray-800 font-medium">Jackson Lee</p>
                  <p className="text-sm text-gray-500">jackson.lee@email.com</p>
                </div>
                <p className="text-gray-900 font-semibold">+$1,999.00</p>
              </li>
              <li className="py-2 flex justify-between">
                <div>
                  <p className="text-gray-800 font-medium">Isabella Nguyen</p>
                  <p className="text-sm text-gray-500">isabella.nguyen@email.com</p>
                </div>
                <p className="text-gray-900 font-semibold">+$39.00</p>
              </li>
              <li className="py-2 flex justify-between">
                <div>
                  <p className="text-gray-800 font-medium">William Kim</p>
                  <p className="text-sm text-gray-500">will@email.com</p>
                </div>
                <p className="text-gray-900 font-semibold">+$299.00</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
