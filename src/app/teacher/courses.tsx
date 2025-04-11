'use client';
import TeacherSideMenu from "../components/TeacherSideMenu/TeacherSideMenu";
export default function TeacherCourses() {
    return (
      <div className="flex">
        <TeacherSideMenu />
        <div className="flex-1 p-8 bg-gray-100">
          <h1 className="text-4xl font-bold text-gray-700 mb-4">My Courses</h1>
  
          {/* Courses Table */}
          <table className="min-w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-6 text-left text-gray-800">Course Name</th>
                <th className="py-3 px-6 text-left text-gray-800">Status</th>
                <th className="py-3 px-6 text-left text-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-6">React Basics</td>
                <td className="py-3 px-6">Active</td>
                <td className="py-3 px-6">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Edit</button>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg ml-2">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6">Node.js Mastery</td>
                <td className="py-3 px-6">Inactive</td>
                <td className="py-3 px-6">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Edit</button>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg ml-2">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  