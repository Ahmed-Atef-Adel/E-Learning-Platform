'use client';
import Link from "next/link";

const SideMenu = () => {
  return (
    <div className="w-64 h-screen bg-gradient-to-br from-red-500 to-red-700 text-black p-6">
      <h2 className="text-3xl font-extrabold mb-8 text-black">Teacher Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/admin" className="text-lg hover:text-indigo-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/admin/users" className="text-lg hover:text-indigo-300">
            Users
          </Link>
        </li>
        <li>
          <Link href="/admin/courses" className="text-lg hover:text-indigo-300">
            Courses
          </Link>
        </li>
        <li>
          <Link href="/admin/reports" className="text-lg hover:text-indigo-300">
            Reports
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
