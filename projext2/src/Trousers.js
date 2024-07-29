import React, { useContext } from 'react';
import { Grid, Typography, Box, Card, CardMedia, CardContent, Button } from '@mui/material';
import { ProductContext } from './ProductContext';
import { useCart } from './CartContext';
import { Toaster, toast } from 'react-hot-toast';

const Trousers = ({ category }) => {
    const { trousers } = useContext(ProductContext);
    const { addToCart } = useCart();

    const handleAddToCart = (trouser) => {
        if (addToCart) {
            toast.success(`${trouser.name} has been added to the cart`);
            addToCart(trouser, category);
        } else {
            toast.error("Failed to add to cart. Please try again.");
        }
    };

    if (!trousers.length) {
        return (
            <Typography variant="h6" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
                No trousers available
            </Typography>
        );
    }

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
                Trousers Collection
            </Typography>
            <Grid container spacing={2}>
                {trousers.map((trouser, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
                                image={require(`./assets/${trouser.imageUrl}`)}
                                alt={trouser.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" gutterBottom>
                                    {trouser.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {trouser.description}
                                </Typography>
                                <Typography variant="body2" color="text.primary" gutterBottom>
                                    ${trouser.price}
                                </Typography>
                                <Button variant="contained" color="primary" onClick={() => handleAddToCart(trouser)}>
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Toaster position="top-right" reverseOrder={false} />
        </Box>
    );
};

export default Trousers;
