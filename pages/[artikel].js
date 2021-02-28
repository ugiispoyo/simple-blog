import Layout from '../src/blocks/Layout';
import { useRouter } from 'next/router'
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';

/* Import Other Components */
import WrapContent from '../src/components/WrapContent';
import ListItem from '../src/components/ListItem';
/* End Import Other Components */

function Artikel(props) {

    const router = useRouter();

    const handleClick = (e, v) => {
        router.push('/artikel/page/'+v);
    }

    return (
        <Layout title="Artikel">
            <WrapContent>
                {
                    props.data.results.map((value, i) => 
                        <ListItem key={i} data={value} />
                    )
                }
                <Box my={3} display="flex" justifyContent="center">
                    <Pagination count={props.data.total_pages} 
                        variant="outlined" 
                        onChange={handleClick}
                        page={props.data.page} />
                </Box>
            </WrapContent>      
        </Layout>
    )
}

export const getServerSideProps = async ({params,res}) => {
    try {
        let { artikel } = params;
        if(artikel == 'artikel'){
            artikel = 1;
        }
        const data = await fetch(
          process.env.endPoint+"movie/upcoming?page="+parseInt(artikel)+"&api_key="+process.env.apiKey
        ).then((response) => response.json());

        return {
            props: {
                data,
                page: artikel
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