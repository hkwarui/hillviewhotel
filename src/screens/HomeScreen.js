import { Row, Col,Container,Card,Form,Button,Carousel,Tabs,Tab } from 'react-bootstrap'
import { useState } from 'react'
import room1 from "../resources/images/room-01.jpg"
import room2 from "../resources/images/room-02.jpg"
import room5 from "../resources/images/room-05.jpg"

import coursel1 from "../resources/images/1.jpg"
import coursel2 from "../resources/images/2.jpg"
import coursel3 from "../resources/images/4.jpg"
import coursel4 from "../resources/images/6.jpg"
import logo from '../resources/images/logo.jpeg'

const HomeScreen = ()=>{
    const [index, setIndex] = useState(0);
    const [key, setKey] = useState('home');
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
    <>
    <div  style={{background:"../resources/slid-bg.jpg"}}>
        
<Row className="main text-center">
     
        <Col className="my-auto" md={12}>
        <img src={logo} width="200" height="200" fluid />
            <h1> HIGHLAND VIEW HOTEL </h1>
        <h2> 
            <i class="far fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i>
            A Five Star Hotel
            <i class="far fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i>
        </h2>
        <h3>
            And we like to keep it that way
        </h3>
        <Button variant="primary">SEE ALL ROOMS</Button>{' '}
        </Col>
        <Col md={12}>
        <Container>
        <Form className="bookForm">
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPhone">
      <Form.Label>Phone</Form.Label>
      <Form.Control type="number" placeholder="Enter phone" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridType">
    <Form.Label>Type</Form.Label>


        </Form.Group>

        <Form.Group as={Col} controlId="formGridCheckIn">
      <Form.Label>CheckIn</Form.Label>
      <Form.Control type="date" placeholder="Enter phone" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCheckOut">
      <Form.Label>Check Out</Form.Label>
      <Form.Control type="date" placeholder="Enter phone" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCheckOut">
    <Form.Label></Form.Label>
  <Button variant="primary" type="submit">
    BOOK NOW
  </Button>
      </Form.Group>

  </Row>

 




</Form>
</Container>
</Col>
    </Row>
   
   
 

   {/* <Row>
   <div class="container-fluid contenedor text-center">
   <h1 class="text-center">Guests Favorite Rooms </h1>
   <div class=" container text-center">
   <Row>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
         <div class="ver_mas text-center">
            <span  class="lnr lnr-eye"></span>
         </div>
         <article class="text-left">
            <h2> DE <br/>LA IMAGEN</h2>
            <h4>Descripción corta de la imagen en cuestión</h4>
         </article>
         <img src={room1} alt=""/>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto">
         <div class="ver_mas text-center">
            <span id="click" class="lnr lnr-eye"></span>
         </div>
         <article class="text-left">
            <h2>TÍTULO DE <br/>LA IMAGEN</h2>
            <h4>Descripción corta de la imagen en cuestión</h4>
         </article>
         <img src={room2} alt=""/>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto">
         <div class="ver_mas text-center">
            <span class="lnr lnr-eye"></span>
         </div>
         <article class="text-left">
            <h2>TÍTULO DE <br/>LA IMAGEN</h2>
            <h4>Descripción corta de la imagen en cuestión</h4>
         </article>
         <img src={room5} alt=""/>
      </div>
   </Row>
   </div>
</div>
   </Row> */}
   <section className="my-4">
   <Container>

    <Row>

    <h1 class="text-center" id="header">USP section </h1>
   
    <Col>
    <Card className="p-4">
  <div className="card-body text-center">
    <h5 className="card-title">
        <div className="circle">
        <i class="fas fa-glass-martini"></i>
        </div>
        </h5>
    <h6 className="card-subtitle mb-2 text-muted">Beverages included</h6>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum.</p>
    <a href="#" className="card-link">Read More</a>

  </div>
</Card>
    </Col>

    <Col>
    <Card className="p-4">
  <div className="card-body text-center">
    <h5 className="card-title">
        <div className="circle">
        <i class="fas fa-glass-martini"></i>
        </div>
        </h5>
    <h6 className="card-subtitle mb-2 text-muted">Beverages included</h6>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum.</p>
    <a href="#" className="card-link">Read More</a>

  </div>
</Card>
    </Col>


    <Col>
    <Card className="p-4">
  <div className="card-body text-center">
    <h5 className="card-title">
        <div className="circle">
        <i class="fas fa-glass-martini"></i>
        </div>
        </h5>
    <h6 className="card-subtitle mb-2 text-muted">Beverages included</h6>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum.</p>
    <a href="#" className="card-link">Read More</a>

  </div>
</Card>
    </Col>

    <Col>
    <Card className="p-4">
  <div className="card-body text-center">
    <h5 className="card-title">
        <div className="circle">
        <i class="fas fa-glass-martini"></i>
        </div>
        </h5>
    <h6 className="card-subtitle mb-2 text-muted">Beverages included</h6>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum.</p>
    <a href="#" className="card-link">Read More</a>

  </div>
</Card >
    </Col>
    
    </Row>
    </Container>
    </section>
    <section>
    <Row className="BlogAdd text-center text-light p-4" >
        <Col>
        <h1>StarHotel</h1>
        <h2>An Exceptional Hotel Theme! </h2>
     
        <Button class="outline-primary">CHECKOUT THE BLOG</Button>
        </Col>
    </Row>
    </section>

    <section>
    <Container>
    <Row>
    <h1 class="text-center" id="header">Our Blogs </h1>
    <Row>
        <Col md={6} >
            <Card>
            <div className="d-flex">
                <div className="imageHolder">
                <Card.Img variant="top" src="https://www.chitrakootweb.com/template/fivestar/img/blog/blog-06.jpg" />
                    </div>
                    <div>
                    <Card.Body>
    <Card.Title>Nov. 04, 2019</Card.Title>
    <Card.Text>
    Best oriental hotel channel on youTube for our clients.
    </Card.Text>
    <Button variant="primary">Read More</Button>
  </Card.Body>
                        </div>
            </div>
            </Card>
        </Col>

        <Col md={6} >
            <Card>
            <div className="d-flex">
                <div className="imageHolder">
                <Card.Img variant="top" src="https://www.chitrakootweb.com/template/fivestar/img/blog/blog-06.jpg" />
                    </div>
                    <div>
                    <Card.Body>
    <Card.Title>Nov. 04, 2019</Card.Title>
    <Card.Text>
    Best oriental hotel channel on youTube for our clients.
    </Card.Text>
    <Button variant="primary">Read More</Button>
  </Card.Body>
                        </div>
            </div>
            </Card>
        </Col>

        <Col md={6} >
            <Card>
            <div className="d-flex">
                <div className="imageHolder">
                <Card.Img variant="top" src="https://www.chitrakootweb.com/template/fivestar/img/blog/blog-06.jpg" />
                    </div>
                    <div>
                    <Card.Body>
    <Card.Title>Nov. 04, 2019</Card.Title>
    <Card.Text>
    Best oriental hotel channel on youTube for our clients.
    </Card.Text>
    <Button variant="primary">Read More</Button>
  </Card.Body>
                        </div>
            </div>
            </Card>
        </Col>

        <Col md={6} >
            <Card>
            <div className="d-flex">
                <div className="imageHolder">
                <Card.Img variant="top" src="https://www.chitrakootweb.com/template/fivestar/img/blog/blog-06.jpg" />
                    </div>
                    <div>
                    <Card.Body>
    <Card.Title>Nov. 04, 2019</Card.Title>
    <Card.Text>
    Best oriental hotel channel on youTube for our clients.
    </Card.Text>
    <Button variant="primary">Read More</Button>
  </Card.Body>
                        </div>
            </div>
            </Card>
        </Col>

        </Row>

    </Row>
    </Container>
    </section>
    

<section>
   
    <Row>
    <h1 class="text-center" id="header">Gallery </h1>
    <Row>
        <Col>
        <img
      className="d-block w-100"
      src={coursel1}
      alt="First slide"
    />
        </Col>

        <Col>
        <img
      className="d-block w-100"
      src={coursel2}
      alt="First slide"
    />
        </Col>

        <Col>
        <img
      className="d-block w-100"
      src={coursel1}
      alt="First slide"
    />
        </Col>

        <Col>
        <img
      className="d-block w-100"
      src={coursel2}
      alt="First slide"
    />
        </Col>

        </Row>

    </Row>
   
    </section>
    <section>
    <h1 class="text-center" id="header">Hotel Tabs </h1>
    <Row>
        <Col>
            <Row>
                <Col md={6} className="tinted-image1 tint">
                    <div className="p-4">
                         <h1>Single Room</h1>
                         <h2>Starting from $120/night</h2>

                    </div>
                </Col>
                <Col md={6} className="tinted-image2 tint">
                <div className="p-4">
                <h1>Double Room</h1>
                         <h2>Starting from $200/night</h2>

                </div>
                
                </Col>
                <Col md={6} className="tinted-image3 tint">
                <div className="p-4">
                <h1>Family Apartment</h1>
                         <h2>Starting from $300/night </h2>
                </div>
                
                </Col>
                <Col md={6} className="tinted-image4 tint">
                <div className="p-4">
                <h1>Premium Apartment</h1>
                <h2>Starting from $400/night </h2>
                </div>
                </Col>
            </Row>

        </Col>
     
        <Col>
      
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Our Hotels">
        <p>
            

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum. In hendrerit risus arcu, in eleifend metus dapibus varius. Nulla dolor sapien, laoreet vel tincidunt non, egestas non justo. Phasellus et mattis lectus, et gravida urna.

foodDonec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo. Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper. Nam vitae suscipit magna. Nam et felis nulla. Ut nec magna tortor. Nulla dolor sapien, laoreet vel tincidunt non, egestas non justo.

        </p>
      </Tab>
      <Tab eventKey="profile" title="Events">
      <p>
            

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum. In hendrerit risus arcu, in eleifend metus dapibus varius. Nulla dolor sapien, laoreet vel tincidunt non, egestas non justo. Phasellus et mattis lectus, et gravida urna.
            
            foodDonec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo. Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper. Nam vitae suscipit magna. Nam et felis nulla. Ut nec magna tortor. Nulla dolor sapien, laoreet vel tincidunt non, egestas non justo.
            
                    </p>
      </Tab>
      <Tab eventKey="contact" title="Kids" >
      <p>
            

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum. In hendrerit risus arcu, in eleifend metus dapibus varius. Nulla dolor sapien, laoreet vel tincidunt non, egestas non justo. Phasellus et mattis lectus, et gravida urna.
            
            foodDonec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo. Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper. Nam vitae suscipit magna. Nam et felis nulla. Ut nec magna tortor. Nulla dolor sapien, laoreet vel tincidunt non, egestas non justo.
            
                    </p>
      </Tab>
    </Tabs>
        </Col>
    </Row>   
    </section>    
    </div>
    </>
    )
}

export default HomeScreen