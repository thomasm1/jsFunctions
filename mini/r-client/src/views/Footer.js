import React, { Component } from "react";
import { Container, Row } from "reactstrap";

class Footer extends Component {
  constructor(props) {  
    super(props);  
    this.state = {  
        footerText: "© 2021 made with <3 by Thomas for a better web."  
    };
  } 

  render() {
    return (
      <footer className="footer">
        <Container fluid={true}>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Thomas
              </a>
            </li>{" "}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >
                About us
              </a>
            </li>{" "}
          </ul>
          <div className="copyright">
            © {new Date().getFullYear()} made with{" "}
            <i className="tim-icons icon-heart-2" /> by{" "}
            <a href="#">
              Thomas
            </a>{" "}
            for a better web.
          </div>
        </Container>
        
        { this.state.footerText }
      </footer>
    );
  }
}

export default Footer;
