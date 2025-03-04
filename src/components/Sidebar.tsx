import React from 'react';
import { Home, BookOpen, Award, Settings, X, User } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeTab: 'dashboard' | 'modules' | 'settings' | 'certificates';
  setActiveTab: (tab: 'dashboard' | 'modules' | 'settings' | 'certificates') => void;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeTab, setActiveTab, closeSidebar }) => {
  return (
    <>
      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-gray-600 bg-opacity-75 md:hidden" 
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-4 md:hidden">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">Menu</span>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={closeSidebar}
          >
            <span className="sr-only">Close sidebar</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <nav className="mt-5 px-2 space-y-1">
          <button
            onClick={() => {
              setActiveTab('dashboard');
              closeSidebar();
            }}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md ${
              activeTab === 'dashboard'
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Home className="mr-3 h-5 w-5" />
            Dashboard
          </button>
          
          <button
            onClick={() => {
              setActiveTab('modules');
              closeSidebar();
            }}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md ${
              activeTab === 'modules'
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <BookOpen className="mr-3 h-5 w-5" />
            Training Modules
          </button>
          
          <button
            onClick={() => {
              setActiveTab('certificates');
              closeSidebar();
            }}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md ${
              activeTab === 'certificates'
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Award className="mr-3 h-5 w-5" />
            Certificates
          </button>
          
          <button
            onClick={() => {
              setActiveTab('settings');
              closeSidebar();
            }}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md ${
              activeTab === 'settings'
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;