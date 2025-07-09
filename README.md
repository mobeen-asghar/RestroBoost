# 🍽️ RestroBoost - Restaurant Management SaaS Platform

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-blue.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **RestroBoost** is a comprehensive restaurant management platform that helps local restaurants increase revenue, reduce waste, and delight customers through smart technology and data-driven insights.

## ✨ Features

### 📊 **Smart Analytics Dashboard**
- Real-time revenue tracking and forecasting
- Customer behavior analysis and insights
- Peak hours identification and optimization
- Comprehensive reporting tools
- Performance metrics visualization

### 📦 **Intelligent Inventory Management**
- Real-time stock monitoring with automated alerts
- Smart reorder notifications based on usage patterns
- Supplier management and cost tracking
- Waste reduction insights and recommendations
- Critical/low/good stock status indicators

### 🍕 **Menu Optimization**
- AI-powered menu performance analysis
- Profit margin calculations and optimization
- Sales trend tracking and forecasting
- Customer preference insights
- Dynamic pricing recommendations

### 💬 **Customer Feedback Intelligence**
- Sentiment analysis with AI-powered insights
- Multi-platform review aggregation
- Response management tools
- Customer satisfaction scoring
- Actionable improvement suggestions

### 🛒 **Seamless Online Ordering**
- Multi-platform order management (DoorDash, Uber Eats, etc.)
- Real-time order tracking and status updates
- Kitchen display integration
- Customer communication tools
- Delivery optimization

### 👥 **User Management & Authentication**
- Secure user authentication system
- Role-based access control
- Profile management
- Multi-restaurant support
- Settings customization

## 🚀 Live Demo

**Demo Credentials:**
- Email: `Create free account`
- Password: Any password works for demo

[🔗 **Try RestroBoost Live**](https://restroboost.netlify.app)

## 🛠️ Tech Stack

- **Frontend:** React 18.3.1 with TypeScript
- **Styling:** Tailwind CSS 3.4.1
- **Build Tool:** Vite 5.4.2
- **Icons:** Lucide React
- **State Management:** React Hooks + localStorage
- **Routing:** Client-side routing
- **Deployment:** Netlify/Vercel ready

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/mobeen-asghar/RestroBoost.git
cd RestroBoost
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Start Development Server
```bash
npm run dev
# or
yarn dev
```

### 4. Open in Browser
Navigate to `http://localhost:5173` in your browser.

## 📁 Project Structure

```
restroboost/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── auth/          # Authentication components
│   │   ├── modals/        # Modal components
│   │   └── public/        # Public pages
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   │   ├── auth.ts        # Authentication utilities
│   │   └── storage.ts     # localStorage management
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🎯 Key Components

### Dashboard Components
- **Dashboard.tsx** - Main analytics dashboard
- **Inventory.tsx** - Inventory management interface
- **MenuOptimization.tsx** - Menu performance analysis
- **CustomerFeedback.tsx** - Feedback management system
- **OnlineOrdering.tsx** - Order management interface

### Authentication System
- **Login.tsx** - User login interface
- **Signup.tsx** - User registration
- **Settings.tsx** - User profile management
- **ProtectedRoute.tsx** - Route protection

### Modal Components
- **AddInventoryModal.tsx** - Add new inventory items
- **EditInventoryModal.tsx** - Edit existing inventory
- **AddMenuItemModal.tsx** - Create menu items
- **EditMenuItemModal.tsx** - Edit menu items
- **AddOrderModal.tsx** - Create new orders
- **AddFeedbackModal.tsx** - Add customer feedback

### Public Pages
- **LandingPage.tsx** - Marketing homepage
- **FeaturesPage.tsx** - Feature showcase
- **PricingPage.tsx** - Pricing plans
- **CaseStudiesPage.tsx** - Success stories
- **AboutPage.tsx** - Company information

## 💾 Data Management

RestroBoost uses **localStorage** for data persistence, making it perfect for demos and prototypes. The data structure includes:

- **Users** - Authentication and profile data
- **Inventory** - Stock items with status tracking
- **Menu Items** - Restaurant menu with performance metrics
- **Orders** - Customer orders with status management
- **Feedback** - Customer reviews and ratings

### Sample Data
The application automatically generates realistic sample data including:
- 10+ inventory items with various stock levels
- 8+ menu items with sales data and ratings
- Multiple customer orders with different statuses
- Customer feedback with sentiment analysis

## 🎨 Design System

### Color Palette
- **Primary:** Yellow (#EAB308) - Brand color for CTAs and highlights
- **Secondary:** Gray (#6B7280) - Text and subtle elements
- **Success:** Green (#10B981) - Positive actions and status
- **Warning:** Yellow (#F59E0B) - Alerts and warnings
- **Error:** Red (#EF4444) - Errors and critical status

### Typography
- **Headings:** Inter font family, bold weights
- **Body:** Inter font family, regular weight
- **Code:** Monospace font family

### Components
- Consistent 8px spacing system
- Rounded corners (4px, 8px, 12px)
- Subtle shadows and hover effects
- Responsive design with mobile-first approach

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

## 📱 Responsive Design

RestroBoost is fully responsive and optimized for:
- **Desktop** (1024px+) - Full dashboard experience
- **Tablet** (768px-1023px) - Adapted layouts
- **Mobile** (320px-767px) - Mobile-optimized interface

## 🔐 Authentication

The demo authentication system includes:
- **Demo Account:** `demo@restroboost.com` (any password)
- **Registration:** Create new accounts
- **Profile Management:** Update user information
- **Session Management:** Persistent login state

## 🚀 Deployment

### Netlify Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Vercel Deployment
1. Connect your GitHub repository
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

### Manual Deployment
```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain component modularity
- Write descriptive commit messages
- Test thoroughly before submitting

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library
- **Vite** - For the lightning-fast build tool
- **Pexels** - For the high-quality stock photos

## 📞 Support

- **Documentation:** [Wiki](https://github.com/mobeen-asghar/RestroBoost/wiki)
- **Issues:** [GitHub Issues](https://github.com/mobeen-asghar/RestroBoost/issues)
- **Discussions:** [GitHub Discussions](https://github.com/mobeen-asghar/RestroBoost/discussions)
- **Email:** support@restroboost.com

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Core dashboard functionality
- ✅ Inventory management
- ✅ Menu optimization
- ✅ Customer feedback system
- ✅ Order management

### Phase 2 (Planned)
- 🔄 Real-time notifications
- 🔄 Advanced analytics
- 🔄 Multi-location support
- 🔄 API integrations
- 🔄 Mobile app

### Phase 3 (Future)
- 📋 AI-powered recommendations
- 📋 Advanced reporting
- 📋 Third-party integrations
- 📋 White-label solutions

---

<div align="center">

**Built with ❤️ for the restaurant industry**

[⭐ Star this repo](https://github.com/mobeen-asghar/RestroBoost) • [🐛 Report Bug](https://github.com/mobeen-asghar/RestroBoost/issues) • [💡 Request Feature](https://github.com/mobeen-asghar/RestroBoost/issues)

</div>