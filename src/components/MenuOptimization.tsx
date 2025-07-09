import React, { useState, useEffect } from 'react';
import { 
  ChefHat, 
  TrendingUp, 
  TrendingDown, 
  Star, 
  DollarSign,
  Clock,
  Eye,
  BarChart3,
  RefreshCw,
  Edit3,
  ToggleLeft,
  ToggleRight,
  Plus,
  Trash2
} from 'lucide-react';
import { storageUtils } from '../utils/storage';
import { MenuItem } from '../types';
import AddMenuItemModal from './modals/AddMenuItemModal';
import EditMenuItemModal from './modals/EditMenuItemModal';

const MenuOptimization: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState('7days');
  const [isLoading, setIsLoading] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

  const loadMenuItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      setMenuItems(storageUtils.getMenuItems());
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    loadMenuItems();
  }, []);

  const handleAddItem = (newItem: MenuItem) => {
    setMenuItems(prev => [...prev, newItem]);
  };

  const handleUpdateItem = (updatedItem: MenuItem) => {
    setMenuItems(prev => 
      prev.map(item => item.id === updatedItem.id ? updatedItem : item)
    );
  };

  const handleDeleteItem = (id: string) => {
    if (window.confirm('Are you sure you want to delete this menu item?')) {
      const success = storageUtils.deleteMenuItem(id);
      if (success) {
        setMenuItems(prev => prev.filter(item => item.id !== id));
      }
    }
  };

  const handleEditItem = (item: MenuItem) => {
    setEditingItem(item);
    setIsEditModalOpen(true);
  };

  const toggleItemStatus = (id: string) => {
    const item = menuItems.find(item => item.id === id);
    if (item) {
      const success = storageUtils.updateMenuItem(id, { isActive: !item.isActive });
      if (success) {
        setMenuItems(prev => 
          prev.map(item => 
            item.id === id ? { ...item, isActive: !item.isActive } : item
          )
        );
      }
    }
  };

  const categories = menuItems.reduce((acc, item) => {
    const existing = acc.find(cat => cat.name === item.category);
    if (existing) {
      existing.items += 1;
      existing.totalSales += item.sales;
      existing.avgRating = (existing.avgRating + item.rating) / 2;
    } else {
      acc.push({
        name: item.category,
        items: 1,
        avgRating: item.rating,
        totalSales: item.sales
      });
    }
    return acc;
  }, [] as Array<{ name: string; items: number; avgRating: number; totalSales: number }>);

  const totalRevenue = menuItems.reduce((sum, item) => sum + item.revenue, 0);
  const avgRating = menuItems.length > 0 ? menuItems.reduce((sum, item) => sum + item.rating, 0) / menuItems.length : 0;
  const avgProfit = menuItems.length > 0 ? menuItems.reduce((sum, item) => sum + item.profit, 0) / menuItems.length : 0;

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />;
      default: return <div className="w-4 h-4 bg-gray-300 rounded-full" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Menu Optimization</h1>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-yellow-600 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Item</span>
          </button>
          <button
            onClick={loadMenuItems}
            disabled={isLoading}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
          </select>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Items</p>
              <p className="text-2xl font-bold text-gray-800">{menuItems.length}</p>
            </div>
            <ChefHat className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Rating</p>
              <p className="text-2xl font-bold text-gray-800">{avgRating.toFixed(1)}</p>
            </div>
            <Star className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-800">${totalRevenue.toFixed(0)}</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Profit</p>
              <p className="text-2xl font-bold text-gray-800">${avgProfit.toFixed(2)}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Menu Items Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Item Performance</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {menuItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="font-medium text-gray-800">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.category}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
                    ${item.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {item.sales}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
                    ${item.revenue.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-gray-800">{item.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-green-600 font-medium">${item.profit}</div>
                    <div className="text-xs text-gray-500">per item</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getTrendIcon(item.trend)}
                      <span className={`ml-1 text-sm ${getTrendColor(item.trend)}`}>
                        {item.trend}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{item.conversionRate}%</div>
                    <div className="text-xs text-gray-500">{item.views} views</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => toggleItemStatus(item.id)}
                      className="flex items-center space-x-1"
                    >
                      {item.isActive ? (
                        <ToggleRight className="w-6 h-6 text-green-500" />
                      ) : (
                        <ToggleLeft className="w-6 h-6 text-gray-400" />
                      )}
                      <span className={`text-sm ${item.isActive ? 'text-green-600' : 'text-gray-500'}`}>
                        {item.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEditItem(item)}
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-200 p-1 rounded hover:bg-blue-50"
                      >
                      <Edit3 className="w-4 h-4" />
                    </button>
                      <button 
                        onClick={() => handleDeleteItem(item.id)}
                        className="text-red-600 hover:text-red-800 transition-colors duration-200 p-1 rounded hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {menuItems.length === 0 && (
            <div className="text-center py-12">
              <ChefHat className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No menu items found</p>
            </div>
          )}
        </div>
      </div>

      {/* Category Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Category Performance</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-800">{category.name}</h3>
                  <span className="text-sm text-gray-500">{category.items} items</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm text-gray-700">{category.avgRating.toFixed(1)}</span>
                  </div>
                  <div className="text-sm text-gray-700">{category.totalSales} sales</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Optimization Recommendations</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-green-50 border border-green-200 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-green-800">Promote High-Profit Items</h4>
                <p className="text-sm text-green-700">
                  {menuItems.length > 0 && (
                    <>
                      {menuItems.sort((a, b) => b.profit - a.profit)[0]?.name} has the highest profit margin 
                      (${menuItems.sort((a, b) => b.profit - a.profit)[0]?.profit}). Consider featuring it more prominently.
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-800">Improve Conversion Rate</h4>
                <p className="text-sm text-yellow-700">
                  {menuItems.length > 0 && (
                    <>
                      {menuItems.sort((a, b) => a.conversionRate - b.conversionRate)[0]?.name} has low conversion 
                      ({menuItems.sort((a, b) => a.conversionRate - b.conversionRate)[0]?.conversionRate}%). 
                      Consider adjusting price or description.
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <BarChart3 className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-800">Optimize Menu Layout</h4>
                <p className="text-sm text-blue-700">
                  {categories.length > 0 && (
                    <>
                      {categories.sort((a, b) => b.totalSales - a.totalSales)[0]?.name} category performs well. 
                      Consider placing it at the top of your menu.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AddMenuItemModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddItem}
      />

      <EditMenuItemModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingItem(null);
        }}
        onUpdate={handleUpdateItem}
        item={editingItem}
      />
    </div>
  );
};

export default MenuOptimization;