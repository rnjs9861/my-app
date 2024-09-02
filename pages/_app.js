import Layout from '@/components/Layout';
import '@/styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
	const getLayout = Component.getLayout;

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
