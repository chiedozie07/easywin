import React, { useState } from "react";

const ProfilePage: React.FC = () => {
  const [username, setUsername] = useState("Chiedozie Ezidiegwu");
  const [email] = useState("chiedozie@easywin.com");
  const [bio, setBio] = useState("Passionate software developer and tech enthusiast.");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // TODO: handle save logic (exp. API call to update profile)
    console.log("Profile updated:", { username, bio });
  };

  return (
    <div className="flex flex-col max-w-lg mx-auto mt-10 p-6 bg-gray-900 text-white rounded-lg shadow-lg w-full h-full">
      {/* profile header */}
      <div className="flex justify-between space-x-4 mr-3">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-yellow-300"
        />
        <div>
          <h1 className="text-sm font-bold">{username}</h1>
          <p className="text-gray-400">{email}</p>
        </div>
      </div>

      {/* editable fields */}
      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="text-yellow-300 font-semibold">Username:</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md focus:border-yellow-300 focus:ring focus:ring-yellow-300 outline-none"
            disabled={!isEditing}
          />
        </label>

        <label className="block">
          <span className="text-yellow-300 font-semibold">Bio:</span>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md focus:border-yellow-300 focus:ring focus:ring-yellow-300 outline-none"
            rows={3}
            disabled={!isEditing}
          />
        </label>
      </div>

      {/* tuttons */}
      <div className="mt-6 flex space-x-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="w-full py-2 bg-yellow-300 text-black font-semibold rounded-md hover:bg-yellow-400 transition"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="w-full py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition"
          >
            Edit Profile
          </button>
        )}
        <button
          className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
