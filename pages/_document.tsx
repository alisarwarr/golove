//NEXTJS-DOCUMENT
import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title> Golove </title>
                    <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Poppins:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Poppins:ital,wght@0,400;0,700;0,800;1,400;1,700&family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;