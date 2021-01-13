import Document, { Html, Head, Main, NextScript } from 'next/document';
import { mediaStyles } from '../media';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap'
						rel='stylesheet'
					/>
					<style
						type='text/css'
						dangerouslySetInnerHTML={{ __html: mediaStyles }}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
