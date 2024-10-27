import React, { useState } from 'react';

const AddProduct = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, price, description });
    setName('');
    setPrice(0);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ürün Adı" required />
      <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Fiyat" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Açıklama" required />
      <button type="submit">Ürün Ekle</button>
    </form>
  );
};

export default AddProduct;
