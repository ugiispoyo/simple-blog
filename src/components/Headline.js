import React from 'react';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    a: {
        textDecoration: 'none',
        color: '#007bb2'
    },
    img_headline: {
        width: '100%',
        height: '400px'
    }
}));


export default function Headline({data}) {
    const classes = useStyles();

    return (
        <Container>
            <Box mt={2} mb={1}>
                <img src={process.env.endPointImg+data.poster_path} 
                    width="100%"
                    height="300px"
                    alt={data.title}
                    className={classes.img_headline}
                />
                <Link href={'/detail/'+data.id}>
                    <a className={classes.a}>
                        <Typography variant='h4'>
                            {data.title}
                        </Typography>
                    </a>
                </Link>
            </Box>
        </Container>
    )
}
