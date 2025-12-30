import React, { useState, useMemo } from 'react';

const Dashboard = () => {
  const [filter, setFilter] = useState('');
  
  // Sample data for the dashboard
  const items = useMemo(() => [
    { id: 1, name: 'Sales Report', category: 'Reports', status: 'Complete', value: '$12,450' },
    { id: 2, name: 'User Analytics', category: 'Analytics', status: 'In Progress', value: '2,340 users' },
    { id: 3, name: 'Revenue Chart', category: 'Finance', status: 'Complete', value: '$45,200' },
    { id: 4, name: 'Inventory Status', category: 'Operations', status: 'Pending', value: '156 items' },
    { id: 5, name: 'Customer Feedback', category: 'Support', status: 'Complete', value: '4.8/5 rating' },
    { id: 6, name: 'Marketing Campaign', category: 'Marketing', status: 'In Progress', value: '78% reach' },
  ], []);

  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Complete': return '#10b981';
      case 'In Progress': return '#f59e0b';
      case 'Pending': return '#6366f1';
      default: return '#94a3b8';
    }
  };

  return (
    <div className="dashboard-container">
      <h2>📊 Dashboard Overview</h2>
      
      <div style={{ marginBottom: '24px' }}>
        <input
          type="text"
          placeholder="🔍 Filter items..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '14px 16px',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            fontSize: '1em',
            transition: 'all 0.3s ease'
          }}
        />
      </div>

      <div className="dashboard-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="dashboard-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <span style={{ 
                padding: '4px 12px', 
                background: '#e2e8f0', 
                borderRadius: '20px', 
                fontSize: '0.8em',
                color: '#64748b'
              }}>
                {item.category}
              </span>
              <span style={{ 
                padding: '4px 12px', 
                background: `${getStatusColor(item.status)}20`,
                color: getStatusColor(item.status),
                borderRadius: '20px', 
                fontSize: '0.8em',
                fontWeight: '600'
              }}>
                {item.status}
              </span>
            </div>
            <h3 style={{ margin: '0 0 8px 0', color: '#1e293b', fontSize: '1.1em' }}>{item.name}</h3>
            <p style={{ margin: 0, fontSize: '1.5em', fontWeight: '700', color: '#6366f1' }}>{item.value}</p>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">🔍</div>
          <p>No items found matching "{filter}"</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
