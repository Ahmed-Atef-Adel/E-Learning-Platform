"use client";

import { useState } from "react";

export default function CoursesPage() {
  const [courses, setCourses] = useState([
    { id: 1, title: "Web Development 101", description: "Introduction to web development.", category: "Web Development", date: "2025-01-01" },
    { id: 2, title: "Data Science Fundamentals", description: "Learn the basics of data science.", category: "Data Science", date: "2025-02-15" },
    { id: 3, title: "Advanced Python Programming", description: "Dive deep into Python programming.", category: "Programming", date: "2025-03-10" },
  ]);

  const [search, setSearch] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [newCourse, setNewCourse] = useState({ title: "", description: "", date: "", category: "Web Development" });

  // Add a new course
  const handleAddCourse = () => {
    setCourses([...courses, { ...newCourse, id: courses.length + 1 }]);
    setIsAddModalOpen(false);
    setNewCourse({ title: "", description: "", date: "", category: "Web Development" });
  };

  // Delete a course
  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  // Open edit modal
  const handleEditCourse = (course) => {
    setSelectedCourse(course);
    setIsEditModalOpen(true);
  };

  // Save edited course
  const handleSaveEdit = () => {
    setCourses(
      courses.map((course) =>
        course.id === selectedCourse.id
          ? { ...selectedCourse }
          : course
      )
    );
    setIsEditModalOpen(false);
    setSelectedCourse(null);
  };

  // View course (for now, just display an alert as an example)
  const handleViewCourse = (course) => {
    alert(`Viewing Course: ${course.title}\n\n${course.description}`);
  };

  // Filter courses by search
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Courses</h1>

      {/* Search Bar */}
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-4 py-2"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
          onClick={() => setSearch("")} // Clear search
        >
          Clear Search
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={() => setIsAddModalOpen(true)} // Open Add Modal
        >
          Add New Course
        </button>
      </div>

      {/* Courses List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <p className="text-gray-500 text-sm mt-2">Category: {course.category}</p>
            <p className="text-gray-500 text-sm">Date: {course.date}</p>
            <div className="flex mt-4 space-x-2">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
                onClick={() => handleViewCourse(course)}
              >
                View
              </button>
              <button
                className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm"
                onClick={() => handleEditCourse(course)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                onClick={() => handleDeleteCourse(course.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Course Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Add New Course</h2>
            <div className="mb-4">
              <input
                type="text"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Course Title"
                value={newCourse.title}
                onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <textarea
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Course Description"
                value={newCourse.description}
                onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                value={newCourse.date}
                onChange={(e) => setNewCourse({ ...newCourse, date: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                value={newCourse.category}
                onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
              >
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Programming">Programming</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg" onClick={() => setIsAddModalOpen(false)}>
                Cancel
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handleAddCourse}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Course Modal */}
      {isEditModalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Edit Course</h2>
            <div className="mb-4">
              <input
                type="text"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                value={selectedCourse.title}
                onChange={(e) => setSelectedCourse({ ...selectedCourse, title: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <textarea
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                value={selectedCourse.description}
                onChange={(e) => setSelectedCourse({ ...selectedCourse, description: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                value={selectedCourse.date}
                onChange={(e) => setSelectedCourse({ ...selectedCourse, date: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                value={selectedCourse.category}
                onChange={(e) => setSelectedCourse({ ...selectedCourse, category: e.target.value })}
              >
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Programming">Programming</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg" onClick={() => setIsEditModalOpen(false)}>
                Cancel
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg" onClick={handleSaveEdit}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
