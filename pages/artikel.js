import Layout from './../src/blocks/Layout';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

/* Import Other Components */
import WrapContent from './../src/components/WrapContent';
import ListItem from './../src/components/ListItem';
/* End Import Other Components */

function Artikel(props) {

    console.log(props.data.results)

    return (
        <Layout title="Home">
            <WrapContent>
                {
                    props.data.results.map((value, i) => 
                        <ListItem key={i} data={value} />
                    )
                }
                <Box my={3} display="flex" justifyContent="center">
                    <Link href="/artikel">
                        <Button variant="contained" color="primary">
                            Lihat semuanya
                        </Button>
                    </Link>
                </Box>
            </WrapContent>      
        </Layout>
    )
}

export const getServerSideProps = async () => {
    try {
        const data = await fetch(
          process.env.endPoint+"movie/upcoming?api_key="+process.env.apiKey
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

export default Artikel;