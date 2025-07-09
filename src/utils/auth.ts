import { User } from '../types';

const AUTH_KEY = 'restroboost_auth';
const USERS_KEY = 'restroboost_users';

export const authUtils = {
  // Get current user from localStorage
  getCurrentUser(): User | null {
    const authData = localStorage.getItem(AUTH_KEY);
    if (!authData) return null;
    
    try {
      const { userId } = JSON.parse(authData);
      const users = this.getUsers();
      return users.find(user => user.id === userId) || null;
    } catch {
      return null;
    }
  },

  // Get all users
  getUsers(): User[] {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  },

  // Save users to localStorage
  saveUsers(users: User[]): void {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },

  // Login user
  login(email: string, password: string): { success: boolean; user?: User; error?: string } {
    const users = this.getUsers();
    const user = users.find(u => u.email === email);
    
    if (!user) {
      return { success: false, error: 'User not found' };
    }
    
    // In a real app, you'd verify the password hash
    // For demo purposes, we'll accept any password
    localStorage.setItem(AUTH_KEY, JSON.stringify({ userId: user.id }));
    return { success: true, user };
  },

  // Register new user
  register(userData: Omit<User, 'id' | 'createdAt'>): { success: boolean; user?: User; error?: string } {
    const users = this.getUsers();
    
    if (users.find(u => u.email === userData.email)) {
      return { success: false, error: 'Email already exists' };
    }
    
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    this.saveUsers(users);
    localStorage.setItem(AUTH_KEY, JSON.stringify({ userId: newUser.id }));
    
    return { success: true, user: newUser };
  },

  // Logout user
  logout(): void {
    localStorage.removeItem(AUTH_KEY);
  },

  // Update user profile
  updateProfile(updates: Partial<User>): { success: boolean; user?: User; error?: string } {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return { success: false, error: 'Not authenticated' };
    }

    const users = this.getUsers();
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex === -1) {
      return { success: false, error: 'User not found' };
    }

    const updatedUser = { ...users[userIndex], ...updates };
    users[userIndex] = updatedUser;
    this.saveUsers(users);

    return { success: true, user: updatedUser };
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }
};