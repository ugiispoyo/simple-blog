import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import ImgItem from './list-item/ImgItem';
import InfoItem from './list-item/InfoItem';


const useStyles = makeStyles((theme) => ({
   list_: {
       paddingBottom: '5px',
       marginBottom: '5px',
       borderBottom: '1px solid #666'
    }
}));

export default function ListItem() {
    const classes = useStyles();

    return (
        <Container>
            <Box
                className={classes.list_}>
                <Grid
                container
                direction="row">
                    <Grid xs={4}>
                        <ImgItem />
                    </Grid>
                    <Grid xs={8}>
                        <InfoItem />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
