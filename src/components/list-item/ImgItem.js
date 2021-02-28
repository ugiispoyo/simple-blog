import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    img_: {
        width: '100%',
        height: 'auto',
        maxHeight: '200px',
        overflow: 'hidden'
    }
}));

export default function ImgItem({img, title}) {
    const classes = useStyles();

    return (
        <Box mt={2} mb={1}>
            <img src={process.env.endPointImg+img} 
                width="100%"
                height="300px"
                alt={title}
                className={classes.img_}
            />
        </Box>
    )
}
