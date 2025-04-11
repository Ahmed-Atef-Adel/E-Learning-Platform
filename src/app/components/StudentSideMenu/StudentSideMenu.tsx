'use client';

import Link from "next/link";

const StudentSideMenu = () => {
  return (
    <div className="w-64 h-screen bg-gradient-to-br from-red-500 to-red-700 text-black p-6">
      <h2 className="text-3xl font-extrabold mb-8 text-black">Student Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/student" className="text-lg hover:text-indigo-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/student/courses" className="text-lg hover:text-indigo-300">
            My Courses
          </Link>
        </li>
        <li>
          <Link href="/student/assignments" className="text-lg hover:text-indigo-300">
            Assignments
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default StudentSideMenu;
