import { getProducts } from '@/api';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
const ProductList = () => {
	// CSR 로 내용을 채워줌.
	// Hydration (하이드레이션)
	const [goods, setGoods] = useState([]);
	const getGoods = async () => {
		try {
			const { data } = await getProducts();
			setGoods(data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getGoods();
	}, []);
	return (
		<ul>
			{goods &&
				goods.map(item => (
					<li key={item.id} className={styles.productitem}>
						<Link href={`/product/${item.id}`}>
							<div>
								{/* <img src={item.imageUrl} alt="item.name" /> */}
								<Image
									src={item.imageUrl}
									width={300}
									height={200}
									alt={item.name}
								/>
							</div>
							<div>{item.name}</div>
						</Link>
					</li>
				))}
		</ul>
	);
};

export default ProductList;
