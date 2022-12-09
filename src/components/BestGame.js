import {Image, Container, Card, Col, Row} from 'react-bootstrap';

import Back from "../asset/best/back4blood.jpg"
import Cry from "../asset/best/crysis3.jpg"
import Resident from "../asset/best/residentEvil2.jpg"
import Walking from "../asset/best/theWalkingDead.jpg"
import Thief from "../asset/best/thief.jpg"
import Dawn from "../asset/best/untilDawn.jpg"

const BestGame = () => {
    return (
        <div id="best">
            <h1 className='text-white fs-2 text-center'>Best Game</h1>
           <div>
                <Container>
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                        <Image src={Resident} className="images"></Image>
                        <Card.Title className="text-center">Recomendation</Card.Title>
                        <Card.Text className="text-center">This is the a Recomendation game of ours</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="gameImage">
                        <Image src={Cry} className="images"></Image>
                        <Card.Title className="text-center">Recomendation</Card.Title>
                        <Card.Text className="text-center">This is the Recomendation game of ours</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="gameImage">
                        <Image src={Back} className="images"></Image>
                        <Card.Title className="text-center">Recomendation</Card.Title>
                        <Card.Text className="text-center">This is the Recomendation game of ours</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="gameImage">
                        <Image src={Walking} className="images"></Image>
                        <Card.Title className="text-center">Recomendation</Card.Title>
                        <Card.Text className="text-center">This is the Recomendation game of ours</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="gameImage">
                        <Image src={Thief} className="images"></Image>
                        <Card.Title className="text-center">Recomendation</Card.Title>
                        <Card.Text className="text-center">This is the Recomendation game of ours</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="gameImage">
                        <Image src={Dawn} className="images"></Image>
                        <Card.Title className="text-center">Recomendation</Card.Title>
                        <Card.Text className="text-center">This is the Recomendation game of ours</Card.Text>
                        </Card>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    );
}

export default BestGame;