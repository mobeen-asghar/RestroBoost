export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  restaurantName: string;
  createdAt: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  minStock: number;
  maxStock: number;
  cost: number;
  status: 'critical' | 'low' | 'good';
  lastUpdated: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  sales: number;
  revenue: number;
  rating: number;
  cost: number;
  profit: number;
  trend: 'up' | 'down' | 'stable';
  views: number;
  conversionRate: number;
  isActive: boolean;
}

export interface Feedback {
  id: string;
  customer: string;
  rating: number;
  comment: string;
  date: string;
  dish: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  helpful: number;
  responded: boolean;
}

export interface Order {
  id: string;
  customer: string;
  phone: string;
  address: string;
  items: OrderItem[];
  total: number;
  status: 'preparing' | 'ready' | 'delivered' | 'cancelled';
  orderTime: string;
  estimatedTime: string;
  paymentMethod: string;
  createdAt: string;
}

export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}