import Layout from '../blocks/Layout';
import Box from '@material-ui/core/Box';

/* Import Other Components */
import WrapContent from './WrapContent';


export default function ErrorStatus({code, message}) {
    return (
        <Layout title={message}>
            <WrapContent>
                <Box mx={3}>
                    <p>{message}</p>
                </Box>  
            </WrapContent>
        </Layout>
    )
}
