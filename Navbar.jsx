// // src/components/Navbar.js
// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     const isAuthenticated = localStorage.getItem('authenticated') === 'true';
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem('authenticated');
//         navigate('/login');
//     };

//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
//     const handleMenuClose = () => setAnchorEl(null);

//     return (
//         <AppBar position="static">
//             <Toolbar>
//                 <Typography variant="h6" sx={{ flexGrow: 1 }}>
//                     Pharmacy Management System
//                 </Typography>
//                 {isAuthenticated ? (
//                     <>
//                         <Button color="inherit" component={Link} to="/">Dashboard</Button>
//                         <Button color="inherit" component={Link} to="/inventory">Inventory</Button>
//                         <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
//                             More
//                         </Button>
//                         <Menu
//                             id="simple-menu"
//                             anchorEl={anchorEl}
//                             keepMounted
//                             open={Boolean(anchorEl)}
//                             onClose={handleMenuClose}
//                         >
//                             <MenuItem onClick={handleMenuClose} component={Link} to="/notifications">Notifications</MenuItem>
//                             <MenuItem onClick={handleMenuClose} component={Link} to="/reports">Reports</MenuItem>
//                             <MenuItem onClick={handleMenuClose} component={Link} to="/search">Search</MenuItem>
//                         </Menu>
//                         <Button color="inherit" onClick={handleLogout}>Logout</Button>
//                     </>
//                 ) : (
//                     <Button color="inherit" component={Link} to="/login">Login</Button>
//                     // <Button color="inherit" component={Link} to="/signup">SignUp</Button>
//                 )}
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Navbar;
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authenticated');
        navigate('/login');
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Stock Management
                </Typography>
                {isAuthenticated ? (
                    <>
                        <Button color="inherit" component={Link} to="/">Dashboard</Button>
                        <Button color="inherit" component={Link} to="/inventory">Inventory</Button>
                        <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
                            More
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose} component={Link} to="/notifications">Notifications</MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/reports">Reports</MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/search">Search</MenuItem>
                        </Menu>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </>
                ) : (
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;