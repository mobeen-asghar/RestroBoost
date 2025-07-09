import React from 'react';
import { 
  BarChart3, 
  Package, 
  MenuSquare, 
  MessageSquare, 
  ShoppingCart,
  Settings,
  Bell,
  User,
  LogOut
} from 'lucide-react';
import { authUtils } from '../utils/auth';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onLogout }) => {
  const user = authUtils.getCurrentUser();
  
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'menu', label: 'Menu Optimization', icon: MenuSquare },
    { id: 'feedback', label: 'Customer Feedback', icon: MessageSquare },
    { id: 'orders', label: 'Online Orders', icon: ShoppingCart },
  ];

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      onLogout();
    }
  };

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
            <MenuSquare className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-800">RestroBoost</h1>
        </div>
      </div>
      
      <nav className="mt-8 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-6 py-3 text-left transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-yellow-50 text-yellow-700 border-r-2 border-yellow-500'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="p-6 border-t border-gray-200 space-y-4">
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setActiveTab('settings')}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'settings' 
                ? 'bg-yellow-100 text-yellow-700' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <Bell className="w-5 h-5" />
          </button>
          <button 
            onClick={handleLogout}
            className="p-2 text-gray-600 hover:bg-red-100 hover:text-red-600 rounded-lg transition-colors duration-200"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
        
        {user && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">{user.name}</p>
              <p className="text-xs text-gray-500 truncate">{user.restaurantName}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;