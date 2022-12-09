import {Container, Button, Card} from 'react-bootstrap';

const Contact = () => {
    return (
        <div id="contact">
            <Container className="text-center d-flex justify-content-center align-items-center">
                <div className="mt-5">
                    <div className="Col">
                    <div className="title">Contact Us</div>

                    <div className='col-12 mt-3'>
                        <input type="text" className='form-control' placeholder="Your Name"></input>
                    </div>

                    <div className='col-12 mt-3'>
                        <textarea type="text" className='form-control' placeholder="Message"></textarea>
                    </div>

                    <Button className="btn btn-warning mt-3" href="#intro">Send</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Contact;