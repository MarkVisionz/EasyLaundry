import React, { useState } from "react";
import { ItemsList } from "./Items-list";
import { ItemsPrices } from "./items-prices";
import SaveItemsModal from "./saveItemsModal";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemData, setSelectedItemData] = useState([]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleItemChange = (title, quantity, data) => {
    const existingItem = selectedItems.find((item) => item.title === title);
  
    if (existingItem) {
      const updatedItems = selectedItems.map((item) =>
        item.title === title ? { ...item, quantity, data } : item
      );
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, { title, quantity, data }]);
    }
  };
  

  const handleSaveItems = (customerId, name, phoneNumber, address) => {
    // Perform any necessary actions with the saved items
    console.log("Save items:", customerId, name, phoneNumber, address, selectedItems);
    handleCloseModal();
  };

  const renderItemsList = () => (
    <div className="sections-container">
      <div className="section">
        <h1>Ropa Personal</h1>
        <div className="items-list-container">
          <ItemsList title="Playeras/Blusas" />
          <ItemsList title="Short/Bermudas" />
          <ItemsList title="Polos" />
          <ItemsList title="Camisas" />
          <ItemsList title="Calzones/Boxers" />
          <ItemsList title="Sostenes" />
          <ItemsList title="Jeans" />
          <ItemsList title="Leggins" />
          <ItemsList title="Overol" />
          <ItemsList title="Faldas" />
          <ItemsList title="Vestidos" />
          <ItemsList title="Toalla Corporal" />
          <ItemsList title="Toalla Facial" />
          <ItemsList title="Toalla Mano" />
          <ItemsList title="Calcetines (Por Pza)" />
        </div>
      </div>
      <div className="section">
        <h1>Ropa de Cama</h1>
        <div className="items-list-container">
          <ItemsList title="Sabanas Planas" />
          <ItemsList title="Sabanas de Cajon" />
          <ItemsList title="Edredon Individual" />
          <ItemsList title="Edredon Matrimonial" />
          <ItemsList title="Edredon Queen Size" />
          <ItemsList title="Edredon King Size" />
          <ItemsList title="Cobija Individual/Matrimonial" />
          <ItemsList title="Cobija Queen/King Size" />
          <ItemsList title="Forro Duvet" />
          <ItemsList title="Duvet Individual/Matrimonial" />
          <ItemsList title="Duvet Queen/King Size" />
          <ItemsList title="Almohada Chica" />
          <ItemsList title="Almohada Mediana" />
          <ItemsList title="Almohada Grande" />
        </div>
      </div>
    </div>
  );

  const renderPricesList = () => (
    <div className="sections-container">
      <div className="section">
        <h1>Ropa Personal</h1>
        <div className="items-list-container">
          <ItemsPrices title="Short/Bermudas" price={45} />
          <ItemsPrices title="Playeras/Blusas" price={45} />
          <ItemsPrices title="Polos" price={45} />
          <ItemsPrices title="Camisas" price={45} />
          <ItemsPrices title="Calzones/Boxers" price={45} />
          <ItemsPrices title="Sostenes" price={45} />
          <ItemsPrices title="Jeans" price={45} />
          <ItemsPrices title="Leggins" price={45} />
          <ItemsPrices title="Overol" price={45} />
          <ItemsPrices title="Faldas" price={45} />
          <ItemsPrices title="Vestidos" price={45} />
          <ItemsPrices title="Toalla Corporal" price={45} />
          <ItemsPrices title="Toalla Facial" price={45} />
          <ItemsPrices title="Toalla Mano" price={45} />
          <ItemsPrices title="Calcetines (Por Pza)" price={45} />
        </div>
      </div>
      <div className="section">
        <h1>Ropa de Cama</h1>
        <div className="items-list-container">
          <ItemsPrices title="Sabanas Planas" price={45} />
          <ItemsPrices title="Sabanas de Cajon" price={45} />
          <ItemsPrices title="Edredon Individual" price={45} />
          <ItemsPrices title="Edredon Matrimonial" price={45} />
          <ItemsPrices title="Edredon Queen Size" price={45} />
          <ItemsPrices title="Edredon King Size" price={45} />
          <ItemsPrices title="Cobija Individual/Matrimonial" price={45} />
          <ItemsPrices title="Cobija Queen/King Size" price={45} />
          <ItemsPrices title="Forro Duvet" price={45} />
          <ItemsPrices title="Duvet Individual/Matrimonial" price={45} />
          <ItemsPrices title="Duvet Queen/King Size" price={45} />
          <ItemsPrices title="Almohada Chica" price={45} />
          <ItemsPrices title="Almohada Mediana" price={45} />
          <ItemsPrices title="Almohada Grande" price={45} />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <button onClick={handleToggle}>
        {toggle ? "Switch to Items List" : "Switch to Prices List"}
      </button>

      {toggle ? renderPricesList() : renderItemsList()}

      <button onClick={handleOpenModal}>Save Items</button>

      {isModalOpen && (
        <SaveItemsModal
        customerId="123"
        name="John Doe"
        phoneNumber="123-456-7890"
        address="123 Main St"
        selectedItems={selectedItems}
        selectedItemData={selectedItemData}
        onClose={handleCloseModal}
        onSave={handleSaveItems}
      />
      
      )}
    </div>
  );
};

export default Toggle;
