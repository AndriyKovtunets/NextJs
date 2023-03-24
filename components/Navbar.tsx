import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../src/styles/Navbar.module.scss'
import { FC } from 'react'

const navigation = [
	{ id: 1, title: 'Home', path: '/' },
	{ id: 2, title: 'Posts', path: '/posts' },
	{ id: 3, title: 'Contacts', path: '/contacts' },
]

const Navbar: FC = () => {
	const { pathname } = useRouter()
	console.log(pathname)
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<Image src='/logo.png' width={442} height={85} alt='anych_nails.png' />
			</div>
			<div className={styles.links}>
				{navigation.map(({ id, title, path }) => (
					<Link key={id} href={path} legacyBehavior>
						<a className={pathname === path ? styles.active : null}>{title}</a>
					</Link>
				))}
			</div>
		</nav>
	)
}

export default Navbar
