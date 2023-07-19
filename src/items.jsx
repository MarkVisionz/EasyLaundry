import React, { useState } from 'react';
import "./contact-form.css"

const Items = () => {
  const [customerId, setCustomerId] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');


  return (
    <div className='items-container'>

      <div className="input-field">
        <input type="text" placeholder="Automatic ID" value={customerId} onChange={e => setCustomerId(e.target.value)} />
      </div>

      <div className="input-field">
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      </div>

      <div className="input-field">
        <input type="text" placeholder="(+52) Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
      </div>

      <div className="input-field">
        <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
      </div>

      
    </div>
  )
};


export default Items;