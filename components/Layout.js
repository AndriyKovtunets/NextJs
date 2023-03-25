import Header from './Heder'
import Footer from './Footer'

const Layout = ({ children }) => (
	<>
		<Header />
		{children}
		<Footer />
	</>
)
export default Layout
