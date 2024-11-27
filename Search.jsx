// // src/components/SearchFilter.jsx

// import React, { useState } from 'react';
// import { TextField, Paper, Typography, List, ListItem, Divider, Button } from '@mui/material';

// const SearchFilter = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [stockItems, setStockItems] = useState([
//     { id: 1, name: 'Citracine', price: 10.99, quantity: 15 },
//     { id: 2, name: 'Adderall', price: 7.50, quantity: 8 },
//     { id: 3, name: 'Ativan', price: 22.10, quantity: 12 },
//     {id: 4 , name: 'Cotton', price: 100.99, quantity: 5},
//     {id: 5, name: 'Luer Lock', price: 33.99, quantity: 100},
//     {id: 6, name: 'Zandu Ayrvedic Syrup', price: 777.90, qunatity: 1500.99},
//     {id: 7, name: 'Dabur Broncorid' ,price: 867.99, quantity: 99}
//   ]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredItems = stockItems.filter(item =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleAddItem = () => {
//     const newItem = { id: stockItems.length + 1, name: `Car ${stockItems.length + 1}`, price: Math.random() * 30, quantity: Math.floor(Math.random() * 20) + 1 };
//     setStockItems([...stockItems, newItem]);
//   };

//   return (
//     <Paper elevation={3} style={{ padding: '20px' }}>
//       <TextField 
//         label="Search Stock Items" 
//         fullWidth 
//         value={searchTerm} 
//         onChange={handleSearch} 
//         variant="outlined"
//         margin="normal"
//       />
      
//       {/* Display filtered results */}
//       <List style={{ marginTop: '20px', maxHeight: '200px', overflowY: 'auto' }}>
//         {filteredItems.length === 0 ? (
//           <ListItem>
//             <Typography>No items found</Typography>
//           </ListItem>
//         ) : (
//           filteredItems.map((item) => (
//             <div key={item.id}>
//               <ListItem>
//                 <Typography>
//                   {item.name} - ${item.price.toFixed(2)} (Qty: {item.quantity})
//                 </Typography>
//               </ListItem>
//               <Divider />
//             </div>
//           ))
//         )}
//       </List>

//       {/* Button to add a new item for testing */}
//       <Button variant="contained" color="primary" onClick={handleAddItem} style={{ marginTop: '20px' }}>
//         Add Random Item
//       </Button>
//     </Paper>
//   );
// };

// export default SearchFilter;
// src/components/SearchFilter.jsx

import React, { useState } from 'react';
import { TextField, Paper, Typography, List, ListItem, Divider, Button } from '@mui/material';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [stockItems, setStockItems] = useState([
    { id: 1, name: 'Apple', price: 10.99, quantity: 15 },
    { id: 2, name: 'Laptop', price: 7.50, quantity: 8 },
    { id: 3, name: 'Mobile', price: 22.10, quantity: 12 },
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = stockItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddItem = () => {
    const newItem = { id: stockItems.length + 1, name: `Car ${stockItems.length + 1}`, price: Math.random() * 30, quantity: Math.floor(Math.random() * 20) + 1 };
    setStockItems([...stockItems, newItem]);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <TextField 
        label="Search Stock Items" 
        fullWidth 
        value={searchTerm} 
        onChange={handleSearch} 
        variant="outlined"
        margin="normal"
      />
      
      {/* Display filtered results */}
      <List style={{ marginTop: '20px', maxHeight: '200px', overflowY: 'auto' }}>
        {filteredItems.length === 0 ? (
          <ListItem>
            <Typography>No items found</Typography>
          </ListItem>
        ) : (
          filteredItems.map((item) => (
            <div key={item.id}>
              <ListItem>
                <Typography>
                  {item.name} - ${item.price.toFixed(2)} (Qty: {item.quantity})
                </Typography>
              </ListItem>
              <Divider />
            </div>
          ))
        )}
      </List>

      {/* Button to add a new item for testing */}
      <Button variant="contained" color="primary" onClick={handleAddItem} style={{ marginTop: '20px' }}>
        Add Random Item
      </Button>
    </Paper>
  );
};

export default SearchFilter;