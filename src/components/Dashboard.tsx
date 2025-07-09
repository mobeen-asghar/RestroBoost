import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  ShoppingCart,
  Clock,
  Star,
  AlertTriangle,
  CheckCircle,
  RefreshCw
} from 'lucide-react';
import { storageUtils } from '../utils/storage';
import { InventoryItem, Order, MenuItem, Feedback } from '../types';

const Dashboard: React.FC = () => {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setInventoryItems(storageUtils.getInventory());
      setOrders(storageUtils.getOrders());
      setMenuItems(storageUtils.getMenuItems());
      setFeedback(storageUtils.getFeedback());
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Calculate stats
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const todayOrders = orders.filter(order => {
    const today = new Date().toDateString();
    const orderDate = new Date(order.createdAt).toDateString();
    return today === orderDate;
  }).length;
  
  const activeCustomers = new Set(orders.map(order => order.customer)).size;
  const avgOrderValue = orders.length > 0 ? totalRevenue / orders.length : 0;

  const stats = [
    { 
      title: 'Total Revenue', 
      value: `$${totalRevenue.toFixed(2)}`, 
      change: '+12.5%', 
      icon: DollarSign, 
      color: 'text-green-600' 
    },
    { 
      title: 'Orders Today', 
      value: todayOrders.toString(), 
      change: '+8.2%', 
      icon: ShoppingCart, 
      color: 'text-blue-600' 
    },
    { 
      title: 'Active Customers', 
      value: activeCustomers.toString(), 
      change: '+5.1%', 
      icon: Users, 
      color: 'text-purple-600' 
    },
    { 
      title: 'Avg Order Value', 
      value: `$${avgOrderValue.toFixed(2)}`, 
      change: '+3.8%', 
      icon: TrendingUp, 
      color: 'text-yellow-600' 
    },
  ];

  const recentOrders = orders
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  const lowStockItems = inventoryItems.filter(item => item.status === 'critical' || item.status === 'low');

  // Generate new sample orders periodically for demo
  const generateNewOrder = () => {
    const customers = ['Alex Johnson', 'Maria Garcia', 'David Kim', 'Sarah Wilson', 'Tom Brown'];
    const addresses = ['123 Main St', '456 Oak Ave', '789 Pine Rd', '321 Elm St', '654 Maple Dr'];
    const menuItems = storageUtils.getMenuItems().filter(item => item.isActive);
    
    if (menuItems.length === 0) return;
    
    const randomCustomer = customers[Math.floor(Math.random() * customers.length)];
    const randomAddress = addresses[Math.floor(Math.random() * addresses.length)];
    const randomItems = [];
    const numItems = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < numItems; i++) {
      const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
      const quantity = Math.floor(Math.random() * 3) + 1;
      randomItems.push({
        name: randomItem.name,
        quantity,
        price: randomItem.price
      });
    }
    
    const total = randomItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    storageUtils.addOrder({
      customer: randomCustomer,
      phone: '+1 (555) 123-4567',
      address: randomAddress,
      items: randomItems,
      total,
      status: 'preparing',
      orderTime: new Date().toLocaleTimeString(),
      estimatedTime: '20-25 mins',
      paymentMethod: Math.random() > 0.5 ? 'Credit Card' : 'Cash'
    });
    
    loadData();
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={loadData}
            disabled={isLoading}
            className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-200 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
          <button
            onClick={generateNewOrder}
            className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
          >
            <span>Simulate Order</span>
          </button>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>Last updated: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-gray-50 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                <span className="text-gray-500 text-sm ml-2">vs last month</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {recentOrders.length > 0 ? (
              recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">{order.id}</span>
                      <span className="text-sm text-gray-500">
                        {new Date(order.createdAt).toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                    <p className="text-sm text-gray-500">
                      {order.items.map(item => `${item.quantity}x ${item.name}`).join(', ')}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-semibold text-gray-800">${order.total.toFixed(2)}</p>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === 'preparing' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'ready' ? 'bg-green-100 text-green-800' :
                      order.status === 'delivered' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <ShoppingCart className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                <p>No orders yet</p>
              </div>
            )}
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Inventory Alerts</h2>
          <div className="space-y-3">
            {lowStockItems.length > 0 ? (
              lowStockItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.quantity} {item.unit} remaining</p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.status === 'critical' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <CheckCircle className="w-12 h-12 mx-auto mb-2 text-green-300" />
                <p>All items are well stocked</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Revenue Overview</h2>
        <div className="h-64 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
            <p className="text-gray-600 font-medium">Revenue Trending Upward</p>
            <p className="text-sm text-gray-500 mt-1">
              Total Revenue: ${totalRevenue.toFixed(2)} | Orders: {orders.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;