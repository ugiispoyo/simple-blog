import Head from 'next/head';

/* Import other blocks */
import Navbar from './Navbar';
import Footer from './Footer';
/* End Import other blocks */

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}
