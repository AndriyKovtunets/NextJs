import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head />

			<link
				className='favicon'
				href='data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAACYpu0Aj5nMAAAAAACzvOgA////AJym1gBytdYAosToAIm36ADk7vIA7fL1AMrS/ADr6+sA19z6ANzr8gAAAAAAImiIiIiIhiIiZ3cAAHd2IiJniO5OiHYiImcD7k7gdiIiZxO70zF2IiJnE7vTMXYiImcTu9MxdiIihxO70zF4IiJnU7vTNXYiIodTu9M1eCIih1O70zV4IiKIU7vTNYgiIihTu9M1giIiIlO70zUiIiIiyUREnCIiIiLJqkScIiLAAwAAwAMAAMADAADAAwAAwAMAAMADAADAAwAAwAMAAMADAADAAwAAwAMAAMADAADgBwAA8A8AAPAPAADwDwAA'
				rel='icon'
				type='image/x-icon'
			/>

			<link
				className='font'
				href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap'
				rel='stylesheet'
			/>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
