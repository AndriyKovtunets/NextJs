import { FC } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import ContactInfo from '../../../components/Contactifo'

export const getServerSideProps = async context => {
	const { id } = context.params
	console.log(context)
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${id}`
	)
	const data = await response.json()
	if (!data) {
		return {
			notFound: true,
		}
	}
	return {
		props: { contact: data },
	}
}
const Contact = ({ contact }) => (
	<>
		<Head>
			<title>Contact</title>
		</Head>
		<ContactInfo contact={contact} />
	</>
)

export default Contact
