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

export default function ListItem(props) {
    const classes = useStyles();

    return (
        <Container>
            <Box
                className={classes.list_}>
                <Grid
                container
                direction="row">
                    <Grid item xs={4}>
                        <ImgItem img={props.data.poster_path} title={props.data.title}  />
                    </Grid>
                    <Grid item xs={8}>
                        <InfoItem title={props.data.title} id={props.data.id} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
