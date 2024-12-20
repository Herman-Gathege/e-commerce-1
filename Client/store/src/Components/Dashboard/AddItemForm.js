// // AddItemForm.js
// import React, { useState } from 'react';

// const AddItemForm = ({ onAddItem }) => {
//   const [newProduct, setNewProduct] = useState({
//     name: '',
//     description: '',
//     price: '',
//     imageUrl: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct({ ...newProduct, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddItem(newProduct); // Pass new product data to parent component
//     setNewProduct({ name: '', description: '', price: '', imageUrl: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" value={newProduct.name} onChange={handleChange} placeholder="Name" />
//       <input type="text" name="description" value={newProduct.description} onChange={handleChange} placeholder="Description" />
//       <input type="text" name="price" value={newProduct.price} onChange={handleChange} placeholder="Price" />
//       <input type="text" name="imageUrl" value={newProduct.imageUrl} onChange={handleChange} placeholder="Image URL" />
//       <button type="submit">Add Item</button>
//     </form>
//   );
// };

// export default AddItemForm;

import React, { useState } from 'react';

const AddItemForm = ({ onAddItem }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    imageFile: null, // Change from imageUrl to imageFile for the file input
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first file
    setNewProduct({ ...newProduct, imageFile: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    // Append all form data
    formData.append('name', newProduct.name);
    formData.append('description', newProduct.description);
    formData.append('price', newProduct.price);
    formData.append('image', newProduct.imageFile); // Append the image file

    // Call the parent component's handler with formData
    onAddItem(formData);

    // Reset form
    setNewProduct({ name: '', description: '', price: '', imageFile: null });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        value={newProduct.name} 
        onChange={handleChange} 
        placeholder="Name" 
      />
      <input 
        type="text" 
        name="description" 
        value={newProduct.description} 
        onChange={handleChange} 
        placeholder="Description" 
      />
      <input 
        type="text" 
        name="price" 
        value={newProduct.price} 
        onChange={handleChange} 
        placeholder="Price" 
      />
      <input 
        type="file" 
        name="image" 
        onChange={handleFileChange} 
        placeholder="Choose Image"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
