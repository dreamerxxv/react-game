import {Image, Container, Card, Col, Row} from 'react-bootstrap';

import Far from "../asset/trending/farCry6.jpg"
import Lol from "../asset/trending/lol.jpg"
import mineCraft from "../asset/trending/minecraft.jpg"
import Olli from "../asset/trending/olliworld.jpg"
import Valo from "../asset/trending/valorant.jpg"
import Wow from "../asset/trending/wow.jpg"

const TrendingGame = () => {
    return (
        <div id="trending">
            <h1 className='text-white fs-2 text-center'>Trending Game</h1>
           <div>
                <Container>
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                        <Image src={mineCraft} className="images"></Image>
                        <Card.Title className="text-center">NEW</Card.Title>
                        <Card.Text className="text-center">This is the a new game of ours</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="gameImage">
                        <Image src={Lol} className="images"></Image>
                        <Card.Title className="text-center">NEW</Card.Title>
                        <Card.Text className="text-center">This is the new game of ours</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="gameImage">
                        <Image src={Far} className="images"></Image>
                        <Card.Title className="text-center">NEW</Card.Title>
                        <Card.Text className="text-center">This is the new game of ours</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="gameImage">
                        <Image src={Olli} className="images"></Image>
                        <Card.Title className="text-center">NEW</Card.Title>
                        <Card.Text className="text-center">This is the new game of ours</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="gameImage">
                        <Image src={Valo} className="images"></Image>
                        <Card.Title className="text-center">NEW</Card.Title>
                        <Card.Text className="text-center">This is the new game of ours</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="gameImage">
                        <Image src={Wow} className="images"></Image>
                        <Card.Title className="text-center">NEW</Card.Title>
                        <Card.Text className="text-center">This is the new game of ours</Card.Text>
                        </Card>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    );
}

export default TrendingGame;