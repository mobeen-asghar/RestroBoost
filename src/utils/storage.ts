import { InventoryItem, MenuItem, Feedback, Order } from '../types';

const INVENTORY_KEY = 'restroboost_inventory';
const MENU_KEY = 'restroboost_menu';
const FEEDBACK_KEY = 'restroboost_feedback';
const ORDERS_KEY = 'restroboost_orders';

export const storageUtils = {
  // Inventory Management
  getInventory(): InventoryItem[] {
    const data = localStorage.getItem(INVENTORY_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveInventory(items: InventoryItem[]): void {
    localStorage.setItem(INVENTORY_KEY, JSON.stringify(items));
  },

  addInventoryItem(item: Omit<InventoryItem, 'id' | 'lastUpdated'>): InventoryItem {
    const items = this.getInventory();
    const newItem: InventoryItem = {
      ...item,
      id: Date.now().toString(),
      lastUpdated: new Date().toISOString()
    };
    items.push(newItem);
    this.saveInventory(items);
    return newItem;
  },

  updateInventoryItem(id: string, updates: Partial<InventoryItem>): boolean {
    const items = this.getInventory();
    const index = items.findIndex(item => item.id === id);
    if (index === -1) return false;
    
    items[index] = { ...items[index], ...updates, lastUpdated: new Date().toISOString() };
    this.saveInventory(items);
    return true;
  },

  deleteInventoryItem(id: string): boolean {
    const items = this.getInventory();
    const filteredItems = items.filter(item => item.id !== id);
    if (filteredItems.length === items.length) return false;
    
    this.saveInventory(filteredItems);
    return true;
  },

  // Menu Management
  getMenuItems(): MenuItem[] {
    const data = localStorage.getItem(MENU_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveMenuItems(items: MenuItem[]): void {
    localStorage.setItem(MENU_KEY, JSON.stringify(items));
  },

  addMenuItem(item: Omit<MenuItem, 'id'>): MenuItem {
    const items = this.getMenuItems();
    const newItem: MenuItem = {
      ...item,
      id: Date.now().toString()
    };
    items.push(newItem);
    this.saveMenuItems(items);
    return newItem;
  },

  updateMenuItem(id: string, updates: Partial<MenuItem>): boolean {
    const items = this.getMenuItems();
    const index = items.findIndex(item => item.id === id);
    if (index === -1) return false;
    
    items[index] = { ...items[index], ...updates };
    this.saveMenuItems(items);
    return true;
  },

  deleteMenuItem(id: string): boolean {
    const items = this.getMenuItems();
    const filteredItems = items.filter(item => item.id !== id);
    if (filteredItems.length === items.length) return false;
    
    this.saveMenuItems(filteredItems);
    return true;
  },

  // Feedback Management
  getFeedback(): Feedback[] {
    const data = localStorage.getItem(FEEDBACK_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveFeedback(feedback: Feedback[]): void {
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedback));
  },

  addFeedback(feedback: Omit<Feedback, 'id'>): Feedback {
    const feedbacks = this.getFeedback();
    const newFeedback: Feedback = {
      ...feedback,
      id: Date.now().toString()
    };
    feedbacks.push(newFeedback);
    this.saveFeedback(feedbacks);
    return newFeedback;
  },

  updateFeedback(id: string, updates: Partial<Feedback>): boolean {
    const feedbacks = this.getFeedback();
    const index = feedbacks.findIndex(feedback => feedback.id === id);
    if (index === -1) return false;
    
    feedbacks[index] = { ...feedbacks[index], ...updates };
    this.saveFeedback(feedbacks);
    return true;
  },

  deleteFeedback(id: string): boolean {
    const feedbacks = this.getFeedback();
    const filteredFeedbacks = feedbacks.filter(feedback => feedback.id !== id);
    if (filteredFeedbacks.length === feedbacks.length) return false;
    
    this.saveFeedback(filteredFeedbacks);
    return true;
  },

  // Orders Management
  getOrders(): Order[] {
    const data = localStorage.getItem(ORDERS_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveOrders(orders: Order[]): void {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  },

  addOrder(order: Omit<Order, 'id' | 'createdAt'>): Order {
    const orders = this.getOrders();
    const newOrder: Order = {
      ...order,
      id: `ORD-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    orders.push(newOrder);
    this.saveOrders(orders);
    return newOrder;
  },

  updateOrder(id: string, updates: Partial<Order>): boolean {
    const orders = this.getOrders();
    const index = orders.findIndex(order => order.id === id);
    if (index === -1) return false;
    
    orders[index] = { ...orders[index], ...updates };
    this.saveOrders(orders);
    return true;
  },

  deleteOrder(id: string): boolean {
    const orders = this.getOrders();
    const filteredOrders = orders.filter(order => order.id !== id);
    if (filteredOrders.length === orders.length) return false;
    
    this.saveOrders(filteredOrders);
    return true;
  },

  // Generate realistic sample orders
  generateSampleOrders(): void {
    const sampleOrders: Omit<Order, 'id' | 'createdAt'>[] = [
      {
        customer: 'Sarah Johnson',
        phone: '+1 (555) 123-4567',
        address: '123 Main St, Downtown',
        items: [
          { name: 'Margherita Pizza', quantity: 2, price: 18.99 },
          { name: 'Caesar Salad', quantity: 1, price: 14.99 }
        ],
        total: 52.97,
        status: 'preparing',
        orderTime: new Date(Date.now() - 15 * 60 * 1000).toLocaleTimeString(),
        estimatedTime: '25-30 mins',
        paymentMethod: 'Credit Card'
      },
      {
        customer: 'Mike Chen',
        phone: '+1 (555) 234-5678',
        address: '456 Oak Ave, Midtown',
        items: [
          { name: 'Beef Burger', quantity: 1, price: 22.99 },
          { name: 'Pasta Carbonara', quantity: 1, price: 19.99 }
        ],
        total: 42.98,
        status: 'ready',
        orderTime: new Date(Date.now() - 45 * 60 * 1000).toLocaleTimeString(),
        estimatedTime: 'Ready for pickup',
        paymentMethod: 'Cash'
      },
      {
        customer: 'Emma Davis',
        phone: '+1 (555) 345-6789',
        address: '789 Pine St, Uptown',
        items: [
          { name: 'Grilled Salmon', quantity: 1, price: 28.99 }
        ],
        total: 28.99,
        status: 'delivered',
        orderTime: new Date(Date.now() - 2 * 60 * 60 * 1000).toLocaleTimeString(),
        estimatedTime: 'Delivered',
        paymentMethod: 'Credit Card'
      },
      {
        customer: 'John Smith',
        phone: '+1 (555) 456-7890',
        address: '321 Elm St, Westside',
        items: [
          { name: 'Margherita Pizza', quantity: 1, price: 18.99 },
          { name: 'Caesar Salad', quantity: 2, price: 14.99 }
        ],
        total: 48.97,
        status: 'preparing',
        orderTime: new Date(Date.now() - 8 * 60 * 1000).toLocaleTimeString(),
        estimatedTime: '20-25 mins',
        paymentMethod: 'Credit Card'
      }
    ];
    
    sampleOrders.forEach(order => this.addOrder(order));
  },

  // Initialize with sample data if empty
  initializeSampleData(): void {
    if (this.getInventory().length === 0) {
      const sampleInventory: Omit<InventoryItem, 'id' | 'lastUpdated'>[] = [
        { name: 'Tomatoes', category: 'Vegetables', quantity: 5, unit: 'kg', minStock: 10, maxStock: 50, cost: 3.50, status: 'critical' },
        { name: 'Mozzarella Cheese', category: 'Dairy', quantity: 12, unit: 'pcs', minStock: 20, maxStock: 100, cost: 8.00, status: 'low' },
        { name: 'Olive Oil', category: 'Oils', quantity: 8, unit: 'bottles', minStock: 15, maxStock: 60, cost: 12.00, status: 'low' },
        { name: 'Pasta', category: 'Grains', quantity: 25, unit: 'kg', minStock: 15, maxStock: 80, cost: 2.50, status: 'good' },
        { name: 'Chicken Breast', category: 'Meat', quantity: 30, unit: 'kg', minStock: 20, maxStock: 100, cost: 15.00, status: 'good' },
        { name: 'Basil', category: 'Herbs', quantity: 45, unit: 'bunches', minStock: 30, maxStock: 150, cost: 1.50, status: 'good' },
        { name: 'Salmon Fillet', category: 'Seafood', quantity: 18, unit: 'kg', minStock: 10, maxStock: 40, cost: 25.00, status: 'good' },
        { name: 'Ground Beef', category: 'Meat', quantity: 22, unit: 'kg', minStock: 15, maxStock: 60, cost: 18.00, status: 'good' },
        { name: 'Lettuce', category: 'Vegetables', quantity: 35, unit: 'heads', minStock: 20, maxStock: 100, cost: 2.00, status: 'good' },
        { name: 'Parmesan Cheese', category: 'Dairy', quantity: 6, unit: 'kg', minStock: 8, maxStock: 30, cost: 22.00, status: 'low' }
      ];
      sampleInventory.forEach(item => this.addInventoryItem(item));
    }

    if (this.getMenuItems().length === 0) {
      const sampleMenu: Omit<MenuItem, 'id'>[] = [
        { name: 'Margherita Pizza', category: 'Pizza', price: 18.99, sales: 145, revenue: 2750.55, rating: 4.8, cost: 6.50, profit: 12.49, trend: 'up', views: 1250, conversionRate: 11.6, isActive: true },
        { name: 'Caesar Salad', category: 'Salads', price: 14.99, sales: 89, revenue: 1334.11, rating: 4.6, cost: 4.20, profit: 10.79, trend: 'up', views: 890, conversionRate: 10.0, isActive: true },
        { name: 'Beef Burger', category: 'Burgers', price: 22.99, sales: 67, revenue: 1540.33, rating: 4.4, cost: 8.90, profit: 14.09, trend: 'down', views: 1100, conversionRate: 6.1, isActive: true },
        { name: 'Pasta Carbonara', category: 'Pasta', price: 19.99, sales: 112, revenue: 2238.88, rating: 4.7, cost: 7.20, profit: 12.79, trend: 'stable', views: 980, conversionRate: 11.4, isActive: true },
        { name: 'Grilled Salmon', category: 'Seafood', price: 28.99, sales: 45, revenue: 1304.55, rating: 4.9, cost: 12.50, profit: 16.49, trend: 'up', views: 750, conversionRate: 6.0, isActive: true },
        { name: 'Pepperoni Pizza', category: 'Pizza', price: 21.99, sales: 98, revenue: 2155.02, rating: 4.5, cost: 7.80, profit: 14.19, trend: 'stable', views: 1180, conversionRate: 8.3, isActive: true },
        { name: 'Greek Salad', category: 'Salads', price: 16.99, sales: 56, revenue: 951.44, rating: 4.3, cost: 5.20, profit: 11.79, trend: 'down', views: 720, conversionRate: 7.8, isActive: true },
        { name: 'Chicken Wings', category: 'Appetizers', price: 12.99, sales: 134, revenue: 1680.66, rating: 4.6, cost: 4.50, profit: 8.49, trend: 'up', views: 1450, conversionRate: 9.2, isActive: true }
      ];
      sampleMenu.forEach(item => this.addMenuItem(item));
    }

    if (this.getFeedback().length === 0) {
      const sampleFeedback: Omit<Feedback, 'id'>[] = [
        { customer: 'Sarah Johnson', rating: 5, comment: 'Amazing pizza! The crust was perfectly crispy and the toppings were fresh. Will definitely order again.', date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toLocaleDateString(), dish: 'Margherita Pizza', sentiment: 'positive', helpful: 12, responded: true },
        { customer: 'Mike Chen', rating: 4, comment: 'Good food overall, but the delivery took a bit longer than expected. The pasta was delicious though.', date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString(), dish: 'Pasta Carbonara', sentiment: 'positive', helpful: 8, responded: false },
        { customer: 'Emma Davis', rating: 2, comment: 'The burger was overcooked and the fries were cold. Service was slow. Not impressed.', date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString(), dish: 'Beef Burger', sentiment: 'negative', helpful: 5, responded: true },
        { customer: 'John Smith', rating: 5, comment: 'Excellent salmon dish! Perfectly cooked and the presentation was beautiful. Great experience.', date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toLocaleDateString(), dish: 'Grilled Salmon', sentiment: 'positive', helpful: 15, responded: false },
        { customer: 'Lisa Wang', rating: 3, comment: 'Average salad, nothing special. The dressing was too salty for my taste.', date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toLocaleDateString(), dish: 'Caesar Salad', sentiment: 'neutral', helpful: 3, responded: false },
        { customer: 'David Brown', rating: 5, comment: 'Best pizza in town! The pepperoni was perfectly spiced and the cheese was amazing.', date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toLocaleDateString(), dish: 'Pepperoni Pizza', sentiment: 'positive', helpful: 18, responded: true },
        { customer: 'Anna Wilson', rating: 4, comment: 'Great chicken wings! Crispy outside, juicy inside. The sauce was fantastic.', date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString(), dish: 'Chicken Wings', sentiment: 'positive', helpful: 9, responded: false },
        { customer: 'Tom Garcia', rating: 1, comment: 'Terrible experience. Food was cold, service was rude, and it took forever. Will not return.', date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toLocaleDateString(), dish: 'Greek Salad', sentiment: 'negative', helpful: 2, responded: true }
      ];
      sampleFeedback.forEach(feedback => this.addFeedback(feedback));
    }

    if (this.getOrders().length === 0) {
      this.generateSampleOrders();
    }
  },

  // Clear all data
  clearAllData(): void {
    localStorage.removeItem(INVENTORY_KEY);
    localStorage.removeItem(MENU_KEY);
    localStorage.removeItem(FEEDBACK_KEY);
    localStorage.removeItem(ORDERS_KEY);
  }
};