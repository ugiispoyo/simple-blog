import Layout from './../src/blocks/Layout';

/* Import Other Components */
import WrapContent from './../src/components/WrapContent';
import Headline from './../src/components/Headline';
import ListItem from './../src/components/ListItem';
/* End Import Other Components */

export default function Home() {
    return (
        <Layout title="Home">
            <WrapContent>
                <Headline /> 

                <ListItem />
                <ListItem />
                <ListItem />
            </WrapContent>      
        </Layout>
    )
}
