import React, { useReducer, useEffect } from 'react';

// Custom user data - you can modify this!
const userData = {
  name: 'Minh Phuong',
  email: 'minhphuong@example.com',
  phone: '+84 123 456 789',
  website: 'minhphuong.dev',
  company: { name: 'Tech Solutions' },
  address: { city: 'Ho Chi Minh City' }
};

const fetchUserData = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return userData;
};

const initialState = { status: 'idle', data: null, error: null };

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, status: 'loading' };
    case 'FETCH_SUCCESS':
      return { ...state, status: 'resolved', data: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, status: 'rejected', error: action.error };
    default:
      throw new Error();
  }
}

const UserProfile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const data = await fetchUserData(); // Define this function to fetch data
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', error });
      }
    };
    fetchData();
  }, []);

  if (state.status === 'loading') return <div className="loading">Loading profile</div>;
  if (state.status === 'rejected') return <div className="error">⚠️ Error: {state.error?.message || 'Failed to load profile'}</div>;
  
  const user = state.data;
  return (
    <div className="profile-container">
      <h2>👤 User Profile</h2>
      <div className="profile-card">
        <div className="profile-avatar">
          {user?.name?.charAt(0) || '?'}
        </div>
        <div className="profile-info">
          <p><strong>Name</strong> <span>{user?.name}</span></p>
          <p><strong>Email</strong> <span>{user?.email}</span></p>
          <p><strong>Phone</strong> <span>{user?.phone}</span></p>
          <p><strong>Website</strong> <span>{user?.website}</span></p>
          <p><strong>Company</strong> <span>{user?.company?.name}</span></p>
          <p><strong>City</strong> <span>{user?.address?.city}</span></p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
