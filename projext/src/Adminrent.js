import React, { useState, useRef } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Button,
    Box,
    Typography,
    CssBaseline,
    AppBar,
    Toolbar,
    IconButton,
    Divider,
    TextField,
    Modal,
} from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import '@fontsource/open-sans';
import Shirts from './Shirts';
import Pant from './Pant';
import Tshirt from './Tshirt';
import Trousers from './Trousers';
import Suite from './Suite';
import { useNavigate } from 'react-router-dom';
import { useProducts } from './ProductContext'; // Import context

// Main container for the Buy page
const MainContainer = styled('div')({
    display: 'flex',
    height: '100vh',
    backgroundColor: '#F7F7F7',
});

// Styled AppBar for the page header
const StyledAppBar = styled(AppBar)({
    backgroundColor: '#000',
    color: '#FFF',
    fontFamily: "'Open Sans', sans-serif",
});

// Container for the content on the page
const ContentContainer = styled(Box)({
    flexGrow: 1,
    padding: '20px',
    fontFamily: "'Open Sans', sans-serif",
});

// Drawer content
const drawerWidth = 240;

// Drawer component
const DrawerContainer = styled(Drawer)({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
});

const Adminrent = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [openModal, setOpenModal] = useState(''); // Changed from false to empty string
    const [newShirt, setNewShirt] = useState({ imageUrl: '', name: '', description: '', price: '' });
    const [newPant, setNewPant] = useState({ imageUrl: '', name: '', description: '', price: '' });
    const [newTrouser, setNewTrouser] = useState({ imageUrl: '', name: '', description: '', price: '' });
    const [newTshirt, setNewTshirt] = useState({ imageUrl: '', name: '', description: '', price: '' });
    const [newSuite, setNewSuite] = useState({ imageUrl: '', name: '', description: '', price: '' });

    const { shirts, pants, tshirts, trousers, suites, addShirt, addPant, addTshirt, addTrouser, addSuite } = useProducts(); // Use context

    // Refs for each section
    const shirtRef = useRef(null);
    const pantRef = useRef(null);
    const tshirtRef = useRef(null);
    const trousersRef = useRef(null);
    const suiteRef = useRef(null);

    // Toggle the drawer's open/close state
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    // Handle click events for clothing type buttons
    const handleButtonClick = (clothingType) => {
        console.log(`Selected clothing type: ${clothingType}`);
        let ref = null;
        switch (clothingType) {
            case 'Shirt':
                ref = shirtRef;
                break;
            case 'Pant':
                ref = pantRef;
                break;
            case 'T-Shirt':
                ref = tshirtRef;
                break;
            case 'Trousers':
                ref = trousersRef;
                break;
            case 'Suits':
                ref = suiteRef;
                break;
            default:
                break;
        }
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
        setDrawerOpen(false); // Close the drawer after selecting an item
    };

    // Handle add new item
    const handleAddNewShirt = () => {
        addShirt(newShirt);
        setOpenModal('');
        setNewShirt({ imageUrl: '', name: '', description: '', price: '' });
    };

    const handleAddNewPant = () => {
        addPant(newPant);
        setOpenModal('');
        setNewPant({ imageUrl: '', name: '', description: '', price: '' });
    };

    const handleAddNewTrouser = () => {
        addTrouser(newTrouser);
        setOpenModal('');
        setNewTrouser({ imageUrl: '', name: '', description: '', price: '' });
    };

    const handleAddNewSuite = () => {
        addSuite(newSuite);
        setOpenModal('');
        setNewSuite({ imageUrl: '', name: '', description: '', price: '' });
    };

    const handleAddNewTshirt = () => {
        addTshirt(newTshirt);
        setOpenModal('');
        setNewTshirt({ imageUrl: '', name: '', description: '', price: '' });
    };

    const navigate = useNavigate();

    // Handle login button click
    const handleLogin = () => {
        if (loggedIn) {
            setLoggedIn(false); // If logged in, log out on click
        } else {
            navigate('/login'); // If not logged in, navigate to login page
        }
    };

    return (
        <MainContainer>
            <CssBaseline />
            <StyledAppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: "'Open Sans', sans-serif" }}>
                        Admin Rent Page
                    </Typography>
                </Toolbar>
            </StyledAppBar>
            <DrawerContainer
                variant="temporary"
                open={drawerOpen}
                onClose={toggleDrawer}
                ModalProps={{ keepMounted: true }}
            >
                <List>
                    <ListItem button onClick={() => handleButtonClick('Shirt')}>
                        <ListItemText primary="Shirts" />
                    </ListItem>
                    <ListItem button onClick={() => handleButtonClick('Pant')}>
                        <ListItemText primary="Pants" />
                    </ListItem>
                    <ListItem button onClick={() => handleButtonClick('T-Shirt')}>
                        <ListItemText primary="T-Shirts" />
                    </ListItem>
                    <ListItem button onClick={() => handleButtonClick('Trousers')}>
                        <ListItemText primary="Trousers" />
                    </ListItem>
                    <ListItem button onClick={() => handleButtonClick('Suits')}>
                        <ListItemText primary="Suits" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button onClick={() => setOpenModal('Shirt')}>
                        <ListItemText primary="Add New Shirt" />
                    </ListItem>
                    <ListItem button onClick={() => setOpenModal('Pant')}>
                        <ListItemText primary="Add New Pant" />
                    </ListItem>
                    <ListItem button onClick={() => setOpenModal('T-Shirt')}>
                        <ListItemText primary="Add New T-Shirt" />
                    </ListItem>
                    <ListItem button onClick={() => setOpenModal('Trousers')}>
                        <ListItemText primary="Add New Trousers" />
                    </ListItem>
                    <ListItem button onClick={() => setOpenModal('Suits')}>
                        <ListItemText primary="Add New Suit" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button onClick={handleLogin}>
                        <ListItemText primary={loggedIn ? 'Logout' : 'Login'} />
                    </ListItem>
                </List>
            </DrawerContainer>
            <ContentContainer>
                <Toolbar />
                <Box ref={shirtRef} id="shirt">
                    <Shirts />
                </Box>
                <Box ref={pantRef} id="pant">
                    <Pant />
                </Box>
                <Box ref={tshirtRef} id="tshirt">
                    <Tshirt />
                </Box>
                <Box ref={trousersRef} id="trousers">
                    <Trousers />
                </Box>
                <Box ref={suiteRef} id="suite">
                    <Suite />
                </Box>
            </ContentContainer>

            {/* Modals for adding new products */}
            <Modal
                open={openModal === 'Shirt'}
                onClose={() => setOpenModal('')}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{ width: 400, bgcolor: 'background.paper', p: 4, margin: 'auto', mt: '10%', borderRadius: 2 }}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Add New Shirt
                    </Typography>
                    <TextField
                        label="Image URL"
                        fullWidth
                        margin="normal"
                        value={newShirt.imageUrl}
                        onChange={(e) => setNewShirt({ ...newShirt, imageUrl: e.target.value })}
                    />
                    <TextField
                        label="Name"
                        fullWidth
                        margin="normal"
                        value={newShirt.name}
                        onChange={(e) => setNewShirt({ ...newShirt, name: e.target.value })}
                    />
                    <TextField
                        label="Description"
                        fullWidth
                        margin="normal"
                        value={newShirt.description}
                        onChange={(e) => setNewShirt({ ...newShirt, description: e.target.value })}
                    />
                    <TextField
                        label="Price"
                        fullWidth
                        margin="normal"
                        value={newShirt.price}
                        onChange={(e) => setNewShirt({ ...newShirt, price: e.target.value })}
                    />
                    <Button onClick={handleAddNewShirt} variant="contained" color="primary">
                        Add Shirt
                    </Button>
                </Box>
            </Modal>

            <Modal
                open={openModal === 'Pant'}
                onClose={() => setOpenModal('')}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{ width: 400, bgcolor: 'background.paper', p: 4, margin: 'auto', mt: '10%', borderRadius: 2 }}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Add New Pant
                    </Typography>
                    <TextField
                        label="Image URL"
                        fullWidth
                        margin="normal"
                        value={newPant.imageUrl}
                        onChange={(e) => setNewPant({ ...newPant, imageUrl: e.target.value })}
                    />
                    <TextField
                        label="Name"
                        fullWidth
                        margin="normal"
                        value={newPant.name}
                        onChange={(e) => setNewPant({ ...newPant, name: e.target.value })}
                    />
                    <TextField
                        label="Description"
                        fullWidth
                        margin="normal"
                        value={newPant.description}
                        onChange={(e) => setNewPant({ ...newPant, description: e.target.value })}
                    />
                    <TextField
                        label="Price"
                        fullWidth
                        margin="normal"
                        value={newPant.price}
                        onChange={(e) => setNewPant({ ...newPant, price: e.target.value })}
                    />
                    <Button onClick={handleAddNewPant} variant="contained" color="primary">
                        Add Pant
                    </Button>
                </Box>
            </Modal>

            <Modal
                open={openModal === 'T-Shirt'}
                onClose={() => setOpenModal('')}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{ width: 400, bgcolor: 'background.paper', p: 4, margin: 'auto', mt: '10%', borderRadius: 2 }}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Add New T-Shirt
                    </Typography>
                    <TextField
                        label="Image URL"
                        fullWidth
                        margin="normal"
                        value={newTshirt.imageUrl}
                        onChange={(e) => setNewTshirt({ ...newTshirt, imageUrl: e.target.value })}
                    />
                    <TextField
                        label="Name"
                        fullWidth
                        margin="normal"
                        value={newTshirt.name}
                        onChange={(e) => setNewTshirt({ ...newTshirt, name: e.target.value })}
                    />
                    <TextField
                        label="Description"
                        fullWidth
                        margin="normal"
                        value={newTshirt.description}
                        onChange={(e) => setNewTshirt({ ...newTshirt, description: e.target.value })}
                    />
                    <TextField
                        label="Price"
                        fullWidth
                        margin="normal"
                        value={newTshirt.price}
                        onChange={(e) => setNewTshirt({ ...newTshirt, price: e.target.value })}
                    />
                    <Button onClick={handleAddNewTshirt} variant="contained" color="primary">
                        Add T-Shirt
                    </Button>
                </Box>
            </Modal>

            <Modal
                open={openModal === 'Trousers'}
                onClose={() => setOpenModal('')}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{ width: 400, bgcolor: 'background.paper', p: 4, margin: 'auto', mt: '10%', borderRadius: 2 }}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Add New Trousers
                    </Typography>
                    <TextField
                        label="Image URL"
                        fullWidth
                        margin="normal"
                        value={newTrouser.imageUrl}
                        onChange={(e) => setNewTrouser({ ...newTrouser, imageUrl: e.target.value })}
                    />
                    <TextField
                        label="Name"
                        fullWidth
                        margin="normal"
                        value={newTrouser.name}
                        onChange={(e) => setNewTrouser({ ...newTrouser, name: e.target.value })}
                    />
                    <TextField
                        label="Description"
                        fullWidth
                        margin="normal"
                        value={newTrouser.description}
                        onChange={(e) => setNewTrouser({ ...newTrouser, description: e.target.value })}
                    />
                    <TextField
                        label="Price"
                        fullWidth
                        margin="normal"
                        value={newTrouser.price}
                        onChange={(e) => setNewTrouser({ ...newTrouser, price: e.target.value })}
                    />
                    <Button onClick={handleAddNewTrouser} variant="contained" color="primary">
                        Add Trouser
                    </Button>
                </Box>
            </Modal>

            <Modal
                open={openModal === 'Suits'}
                onClose={() => setOpenModal('')}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{ width: 400, bgcolor: 'background.paper', p: 4, margin: 'auto', mt: '10%', borderRadius: 2 }}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Add New Suit
                    </Typography>
                    <TextField
                        label="Image URL"
                        fullWidth
                        margin="normal"
                        value={newSuite.imageUrl}
                        onChange={(e) => setNewSuite({ ...newSuite, imageUrl: e.target.value })}
                    />
                    <TextField
                        label="Name"
                        fullWidth
                        margin="normal"
                        value={newSuite.name}
                        onChange={(e) => setNewSuite({ ...newSuite, name: e.target.value })}
                    />
                    <TextField
                        label="Description"
                        fullWidth
                        margin="normal"
                        value={newSuite.description}
                        onChange={(e) => setNewSuite({ ...newSuite, description: e.target.value })}
                    />
                    <TextField
                        label="Price"
                        fullWidth
                        margin="normal"
                        value={newSuite.price}
                        onChange={(e) => setNewSuite({ ...newSuite, price: e.target.value })}
                    />
                    <Button onClick={handleAddNewSuite} variant="contained" color="primary">
                        Add Suit
                    </Button>
                </Box>
            </Modal>
        </MainContainer>
    );
};

export default Adminrent;
