import { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Image from 'next/image'
//import manicure from 'c:/Users/andri/Desktop/JavaScript/next-js/public/manicure.jpg'
import manicure from '/public/manicure.jpg'
import '@/styles/globals.scss'

const MyApp = ({ Component, pageProps }) => (
	<Layout>
		<main>
			<Component {...pageProps} />
		</main>
		<Image
			src={manicure}
			width='400'
			height='100'
			alt='manicure'
			placeholder='blur'
		/>
	</Layout>
)

export default MyApp
