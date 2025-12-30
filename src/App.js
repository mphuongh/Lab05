import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ShoppingCart from './components/ShoppingCart';
import UserProfile from './components/UserProfile';
import { Tabs, Tab, Panel } from './components/Tabs';
import LoginForm from './components/LoginForm';
import './assets/styles/app.css';

function TabsDemo() {
  return (
    <div className="tabs-container">
      <h2>🗂️ Compound Tabs Demo</h2>
      <Tabs defaultIndex={0}>
        <div className="tabs-header">
          <Tab index={0}>📊 Overview</Tab>
          <Tab index={1}>⚙️ Settings</Tab>
          <Tab index={2}>📝 Details</Tab>
        </div>
        <Panel index={0}>
          <div className="tab-panel">
            <h3>Welcome to the Overview</h3>
            <p>This is a compound component pattern that allows flexible tab navigation.</p>
            <p>Each tab manages its own state through React Context API.</p>
          </div>
        </Panel>
        <Panel index={1}>
          <div className="tab-panel">
            <h3>Settings Panel</h3>
            <p>Configure your application preferences here.</p>
            <p>This demonstrates how compound components share state seamlessly.</p>
          </div>
        </Panel>
        <Panel index={2}>
          <div className="tab-panel">
            <h3>Details Section</h3>
            <p>View detailed information and analytics.</p>
            <p>The active state is managed by the parent Tabs component.</p>
          </div>
        </Panel>
      </Tabs>
    </div>
  );
}

function HomePage() {
  return (
    <div className="content-card" style={{ textAlign: 'center', padding: '60px 32px' }}>
      <h2 style={{ border: 'none', paddingBottom: 0 }}>🚀 Welcome to React Advanced Lab</h2>
      <p style={{ fontSize: '1.2em', color: '#64748b', maxWidth: '600px', margin: '20px auto' }}>
        Explore advanced React patterns including state machines, Redux, compound components, and more.
      </p>
      <p style={{ color: '#94a3b8' }}>Select a demo from the navigation above to get started.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <header className="app-header">
          <h1>⚛️ React Advanced Lab</h1>
          <nav>
            <ul>
              <li><Link to="/">🏠 Home</Link></li>
              <li><Link to="/user-profile">👤 User Profile</Link></li>
              <li><Link to="/shopping-cart">🛒 Shopping Cart</Link></li>
              <li><Link to="/dashboard">📊 Dashboard</Link></li>
              <li><Link to="/tabs">🗂️ Tabs</Link></li>
              <li><Link to="/login">🔐 Login</Link></li>
            </ul>
          </nav>
        </header>

        <Suspense fallback={<div className="loading">Loading</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tabs" element={<TabsDemo />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
