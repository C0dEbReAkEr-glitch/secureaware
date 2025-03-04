import React from 'react';
import { CheckCircle, Clock, Award, ArrowRight } from 'lucide-react';
import { ModuleType } from '../data/modules';

interface DashboardProps {
  completedModules: string[];
  totalModules: number;
  modules: ModuleType[];
  onModuleSelect: (module: ModuleType) => void;
  userProfile: {
    name: string;
    role: string;
    department: string;
  };
}

const Dashboard: React.FC<DashboardProps> = ({ 
  completedModules, 
  totalModules, 
  modules,
  onModuleSelect,
  userProfile
}) => {
  const completionPercentage = Math.round((completedModules.length / totalModules) * 100);
  
  // Get next recommended modules (incomplete ones)
  const recommendedModules = modules
    .filter(module => !completedModules.includes(module.id))
    .slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, {userProfile.name}!</h1>
        <p className="opacity-90">Continue your security training journey and keep your skills up to date.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
            {userProfile.role}
          </span>
          <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
            {userProfile.department}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Progress Overview */}
        <div className="bg-white rounded-lg shadow p-6 flex-1">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h2>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold text-xl">{completionPercentage}%</span>
            </div>
            <div>
              <p className="text-gray-700">
                <span className="font-medium">{completedModules.length}</span> of <span className="font-medium">{totalModules}</span> modules completed
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">Completed</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-2">{completedModules.length}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">Pending</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-2">{totalModules - completedModules.length}</p>
            </div>
          </div>
        </div>
        
        {/* Achievements */}
        <div className="bg-white rounded-lg shadow p-6 flex-1">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h2>
          <div className="space-y-4">
            {completedModules.length > 0 ? (
              <>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">First Module Completed</p>
                    <p className="text-sm text-gray-600">You've started your security journey!</p>
                  </div>
                </div>
                
                {completedModules.length >= 3 && (
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <Award className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Security Enthusiast</p>
                      <p className="text-sm text-gray-600">Completed 3+ security modules</p>
                    </div>
                  </div>
                )}
                
                {completionPercentage >= 50 && (
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Halfway Champion</p>
                      <p className="text-sm text-gray-600">Completed 50% of all modules</p>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <Award className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600">Complete modules to earn achievements</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Recommended Modules */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommended Modules</h2>
        
        {recommendedModules.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendedModules.map(module => (
              <div 
                key={module.id} 
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => onModuleSelect(module)}
              >
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    {React.createElement(module.icon, { className: "h-5 w-5 text-blue-600" })}
                  </div>
                  <h3 className="font-medium text-gray-900">{module.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{module.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{module.duration} min</span>
                  <button className="text-blue-600 hover:text-blue-700 flex items-center text-sm font-medium">
                    Start <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
            <p className="text-gray-700 font-medium">Congratulations! You've completed all modules.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;