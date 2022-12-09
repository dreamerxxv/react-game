import {Container, Nav, Col, Button} from 'react-bootstrap';

const Intro = () => {
    return (
        <div id="intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Nav>
                    <Col className='mt-5'>
                    <div className="title">Game Holic</div>

                    <Button variant="dark" className='mt-3' href="#trending">See All</Button>
                    </Col>
                </Nav>
            </Container>
        </div>
    );
}

export default Intro;