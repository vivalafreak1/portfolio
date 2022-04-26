import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link 
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" 
                rel="stylesheet"
            />
        </Head>
        <body className='bg-gradient-to-r from-black to-black-dark'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument