import axios from 'axios';

const instance = axios.create({
	baseUrl: 'http://localhost:4000',
});

const getProducts = () => {
	return instance.get('/products');
};

function getProductItem(id) {
	return instance.get(`/products/${id}`);
}

export { getProducts, getProductItem };
