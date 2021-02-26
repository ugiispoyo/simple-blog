import Link from 'next/link';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    nav: {
        display: 'flex',
        width: '100%',
        height: '50px',
        background: '#699BF7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    my_wrap: {
        maxWidth: '750px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    nav_a: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: 20,
        marginLeft: '20px'
    }
}));

export default function Navbar() {
    const classes = useStyles();
  
    return (
        <Container className={classes.nav}>
            <div className={classes.my_wrap}>
                <div>
                    <Link href="/">
                        <a style={{marginLeft: '15px'}} className={classes.nav_a}>
                            <Image className={classes.logoExample}
                                src="/images/example-logo.png"
                                width="100px"
                                height="30px"
                                alt="Contoh logo" />
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/">
                        <a className={classes.nav_a}>
                            Home
                        </a>
                    </Link>
                    <Link href="/artikel">
                        <a className={classes.nav_a}>
                            Artikel
                        </a>
                    </Link>
                </div>
            </div>
        </Container>
    )
}
