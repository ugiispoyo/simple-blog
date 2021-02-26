import Layout from './../src/blocks/Layout';

/* Import Other Components */
import WrapContent from './../src/components/WrapContent';
import Headline from './../src/components/Headline';
import ListItem from './../src/components/ListItem';
/* End Import Other Components */


export default function Artikel() {
    return (
        <Layout title="Title">
            <WrapContent>
                <ListItem />
                <ListItem />
                <ListItem />
            </WrapContent>      
        </Layout>
    )
}
