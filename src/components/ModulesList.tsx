import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { ModuleType } from '../data/modules';

interface ModulesListProps {
  modules: ModuleType[];
  completedModules: string[];
  onModuleSelect: (module: ModuleType) => void;
}

const ModulesList: React.FC<ModulesListProps> = ({ 
  modules, 
  completedModules, 
  onModuleSelect 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCompleted, setFilterCompleted] = useState<'all' | 'completed' | 'incomplete'>('all');
  
  const filteredModules = modules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          module.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterCompleted === 'all' || 
                          (filterCompleted === 'completed' && completedModules.includes(module.id)) ||
                          (filterCompleted === 'incomplete' && !completedModules.includes(module.id));
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Training Modules</h1>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search modules..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative inline-block">
            <select
              className="pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full appearance-none bg-white"
              value={filterCompleted}
              onChange={(e) => setFilterCompleted(e.target.value as 'all' | 'completed' | 'incomplete')}
            >
              <option value="all">All Modules</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map(module => (
          <div 
            key={module.id}
            className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onModuleSelect(module)}
          >
            <div className="h-3 bg-blue-600"></div>
            <div className="p-5">
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  {React.createElement(module.icon, { className: "h-5 w-5 text-blue-600" })}
                </div>
                <h3 className="font-medium text-gray-900">{module.title}</h3>
              </div>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{module.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-2">{module.duration} min</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                    {module.level}
                  </span>
                </div>
                
                {completedModules.includes(module.id) ? (
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                    Completed
                  </span>
                ) : (
                  <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
                    Incomplete
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredModules.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-700 font-medium">No modules found matching your search criteria.</p>
          <button 
            className="mt-4 text-blue-600 hover:text-blue-700"
            onClick={() => {
              setSearchTerm('');
              setFilterCompleted('all');
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ModulesList;