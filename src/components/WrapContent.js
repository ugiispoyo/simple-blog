import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    wrap: {
        maxWidth: '750px',
        width: '100%',
        margin: '0px auto',
    },
}));


export default function WrapContent({children}) {
    const classes = useStyles();

    return (
        <div className={classes.wrap}>
            {children}
        </div>
    )
}
