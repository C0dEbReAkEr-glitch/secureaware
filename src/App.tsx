import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, Lock, AlertTriangle, Eye, Wifi, Mail, FileText, Award, User, Menu, X, Bell } from 'lucide-react';
import Dashboard from './components/Dashboard';
import ModulesList from './components/ModulesList';
import ModuleContent from './components/ModuleContent';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Settings from './components/Settings';
import NotificationCenter from './components/NotificationCenter';
import Certificates from './components/Certificates';
import { ModuleType, modules } from './data/modules';
import { Notification } from './types/notification';

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'modules' | 'settings' | 'certificates'>('dashboard');
  const [selectedModule, setSelectedModule] = useState<ModuleType | null>(null);
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'Samar',
    email: 'Samar@company.com',
    role: 'Project Manager',
    department: 'IT',
    notificationPreferences: {
      moduleReminders: true,
      newModules: true,
      securityAlerts: true,
      completionCertificates: true
    }
  });

  // Load saved data from localStorage on initial load
  useEffect(() => {
    const savedCompletedModules = localStorage.getItem('completedModules');
    if (savedCompletedModules) {
      setCompletedModules(JSON.parse(savedCompletedModules));
    }

    const savedUserProfile = localStorage.getItem('userProfile');
    if (savedUserProfile) {
      setUserProfile(JSON.parse(savedUserProfile));
    }

    // Add some sample notifications
    setNotifications([
      {
        id: '1',
        title: 'Welcome to SecureAware',
        message: 'Start your security journey by completing your first module.',
        type: 'info',
        read: false,
        date: new Date(Date.now() - 3600000).toISOString()
      },
      {
        id: '2',
        title: 'New Module Available',
        message: 'Check out the new "Mobile Device Security" module.',
        type: 'update',
        read: false,
        date: new Date(Date.now() - 86400000).toISOString()
      },
      {
        id: '3',
        title: 'Security Alert',
        message: 'Recent phishing attempts reported. Stay vigilant!',
        type: 'alert',
        read: false,
        date: new Date(Date.now() - 172800000).toISOString()
      }
    ]);
  }, []);

  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('completedModules', JSON.stringify(completedModules));
  }, [completedModules]);

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
  }, [userProfile]);

  const handleModuleSelect = (module: ModuleType) => {
    setSelectedModule(module);
    setActiveTab('modules');
  };

  const handleModuleComplete = (moduleId: string) => {
    if (!completedModules.includes(moduleId)) {
      const updatedCompletedModules = [...completedModules, moduleId];
      setCompletedModules(updatedCompletedModules);
      
      // Add a notification for module completion
      const completedModule = modules.find(m => m.id === moduleId);
      if (completedModule) {
        addNotification({
          id: Date.now().toString(),
          title: 'Module Completed',
          message: `Congratulations! You've completed the "${completedModule.title}" module.`,
          type: 'success',
          read: false,
          date: new Date().toISOString()
        });
      }
    }
    setSelectedModule(null);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const addNotification = (notification: Notification) => {
    setNotifications(prev => [notification, ...prev]);
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true } 
          : notification
      )
    );
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const updateUserProfile = (updatedProfile: typeof userProfile) => {
    setUserProfile(updatedProfile);
    
    // Add notification for profile update
    addNotification({
      id: Date.now().toString(),
      title: 'Profile Updated',
      message: 'Your profile information has been updated successfully.',
      type: 'info',
      read: false,
      date: new Date().toISOString()
    });
  };

  const updatePassword = () => {
    // In a real app, this would call an API to update the password
    // For this demo, we'll just show a notification
    addNotification({
      id: Date.now().toString(),
      title: 'Password Updated',
      message: 'Your password has been changed successfully.',
      type: 'success',
      read: false,
      date: new Date().toISOString()
    });
  };

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        toggleSidebar={toggleSidebar} 
        toggleNotifications={toggleNotifications}
        unreadNotificationsCount={unreadNotificationsCount}
        userProfile={userProfile}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          isOpen={sidebarOpen} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          closeSidebar={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {activeTab === 'dashboard' && !selectedModule && (
            <Dashboard 
              completedModules={completedModules} 
              totalModules={modules.length} 
              modules={modules}
              onModuleSelect={handleModuleSelect}
              userProfile={userProfile}
            />
          )}
          
          {activeTab === 'modules' && !selectedModule && (
            <ModulesList 
              modules={modules} 
              completedModules={completedModules} 
              onModuleSelect={handleModuleSelect} 
            />
          )}
          
          {activeTab === 'settings' && !selectedModule && (
            <Settings 
              userProfile={userProfile}
              updateUserProfile={updateUserProfile}
              updatePassword={updatePassword}
            />
          )}
          
          {activeTab === 'certificates' && !selectedModule && (
            <Certificates
              completedModules={completedModules}
              modules={modules}
              userProfile={userProfile}
            />
          )}
          
          {selectedModule && (
            <ModuleContent 
              module={selectedModule} 
              onComplete={() => handleModuleComplete(selectedModule.id)} 
              isCompleted={completedModules.includes(selectedModule.id)}
            />
          )}
        </main>
      </div>

      {/* Notification Center */}
      {showNotifications && (
        <NotificationCenter 
          notifications={notifications}
          onClose={toggleNotifications}
          onMarkAsRead={markNotificationAsRead}
          onMarkAllAsRead={markAllNotificationsAsRead}
          onDelete={deleteNotification}
          onClearAll={clearAllNotifications}
        />
      )}
    </div>
  );
}

export default App;