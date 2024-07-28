import React, { useContext } from 'react';
import { Grid, Typography, Box, Card, CardMedia, CardContent, Button } from '@mui/material';
import { ProductContext } from './ProductContext';
import { useCart } from './CartContext';
import { Toaster, toast } from 'react-hot-toast';

const Tshirt = () => {
    const { tshirts } = useContext(ProductContext);
    const { addToCart } = useCart();

    const handleAddToCart = (tshirt) => {
        if (addToCart) {
            toast.success(`${tshirt.name} has been added to the cart`);
            addToCart(tshirt);
        } else {
            toast.error("Failed to add to cart. Please try again.");
        }
    };

    if (!tshirts.length) {
        return (
            <Typography variant="h6" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
                No T-Shirts available
            </Typography>
        );
    }

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
                T-Shirts Collection
            </Typography>
            <Grid container spacing={2}>
                {tshirts.map((tshirt, index) => (
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
                                image={tshirt.imageUrl}
                                alt={tshirt.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" gutterBottom>
                                    {tshirt.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {tshirt.description}
                                </Typography>
                                <Typography variant="body2" color="text.primary" gutterBottom>
                                    ${tshirt.price}
                                </Typography>
                                <Button variant="contained" color="primary" onClick={() => handleAddToCart(tshirt)}>
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

export default Tshirt;
