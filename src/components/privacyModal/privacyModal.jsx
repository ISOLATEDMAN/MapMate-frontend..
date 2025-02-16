import React, { useState } from "react";

function PrivacyModal({ open, handleClose, handleSave }) {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = () => {
    if (!country || !state) {
      alert("Please fill in both fields.");
      return;
    }
    handleSave({ country, state }); // Pass the manual location to the parent
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Enter Your Location</h2>
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-lg mr-2"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyModal;
