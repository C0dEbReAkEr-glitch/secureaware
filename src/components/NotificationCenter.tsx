import React from 'react';
import { X, CheckCircle, AlertTriangle, Info, Bell, Trash2 } from 'lucide-react';
import { Notification } from '../types/notification';

interface NotificationCenterProps {
  notifications: Notification[];
  onClose: () => void;
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onDelete: (id: string) => void;
  onClearAll: () => void;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({
  notifications,
  onClose,
  onMarkAsRead,
  onMarkAllAsRead,
  onDelete,
  onClearAll
}) => {
  // Format date to relative time (e.g., "2 hours ago")
  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) {
      return 'just now';
    }
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    }
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    }
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
    
    const diffInMonths = Math.floor(diffInDays / 30);
    return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  };

  // Get icon based on notification type
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'alert':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'update':
        return <Bell className="h-5 w-5 text-blue-500" />;
      case 'info':
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
        
        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto">
                <div className="py-6 px-4 bg-blue-700 sm:px-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-white">Notifications</h2>
                    <div className="ml-3 h-7 flex items-center">
                      <button
                        type="button"
                        className="rounded-md text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={onClose}
                      >
                        <span className="sr-only">Close panel</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-1">
                    <p className="text-sm text-blue-300">
                      {unreadCount === 0 
                        ? 'You have no unread notifications' 
                        : `You have ${unreadCount} unread notification${unreadCount !== 1 ? 's' : ''}`}
                    </p>
                  </div>
                </div>
                
                <div className="border-b border-gray-200">
                  <div className="flex justify-between items-center py-3 px-4">
                    <span className="text-sm font-medium text-gray-900">
                      {notifications.length === 0 
                        ? 'No notifications' 
                        : `${notifications.length} notification${notifications.length !== 1 ? 's' : ''}`}
                    </span>
                    <div className="flex space-x-3">
                      <button
                        type="button"
                        className="text-sm text-blue-600 hover:text-blue-800"
                        onClick={onMarkAllAsRead}
                        disabled={notifications.length === 0 || unreadCount === 0}
                      >
                        Mark all as read
                      </button>
                      <button
                        type="button"
                        className="text-sm text-red-600 hover:text-red-800"
                        onClick={onClearAll}
                        disabled={notifications.length === 0}
                      >
                        Clear all
                      </button>
                    </div>
                  </div>
                </div>
                
                {notifications.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64">
                    <Bell className="h-12 w-12 text-gray-300 mb-4" />
                    <p className="text-gray-500 text-sm">No notifications to display</p>
                  </div>
                ) : (
                  <ul className="divide-y divide-gray-200">
                    {notifications.map((notification) => (
                      <li 
                        key={notification.id} 
                        className={`px-4 py-4 sm:px-6 ${!notification.read ? 'bg-blue-50' : ''}`}
                        onClick={() => onMarkAsRead(notification.id)}
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 pt-0.5">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900">
                                {notification.title}
                              </p>
                              <div className="ml-2 flex-shrink-0 flex">
                                <button
                                  type="button"
                                  className="ml-2 text-gray-400 hover:text-gray-500"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onDelete(notification.id);
                                  }}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              {formatRelativeTime(notification.date)}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCenter;