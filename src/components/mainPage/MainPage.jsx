import {Container} from 'react-bootstrap'
import Banner from './Banner';
import CardNews from './CardNews';

const MainPage = () => {
    return (
        <Container>
            <Banner></Banner>
            <CardNews></CardNews>
        </Container>
    );
};

export default MainPage;