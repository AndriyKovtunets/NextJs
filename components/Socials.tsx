import { FC } from 'react'
import Head from 'next/head'
import styles from '../src/styles/Socials.module.scss'
import { socialType } from '../types'

type socialPropsType = {
	socials: socialType
}

const Socials: FC<socialPropsType> = ({ socials }) => {
	if (!socials) {
		return null
	}

	return (
		<>
			<Head>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css'
				/>
			</Head>
			<ul className={styles.socials}>
				{socials &&
					socials.map(({ id, icon, path }) => (
						<li key={id}>
							<a href={path} target='_self' rel='noopener noreferrer'>
								<i className={`fab fa-${icon}`} aria-hidden='true' />
							</a>
						</li>
					))}
			</ul>
		</>
	)
}

export default Socials
