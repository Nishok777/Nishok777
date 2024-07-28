import React, { useState } from 'react';
import { useCart } from './CartContext';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, Typography, Button, Grid, CssBaseline, Divider, Card, CardMedia, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled('div')({
    display: 'flex',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',

    backgroundColor: '#F7F7F7',
});

const StyledAppBar = styled(AppBar)({
    backgroundColor: '#000',
    color: '#FFF',
    fontFamily: "'Open Sans', sans-serif",
});

const ContentContainer = styled(Box)({
    flexGrow: 1,
    padding: '20px',
    fontFamily: "'Open Sans', sans-serif",
});

const drawerWidth = 240;

const DrawerContainer = styled(Drawer)({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
});

const CartPage = () => {
    const { cartItems } = useCart();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const parsePrice = (price) => {
        const cleanedPrice = price.toString().replace(/[^0-9.]/g, '');
        return parseFloat(cleanedPrice);
    };

    const calculateTotalCost = () => {
        return cartItems.reduce((total, item) => {
            const itemPrice = parsePrice(item.price);
            return total + (isNaN(itemPrice) ? 0 : itemPrice * item.quantity);
        }, 0);
    };

    return (
        <MainContainer>
            <CssBaseline />
            <StyledAppBar position="fixed">
                <Toolbar>
                    <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: "'Open Sans', sans-serif" }}>
                        Cart Page
                    </Typography>
                    <Button color="inherit" onClick={() => navigate('/buy')}>
                        Go to Buy Page
                    </Button>
                </Toolbar>
            </StyledAppBar>
            <DrawerContainer variant="temporary" open={drawerOpen} onClose={toggleDrawer}>
                <List>
                    <ListItem button onClick={() => navigate('/buy')}>
                        <ListItemText primary="Buy Page" />
                    </ListItem>
                </List>
                <Divider />
            </DrawerContainer>
            <ContentContainer>
                <Toolbar />
                <Typography variant="h4" gutterBottom>
                    Cart
                </Typography>
                {cartItems.length === 0 ? (
                    <Typography variant="body1">Your cart is empty</Typography>
                ) : (
                    <Grid container spacing={2} sx={{ width: '100%' }}>
                        {cartItems.map((item, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            cursor: 'pointer'
                                        }
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={item.imageUrl}
                                        alt={item.name}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="h6" gutterBottom>
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                        <Typography variant="body2" color="text.primary">
                                            ${isNaN(parsePrice(item.price)) ? '0.00' : parsePrice(item.price).toFixed(2)}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Quantity: {item.quantity}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
                {cartItems.length > 0 && (
                    <Box sx={{ marginTop: 4, textAlign: 'right' }}>
                        <Typography variant="h6">
                            Total Cost: ${calculateTotalCost().toFixed(2)}
                        </Typography>
                        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                            Checkout
                        </Button>
                    </Box>
                )}
            </ContentContainer>
        </MainContainer>
    );
};

export default CartPage;
