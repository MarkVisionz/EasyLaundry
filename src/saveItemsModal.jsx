import React, { useState } from 'react';
import Modal from './modal';
import { ItemsList } from './Items-list';

const SaveItemsModal = ({ customerId, name, phoneNumber, address, onClose, onSave }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemChange = (title, quantity) => {
    const existingItem = selectedItems.find((item) => item.title === title);

    if (existingItem) {
      const updatedItems = selectedItems.map((item) =>
        item.title === title ? { ...item, quantity } : item
      );
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, { title, quantity }]);
    }
  };

  const handleConfirm = () => {
    // Call the onSave callback if provided
    if (onSave) {
      onSave(customerId, name, phoneNumber, address, selectedItems);
    }

    // Close the modal
    onClose();
  };

  const handleCancel = () => {
    // Close the modal
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className="modal-content">
        <h2>Save Items Modal</h2>

        <div className="customer-info">
          <h3>Customer Information</h3>
          <p>Customer ID: {customerId}</p>
          <p>Name: {name}</p>
          <p>Phone Number: {phoneNumber}</p>
          <p>Address: {address}</p>
        </div>

        <div className="selected-items">
          <h3>Selected Items</h3>
          {selectedItems.map((item) => (
            <p key={item.title}>
              {item.title}: {item.quantity}
            </p>
          ))}
        </div>

        <ItemsList title="Playeras/Blusas" onChange={handleItemChange} />

        <div className="modal-actions">
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default SaveItemsModal;
