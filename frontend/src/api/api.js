// src/api/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend URL

// Function to fetch all products
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Function to fetch a single product by ID
export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
