import { Row, Col,Container,Card,Form,Button,Carousel,Tabs,Tab } from 'react-bootstrap'
import { useState } from 'react'
import room1 from "../resources/images/room-01.jpg"
import room2 from "../resources/images/room-02.jpg"
import room5 from "../resources/images/room-05.jpg"

import coursel1 from "../resources/images/1.jpg"
import coursel2 from "../resources/images/2.jpg"
import coursel3 from "../resources/images/4.jpg"
import coursel4 from "../resources/images/6.jpg"


const RoomListScreen = ()=>{
    <>
    <section>
    <Row className="BlogAdd text-center text-light p-4" >
        <Col>
        <h1>Our Rooms</h1>
        </Col>
    </Row>
    </section>

    <section>
        <Row>
            <Col md={4}>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.chitrakootweb.com/template/fivestar/img/content/room-5.jpg" />
  <Card.Body>
    <Card.Title>Single Room</Card.Title>
    <Card.Text>
      Starts From $250/Night
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </Col>
        </Row>
        
    </section>
    </>
    return (
    <>

   </>
    )
}

export default RoomListScreen