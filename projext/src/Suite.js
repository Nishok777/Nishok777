import React, { useContext } from 'react';
import { Grid, Typography, Box, Card, CardMedia, CardContent, Button } from '@mui/material';
import { ProductContext } from './ProductContext';
import { useCart } from './CartContext';
import { Toaster, toast } from 'react-hot-toast';

const Suite = () => {
    const { suites } = useContext(ProductContext);
    const { addToCart } = useCart();

    const handleAddToCart = (suite) => {
        if (addToCart) {
            toast.success(`${suite.name} has been added to the cart`);
            addToCart(suite);
        } else {
            toast.error("Failed to add to cart. Please try again.");
        }
    };

    if (!suites.length) {
        return (
            <Typography variant="h6" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
                No suits available
            </Typography>
        );
    }

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
                Suits Collection
            </Typography>
            <Grid container spacing={2}>
                {suites.map((suite, index) => (
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
                                image={suite.imageUrl}
                                alt={suite.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" gutterBottom>
                                    {suite.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {suite.description}
                                </Typography>
                                <Typography variant="body2" color="text.primary" gutterBottom>
                                    ${suite.price}
                                </Typography>
                                <Button variant="contained" color="primary" onClick={() => handleAddToCart(suite)}>
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

export default Suite;
