import React from 'react';
import Head from 'next/head';

export default function HeadDetail(props) {
    return (
        <Head>
            {/* Twitter */}
            <meta name="twitter:card" content="summary" key="twcard" />
            <meta name="twitter:creator" content={props.title} key="twhandle" />

            {/* Open Graph */}
            <meta property="og:url" content={props.url} key="ogurl" />
            <meta property="og:image" content={props.img} key="ogimage" />
            <meta property="og:site_name" content="simpleblog.com" key="ogsitename" />
            <meta property="og:title" content={props.title} key="ogtitle" />
            <meta property="og:description" content={props.des} key="ogdesc" />
        </Head>
    )
}
