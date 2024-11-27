import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField, Typography, Paper } from '@mui/material';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/items'; // API URL for JSON Server

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: '', quantity: '' });
  const [editingItem, setEditingItem] = useState(null); // State for the item being edited

  // Fetch items from the JSON server
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(apiUrl);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleAddItem = async () => {
    if (newItem.name && newItem.price && newItem.quantity) {
      try {
        const response = await axios.post(apiUrl, {
          name: newItem.name,
          price: parseFloat(newItem.price),
          quantity: parseInt(newItem.quantity),
        });
        setItems([...items, response.data]);
        setNewItem({ name: '', price: '', quantity: '' }); // Clear the form after adding
      } catch (error) {
        console.error('Error adding item:', error);
      }
    } else {
      console.log('Please fill out all fields'); // Ensure that all fields are filled
    }
  };

  const handleRemoveItem = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
    setNewItem({ name: item.name, price: item.price, quantity: item.quantity }); // Pre-fill the form
  };

  const handleUpdateItem = async () => {
    if (editingItem) {
      try {
        const response = await axios.put(`${apiUrl}/${editingItem.id}`, {
          name: newItem.name,
          price: parseFloat(newItem.price),
          quantity: parseInt(newItem.quantity),
        });
        setItems(items.map(item => (item.id === editingItem.id ? response.data : item)));
        setEditingItem(null); // Reset editing item
        setNewItem({ name: '', price: '', quantity: '' }); // Clear the form
      } catch (error) {
        console.error('Error updating item:', error);
      }
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Inventory
      </Typography>

      <Paper style={{ padding: '16px', marginBottom: '16px' }}>
        <Typography variant="h6">{editingItem ? 'Edit Item' : 'Add New Item'}</Typography>
        <TextField
          label="Item Name"
          variant="outlined"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          style={{ marginRight: '16px' }}
        />
        <TextField
          label="Item Price"
          variant="outlined"
          type="number"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          style={{ marginRight: '16px' }}
        />
        <TextField
          label="Quantity"
          variant="outlined"
          type="number"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
          style={{ marginRight: '16px' }}
        />
        {editingItem ? (
          <Button variant="contained" color="primary" onClick={handleUpdateItem}>
            Update Item
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleAddItem}>
            Add Item
          </Button>
        )}
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item Name</TableCell>
              <TableCell>Item Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => handleEditItem(item)} style={{ marginLeft: '8px' }}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Inventory;
