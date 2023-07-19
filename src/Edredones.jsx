import React, { useState } from 'react';

const Edredones = () => {
  const [size, setSize] = useState('Individual');
  const [quantity, setQuantity] = useState(1);
  const [bedClothes, setBedClothes] = useState('');

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handelBedClothes = (e) => {
    setBedClothes(e.target.value);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return(
    <>
    
    <label>
        Tipo:
             <select value={bedClothes} onChange={handelBedClothes}>
                <option value="Edredones">Edredones</option>
                <option value="Cobijas">Cobijas</option>
                <option value="Almohadas">Almohadas</option>
             </select>
            </label>  
      <div>
        <label>
          Size:
          <select value={size} onChange={handleSizeChange}>
            <option value="Individual">Individual</option>
            <option value="Matrimonial">Matrimonial</option>
            <option value="Queen/King">Queen/King</option>
          </select>
        </label>
      </div>

      <div>
        Quantity: {quantity} <button onClick={decrementQuantity}>-</button> <button onClick={incrementQuantity}>+</button>
      </div>
    

    </>
  )

};

export default Edredones;