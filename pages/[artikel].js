import Layout from '../src/blocks/Layout';
import safeJsonStringify from 'safe-json-stringify';
import { useRouter } from 'next/router'
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';

/* Import Other Components */
import WrapContent from '../src/components/WrapContent';
import ListItem from '../src/components/ListItem';
/* End Import Other Components */

function Artikel({results, total_pages, page}) {

    const router = useRouter();

    const handleClick = (e, v) => {
        router.push('/artikel/page/'+v);
    }
    
    return (
        <Layout title="Artikel">
            <WrapContent>
                {
                    results.map((value, i) => {
                            return (
                                <ListItem key={i} data={value} />
                            )
                        }
                    )
                }
                <Box my={3} display="flex" justifyContent="center">
                    <Pagination count={total_pages} 
                        variant="outlined" 
                        onChange={handleClick}
                        page={page} />
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
        let data = await fetch(
          process.env.endPoint+"movie/upcoming?page="+parseInt(artikel)+"&api_key="+process.env.apiKey
        ).then((response) => response.json());

        let dataResults = safeJsonStringify(data.results);
        let results = JSON.parse(dataResults);

        return {
            props: {
                results: results,
                total_pages: data.total_pages,
                page: parseInt(artikel)
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