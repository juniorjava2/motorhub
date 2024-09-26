"use client"
import React, { useState } from 'react';
import { issuesData } from '../constants/index'; // Adjust the path as necessary
import { FaInfoCircle, FaTimes } from 'react-icons/fa'; // For the info and delete icons

const SelectIssue: React.FC = () => {
  const [selectedIssues, setSelectedIssues] = useState<{ id: number; title: string; description: string }[]>([]);
  const [hoveredIssue, setHoveredIssue] = useState<string | null>(null);

  const handleSelectIssue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value, 10);
    const selectedIssue = issuesData.find(issue => issue.id === selectedId);
    
    if (selectedIssue && !selectedIssues.find(issue => issue.id === selectedId)) {
      setSelectedIssues(prev => [...prev, selectedIssue]);
    }
  };

  const handleDeleteIssue = (id: number) => {
    setSelectedIssues(prev => prev.filter(issue => issue.id !== id));
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4">Select Mechanical Issues</h2>

      {/* Selected Issues Display */}
      <div className="border  p-4 rounded mb-4 min-h-[100px] flex flex-col ">
        {selectedIssues.length === 0 ? (
          <p>No issues selected. Please select from the dropdown.</p>
        ) : (
          selectedIssues.map((issue) => (
            <div key={issue.id} className="bg-gray-300 flex flex-row items-center  border-2 w-full rounded-xl h-10 my-2 px-2 mx-2">
              <div className="flex items-center space-x-2">
                <FaInfoCircle
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setHoveredIssue(issue.description === hoveredIssue ? null : issue.description)}
                />
                <span>{issue.title}</span>
              </div>
              <FaTimes
                onClick={() => handleDeleteIssue(issue.id)}
                className="text-red-500 cursor-pointer ml-2"
              />
            </div>
          ))
        )}
      </div>

      {/* Dropdown Selector */}
      <select
        onChange={handleSelectIssue}
        className="border rounded p-2 mb-4 w-full"
      >
        <option value="">Select an issue...</option>
        {issuesData.map((issue) => (
          <option key={issue.id} value={issue.id}>
            <div className="flex items-center">
              <FaInfoCircle className="text-blue-600" />
              <span className="ml-2">{issue.title}</span>
            </div>
          </option>
        ))}
      </select>

      {/* Description on Hover or Click */}
      <div>
        {hoveredIssue && (
          <div className="border p-2 rounded mt-4 bg-gray-100">
            <p>{hoveredIssue}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectIssue;
