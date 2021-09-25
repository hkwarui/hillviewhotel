import React from "react"
import {Container, Navbar,Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../resources/images/logo.png'
const Footer = () => 
<footer className="page-footer font-small blue pt-4" style={{borderTop:"solid  ##800020", marginTop:"1% "}}>
    <div className="container-fluid text-center text-md-left">
        <Container>
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3"> <LinkContainer to='/' style={{fontFamily:"Righteous"}}>
                        <Navbar.Brand  ><img  className="my-0" src={logo} style={{maxWidth: "70px",maxHeight: "70px"}} />HighLand View Hotel  </Navbar.Brand>
                    </LinkContainer>
                    74 Guild Street 542B, Great North Town MT.
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
              
                <ul className="list-unstyled">
          
     
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
            <ul className="list-unstyled">
               <li> <b>Reservation</b> </li> 
               <li>Nairobi,Kenya</li>
               <li><Nav.Link href="mailto:devngecu@gmail.com">devngecu@gmail.com </Nav.Link></li>
               <li><Nav.Link href="https://wa.me/+254707583092">+254707583092</Nav.Link></li>
               <li><Nav.Link hrf="https://www.instagram.com/devngecu/?hl=en"> Instagram </Nav.Link></li>
               <li><Nav.Link hrf="https://twitter.com/_ngecu"> Twitter </Nav.Link></li>
                </ul>
    
            </div>
        </div>
        </Container>
    </div>

    <div className="footer-copyright text-center py-3">© 2021 Copyright:
        <a href="https://www.instagram.com/_ngecu/"> dengecu.com</a>
    </div>

</footer>

export default Footer