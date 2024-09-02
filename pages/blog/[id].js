import { useRouter } from 'next/router';
import React from 'react';

const BlogDetail = () => {
	const router = useRouter();
	console.log(router);
	const { id } = router.query;
	return <div>{id} 페이지입니다.</div>;
};

export default BlogDetail;
