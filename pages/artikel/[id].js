import React, { useState } from 'react';
import Layout from '../../src/blocks/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Import Other Components */
import WrapContent from '../../src/components/WrapContent';
import HeadDetail from '../../src/components/HeadDetail';
import ErrorStatus from '../../src/components/ErrorStatus';
/* End Import Other Components */

const useStyles = makeStyles((theme) => ({
    img_: {
        width: '100%',
        height: '400px'
    },
    h1: {
        fontSize: '35px',
        fontWeight: 'bold',
        marginBottom: '20px'
    },
    p: {
        fontSize: '20px',
        marginBottom: '20px',
        display: 'block'
    },
    share_sosmed: {
        display: 'flex',
        margin: '0px',
        padding: '0px',
        marginBottom: '20px'
    },
    share_sosmed_li: {
        listStyle: 'none',
        margin: '0px 7px',
        fontSize: '30px'
    },
    share_sosmed_li_a: {
        color: '#699bf7'
    }
}));


function Detail(props) {
    const classes = useStyles();
    const router = useRouter();
    const {id} = router.query;

    const [domain, setDomain] = useState(process.env.domain+''+router.asPath);

    if(props.data.status_code === 34) {
        return <ErrorStatus code="404" message="Not Found" />
    }

    return (
        <Layout title="Detail artikel">
            {/* Custom head for meta tag */}
            <HeadDetail 
                url={domain}
                img={process.env.endPointImg+"/"+props.data.poster_path}
                title={props.data.title}
                des={props.data.overview}
            />
            {/* End Custom head for meta tag */}
            <WrapContent>
                <Box mt={2}>
                    <img src={process.env.endPointImg+"/"+props.data.poster_path}
                        width="100%"
                        height="300px"
                        alt={props.data.title}
                        className={classes.img_}
                    />
                </Box>
                <Box p={2}>
                    <Typography variant='h1' className={classes.h1}>
                        {props.data.title}
                    </Typography>
                    <ul className={classes.share_sosmed}>
                        <li className={classes.share_sosmed_li} style={{marginLeft: '0px'}}>
                            Share Sosmed:
                        </li>
                        <li className={classes.share_sosmed_li}>
                            <Link href={"https://twitter.com/intent/tweet?url="+domain}>
                                <a target="blank_" className={classes.share_sosmed_li_a}>
                                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                                </a>
                            </Link>
                        </li>
                        <li className={classes.share_sosmed_li}>
                            <Link href={"https://www.facebook.com/share.php?u="+domain}>
                                <a target="blank_" className={classes.share_sosmed_li_a}>
                                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <p className={classes.p}>
                        {props.data.overview}
                    </p>
                </Box>
            </WrapContent>      
        </Layout>
    )
}

// Get data from API with SSR 
export const getServerSideProps = async ({
    params,
    res,
}) => {
    try {
        const { id } = params;
        const data = await fetch(
          process.env.endPoint+"movie/"+id+"?api_key="+process.env.apiKey
        ).then((response) => response.json());

        return {
            props: {
                data,
            },
        };
    } catch {
        res.statusCode = 404;
        return {
            props: {},
        };
    }
}

export default Detail;