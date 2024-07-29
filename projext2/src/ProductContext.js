import React, { createContext, useState } from 'react';
import { useContext } from 'react';

// Create the context
export const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
    const [shirts, setShirts] = useState([{
        imageUrl: 'img1.jpg',
        name: 'Classic White Shirt',
        description: 'A timeless white shirt perfect for any occasion.',
        price: '$29.99',
    },
    {
        imageUrl: 'img2.jpg',
        name: 'Blue Denim Shirt',
        description: 'Casual denim shirt for a laid-back look.',
        price: '$39.99',
    },
    {
        imageUrl: 'img3.jpg',
        name: 'Striped Casual Shirt',
        description: 'Comfortable striped shirt for everyday wear.',
        price: '$24.99',
    },
    {
        imageUrl: 'img4.jpg',
        name: 'Floral Print Shirt',
        description: 'Vibrant floral shirt to brighten up your wardrobe.',
        price: '$34.99',
    },
    {
        imageUrl: 'img5.jpg',
        name: 'Plaid Shirt',
        description: 'Classic plaid shirt for a rustic look.',
        price: '$32.99',
    },
    {
        imageUrl: 'img6.jpg',
        name: 'Linen Shirt',
        description: 'Lightweight linen shirt for summer days.',
        price: '$44.99',
    },
    {
        imageUrl: 'img7.jpg',
        name: 'Black Formal Shirt',
        description: 'Elegant black shirt for formal occasions.',
        price: '$49.99',
    },
    {
        imageUrl: 'img8.jpg',
        name: 'Graphic Tee',
        description: 'Stylish graphic tee for casual outings.',
        price: '$19.99',
    },]);
    const [pants, setPants] = useState([{
        imageUrl: 'img9.jpg',
        name: 'Slim Fit Jeans',
        description: 'Modern slim fit jeans for everyday wear.',
        price: '39.99',
    },
    {
        imageUrl: 'img10.jpg',
        name: 'Chinos',
        description: 'Comfortable chinos for a smart-casual look.',
        price: '29.99',
    },]);
    const [tshirts, setTshirts] = useState([{
        imageUrl: 'img11.jpg',
        name: 'Graphic T-Shirt',
        description: 'Stylish graphic t-shirt for a casual look.',
        price: '19.99',
    },
    {
        imageUrl: 'img12.jpg',
        name: 'Plain T-Shirt',
        description: 'Simple plain t-shirt for everyday wear.',
        price: '14.99',
    },]);
    const [trousers, setTrousers] = useState([{
        imageUrl: 'img13.jpg',
        name: 'Formal Trousers',
        description: 'Elegant formal trousers for office wear.',
        price: '49.99',
    },
    {
        imageUrl: 'img16.jpg',
        name: 'Casual Trousers',
        description: 'Comfortable casual trousers for everyday use.',
        price: '34.99',
    },]);
    const [suites, setSuites] = useState([{
        imageUrl: 'img17.jpg',
        name: 'Classic Black Suit',
        description: 'Elegant black suit for formal events.',
        price: '199.99',
    },
    {
        imageUrl: 'img15.jpg',
        name: 'Blue Business Suit',
        description: 'Professional blue suit for business meetings.',
        price: '179.99',
    },]);

    // Function to add new items
    const addShirt = (newShirt) => setShirts([...shirts, newShirt]);
    const addPant = (newPant) => setPants([...pants, newPant]);
    const addTshirt = (newTshirt) => setTshirts([...tshirts, newTshirt]);
    const addTrouser = (newTrouser) => setTrousers([...trousers, newTrouser]);
    const addSuite = (newSuite) => setSuites([...suites, newSuite]);

    return (
        <ProductContext.Provider value={{ shirts, pants, tshirts, trousers, suites, addShirt, addPant, addTshirt, addTrouser, addSuite }}>
            {children}
        </ProductContext.Provider>
    );
};
export const useProducts = () => useContext(ProductContext);
