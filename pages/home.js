import Layout from './../src/blocks/Layout';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

/* Import Other Components */
import WrapContent from './../src/components/WrapContent';
import Headline from './../src/components/Headline';
import ListItem from './../src/components/ListItem';
/* End Import Other Components */

function Home(props) {

    console.log(props.data.results)

    return (
        <Layout title="Home">
            <WrapContent>
                <Headline data={props.data.results[0]} /> 
                {
                    props.data.results.map((value, i) => {
                            return (
                                i > 0 ?
                                    <ListItem key={i} data={value} />
                                : null
                            )   
                        }
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

export const getServerSideProps = async ({res}) => {
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

export default Home;