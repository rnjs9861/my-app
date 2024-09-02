import React from 'react';
import CommonLayout from '../commonlayout';

const first = () => {
	return <div>첫 내용</div>;
};

export default first;

first.getLayout = function getLayout(page) {
	return <CommonLayout>{page}</CommonLayout>;
};
