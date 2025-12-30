import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearCart } from '../redux/cartSlice';

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddItem = (item) => dispatch(addItem(item));
  const handleRemoveItem = (id) => dispatch(removeItem(id));
  const handleClearCart = () => dispatch(clearCart());

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>🛒 Shopping Cart</h2>
      </div>
      
      {cart.items.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🛒</div>
          <p>Your cart is empty</p>
          <p>Add some items to get started!</p>
        </div>
      ) : (
        <ul className="cart-items">
          {cart.items.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-info">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-quantity">×{item.quantity}</span>
              </div>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      
      <div className="cart-footer">
        <div className="cart-total">Total: <span>${cart.totalAmount.toFixed(2)}</span></div>
        <div className="cart-actions">
          <button onClick={() => handleAddItem({ id: `item-${Date.now()}`, name: `Product ${cart.items.length + 1}`, price: Math.floor(Math.random() * 50) + 10 })} className="success">
            + Add Item
          </button>
          <button onClick={handleClearCart} className="danger">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
