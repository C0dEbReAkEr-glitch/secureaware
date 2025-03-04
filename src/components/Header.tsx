import React, { useState } from 'react';
import { Shield, Menu, Bell, User, LogOut, Settings, ChevronDown } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
  toggleNotifications: () => void;
  unreadNotificationsCount: number;
  userProfile: {
    name: string;
    email: string;
    role: string;
  };
}

const Header: React.FC<HeaderProps> = ({ 
  toggleSidebar, 
  toggleNotifications, 
  unreadNotificationsCount,
  userProfile
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-shrink-0 flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SecureAware</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <button 
                className="p-2 rounded-full text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
                onClick={toggleNotifications}
              >
                <Bell className="h-5 w-5" />
                {unreadNotificationsCount > 0 && (
                  <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                    {unreadNotificationsCount > 9 ? '9+' : unreadNotificationsCount}
                  </span>
                )}
              </button>
            </div>
            <div className="ml-3 relative">
              <div className="flex items-center">
                <button 
                  className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 items-center"
                  onClick={toggleUserMenu}
                >
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <User className="h-5 w-5" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">
                    {userProfile.name}
                  </span>
                  <ChevronDown className="h-4 w-4 ml-1 text-gray-500 hidden md:block" />
                </button>
              </div>
              
              {/* User dropdown menu */}
              {showUserMenu && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1 border-b border-gray-100">
                    <div className="px-4 py-2">
                      <p className="text-sm font-medium text-gray-900">{userProfile.name}</p>
                      <p className="text-xs text-gray-500 truncate">{userProfile.email}</p>
                    </div>
                  </div>
                  <div className="py-1">
                    <button
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setShowUserMenu(false);
                        // This would be handled by a router in a real app
                        window.location.hash = 'settings';
                      }}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </button>
                    <button
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        // In a real app, this would log the user out
                        alert('Logout functionality would be implemented here');
                        setShowUserMenu(false);
                      }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;