import React from 'react';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    a: {
        textDecoration: 'none',
        color: '#007bb2'
    },
}));

export default function InfoItem({title, id}) {
    const classes = useStyles();

    return (
        <Box mt={2} mb={1} ml={3}>
            <Link href={"/detail/"+id}>
                <a className={classes.a}>
                    <Typography variant='h5'>
                        {title}
                    </Typography>
                </a>
            </Link>
        </Box>
    )
}
