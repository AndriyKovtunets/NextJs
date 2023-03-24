import { FC, ReactNode } from 'react'
import Header from './Heder'
import Footer from './Footer'
import { type } from 'os'

type layoutProps = {
	children: ReactNode
}

const Layout: FC<layoutProps> = ({ children }) => (
	<>
		<Header />
		{children}
		<Footer />
	</>
)
export default Layout
