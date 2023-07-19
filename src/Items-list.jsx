import React, { useState } from "react";
import "./items-list.css";

export function ItemsList(props) {
  const [item, setTotalItem] = useState(0);

  const incrementItem = () => {
    setTotalItem((prevValue) => prevValue + 1);
  };

  const decrementItem = () => {
    if (item > 0) {
      setTotalItem((prevValue) => prevValue - 1);
    }
  };

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
    setTotalItem(isNaN (newValue) ? '' : newValue);
  };

  return (
    <div className="items-list">
      <span className="title">{props.title}</span>
      <div className="quantity-container">
        <button className="decrement-button" onClick={decrementItem}>
          -
        </button>

        <input className="item-input" value={item} onChange={handleInputChange}/>

        <button className="increment-button" onClick={incrementItem}>
          +
        </button>

        {/* <span className='price'>{props.price}</span> */}
      </div>
    </div>
  );
}
