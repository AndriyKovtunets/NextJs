import { FC } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
//import { useEffect, useState } from 'react'
import Heading from '../../../components/Heading'
import { contactType } from '../../../types'

type contactsTypeProps = {
	contacts: [contactType]
}

// функція некста яка вертає потрібні пропси які потім передаються в компонент
export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await response.json()
	if (!data) {
		return {
			notFound: true,
		}
	}
	return {
		props: { contacts: data },
	}
}

const Contact: FC<contactsTypeProps> = ({ contacts }) => {
	/* виконання через юзстейт. недолік те що пошук гугл не бачить інфо бо це все робиться на клієнтській частині.
	 const [contacts, setContacts] = useState(null)
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/users')
			const data = await response.json()
			setContacts(data)
		}
		fetchData()
	}, []) */
	return (
		<>
			<Head>
				<title>Contacts</title>
			</Head>
			<Heading text='Contact list' />
			<ul>
				{contacts &&
					contacts.map(({ id, name, email }) => (
						<li key={id}>
							<Link href={`/contacts/${id}`}>{name}</Link>
						</li>
					))}
			</ul>
		</>
	)
}

export default Contact
