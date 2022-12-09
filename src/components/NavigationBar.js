import {Navbar,Container, Nav} from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant='dark'>
        <Container>
                <Navbar.Brand href="/">Intro</Navbar.Brand>
                <Nav>
                <Nav.Link href='#trending'>TrendingGame</Nav.Link>
                <Nav.Link href='#best'>BestGame</Nav.Link>
                <Nav.Link href='#contact'>Contact</Nav.Link>
                <Nav.Link href='#footer'>Footer</Nav.Link>
                </Nav>
        </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;