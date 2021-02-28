import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    my_wrap: {
        width: '100%',
        display: 'flex',
        background: '#699BF7',
        justifyContent: 'space-between',
    },
    p_footer: {
        textAlign: 'center',
        display: 'block',
        color: '#fff',
        width: '100%',
        fontSize: '12px'
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <Container className={classes.my_wrap}>
            <p className={classes.p_footer}>&copy; 2021 Simple Blog. By: Ugi Ispoyo Widodo</p>
        </Container>
    )
}
