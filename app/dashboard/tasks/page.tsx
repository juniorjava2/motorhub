"use client"
import React, { useState } from 'react';
import { Search, ChevronDown, Calendar, Clock, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { dummyTasks } from '@/constants';



const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState(dummyTasks);
  const [sortBy, setSortBy] = useState('complexity');

  const handleSort = (criteria: 'complexity' | 'reward' | 'dueDate') => {
    setSortBy(criteria);
    const sortedTasks = [...tasks].sort((a, b) => {
      if (criteria === 'complexity') {
        const order: { [key: string]: number } = { 'Low': 1, 'Medium': 2, 'High': 3 };
        return order[a.complexity] - order[b.complexity];
      } else if (criteria === 'reward') {
        return parseInt(b.reward.replace(/\D/g, '')) - parseInt(a.reward.replace(/\D/g, ''));
      } else if (criteria === 'dueDate') {
        return new Date(a.dueDate.split('/').reverse().join('-')).getTime() - new Date(b.dueDate.split('/').reverse().join('-')).getTime();
      }
      return 0;
    });
    setTasks(sortedTasks);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Task Lists</h1>
        <p className="text-gray-400">Find and claim tasks which are suitable for you ...</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="relative flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search task..."
            className="w-full bg-[#1A1D21] text-white rounded-lg pl-10 pr-4 py-2 border-[#363A3D] border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <div className="relative">
          <select 
            className="appearance-none bg-[#1A1D21] text-white rounded-lg pl-4 pr-10 py-2 border-[#363A3D] border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sortBy}
            onChange={(e) => handleSort(e.target.value as 'complexity' | 'reward' | 'dueDate')}
          >
            <option value="complexity">Sort by: Complexity</option>
            <option value="reward">Sort by: Reward</option>
            <option value="dueDate">Sort by: Due Date</option>
          </select>
          <ChevronDown className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={20} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div key={task.id} className="bg-[#1F2329] rounded-lg p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <Image src="/img/ivan.jpg" width={32} height={32} className="w-8 h-8 rounded-full mr-2" alt={`${task.creator} avatar`} />
                <div>
                  <p className="font-semibold">{task.creator}</p>
                  <p className="text-xs text-gray-400">Admin</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">{task.createdAt}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{task.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
              <div className="flex items-center">
                <Calendar className="mr-1" size={16} />
                {task.dueDate}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1" size={16} />
                {task.reward}
              </div>
            </div>
            <div className='tags flex items-center justify-evenly my-4'>
              <span className='bg-green-700 px-2 text-green-700 bg-opacity-25 rounded-full text-xs py-1'>Reactnative</span>
              <span className="text-xs text-blue-900 bg-blue-900 bg-opacity-25 py-1 px-2 rounded-full">Typescript</span>
              <span className='bg-cyan-700 px-2 text-cyan-700 bg-opacity-25 rounded-full text-xs py-1'>Reactnative</span>
              <span className="text-xs text-blue-900 bg-blue-900 bg-opacity-25 py-1 px-2 rounded-full">Typescript</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs bg-blue-900 text-blue-300 py-1 px-2 rounded">Complexity: {task.complexity}</span>
              <button className="text-xs bg-yellow-600 text-white py-1 px-2 rounded">Available</button>
            </div>
            <button className="bg-green-600 text-white py-2 px-4 rounded-lg mt-auto flex items-center justify-center">Details <ChevronRight size={20} className='ml-4' /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;