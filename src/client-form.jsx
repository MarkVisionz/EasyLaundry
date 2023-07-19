import React, { useState } from 'react';
import Edredones from './Edredones';

const CustomerForm = () => {
  const [customerId, setCustomerId] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [totalClothesKg, setTotalClothesKg] = useState(3);
  const [totalSheetKg, setTotalSheetKg] = useState(3);

  const [showExtras, setShowExtras] = useState(false);
  const [addNew, setAddNew] = useState(false);

  const [extrasCount, setExtrasCount] = useState(0);
  
    const addExtras = () => {
      setExtrasCount((prevCount) => prevCount + 1);
    };
    const lessExtras = () => {
        setExtrasCount((prevCount) => prevCount - 1);
      };

  const toggleExtras = () => {
    setShowExtras(!showExtras);
  };

  const toggleNew = () => {
    setAddNew(!addNew);
  }

 

  const incrementClothesKg = () => {
    setTotalClothesKg(prevValue => prevValue + 1);
  };

  const decrementClothesKg = () => {
    if (totalClothesKg > 0) {
      setTotalClothesKg(prevValue => prevValue - 1);
    }
  };

  const incrementSheetKg = () => {
    setTotalSheetKg(prevValue => prevValue + 1);
  };

  const decrementSheetKg = () => {
    if (totalSheetKg > 0) {
      setTotalSheetKg(prevValue => prevValue - 1);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Automatic ID" value={customerId} onChange={e => setCustomerId(e.target.value)} />
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />

      <div>
        <span>Total Clothes KG: </span>
        <button onClick={decrementClothesKg}>-</button>
        <span>{totalClothesKg}</span>
        <button onClick={incrementClothesKg}>+</button>
      </div>

      <div>
        <span>Total Sheet KG: </span>
        <button onClick={decrementSheetKg}>-</button>
        <span>{totalSheetKg}</span>
        <button onClick={incrementSheetKg}>+</button>
      </div>

      <button onClick={toggleExtras} style={{ backgroundColor: 'green', color: 'white' }}>
        Extras
      </button>

      {showExtras && (
        <div>
      

      { addNew && (
        <div> 

      {Array.from({ length: extrasCount }).map((_, index) =>(
        
        <div key={index}>
            <Edredones></Edredones>
        </div>

      ))}


        </div>
      )}

      <button onClick={toggleNew}>Add New</button>
      <button onClick={addExtras}>Agregar</button>
      <button onClick={lessExtras}>Eliminar</button>

        </div>        
      )}

    </div>
  );
};

export default CustomerForm;
