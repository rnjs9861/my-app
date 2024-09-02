import CommonLayout from '@/layouts/CommonLayout';
import React from 'react';

const Home = () => {
	return <div> 안녕하세요. </div>;
};

export default Home;

Home.getLayout = function getLayout(page) {
	return <CommonLayout>{page}</CommonLayout>;
};
