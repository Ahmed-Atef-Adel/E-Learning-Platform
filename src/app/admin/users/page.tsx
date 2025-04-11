"use client";

import { useState } from "react";

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "Teacher", status: "Inactive" },
    { id: 3, name: "Mike Johnson", email: "mike.johnson@example.com", role: "Student", status: "Active" },
    // more users
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Add modal state

  const [newUser, setNewUser] = useState({ name: "", email: "", role: "Student", status: "Active" });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Get current users for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const filteredUsers = currentUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  // View User Details
  const handleViewUser = (user) => {
    setSelectedUser(user);
    setIsViewModalOpen(true);
  };

  // Edit User
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setNewUser(user);
    setIsEditModalOpen(true);
  };

  const saveEditedUser = () => {
    if (!newUser.name || !newUser.email || !newUser.role || !newUser.status) {
      alert("All fields are required!");
      return;
    }
    setUsers(users.map((user) => (user.id === newUser.id ? newUser : user)));
    setIsEditModalOpen(false);
  };

  // Add New User
  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.role || !newUser.status) {
      alert("All fields are required!");
      return;
    }
    const newId = users.length + 1; // Simple id generation
    setUsers([...users, { ...newUser, id: newId }]);
    setIsAddModalOpen(false);
  };

  // Delete User
  const handleDeleteUser = (userId) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  // Handle Page Change
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Users</h1>

      {/* Search and Add New User */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search users..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add New User
        </button>
      </div>

      {/* Users Table */}
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700 text-left">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Role</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.role}</td>
              <td className="py-2 px-4">
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    user.status === "Active" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="py-2 px-4 space-x-2">
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => handleViewUser(user)}
                >
                  View
                </button>
                <button
                  className="text-yellow-600 hover:underline"
                  onClick={() => handleEditUser(user)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <button
          className="bg-gray-300 px-4 py-2 rounded-lg"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="bg-gray-300 px-4 py-2 rounded-lg"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Add User Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Add New User</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Role</label>
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              >
                <option value="Admin">Admin</option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Status</label>
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                value={newUser.status}
                onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
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
                onClick={handleAddUser}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View User Modal */}
      {isViewModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">User Details</h2>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Role:</strong> {selectedUser.role}</p>
            <p><strong>Status:</strong> {selectedUser.status}</p>
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

      {/* Edit User Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Edit User</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Role</label>
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              >
                <option value="Admin">Admin</option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Status</label>
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                value={newUser.status}
                onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                onClick={() => setIsEditModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                onClick={saveEditedUser}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
