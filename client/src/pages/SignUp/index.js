// import React from 'react';
import React, { Component } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import user from './user.png';
import './style.css';
import BtnComponent from '../../components/Button';

export default class SignUp extends Component {
  render() {
    return (
      <Container fluid className="pt-5">
        <Row>
          <Col className="col-5 m-auto">
            <Card className="bgSignUpComponent">
              <Card.Header className="text-center">
                <Card.Title className="signup-title-style">
                  <h3>SignUp</h3>
                </Card.Title>
              </Card.Header>
              <Col className="custom pt-3">
                <Card.Img
                  className="signup-img-style"
                  variant="top"
                  src={user}
                />
              </Col>
              <form className="mx-5">
                <div className="form-group">
                  <label className="signup-title-style ">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  />
                </div>
                <div className="form-group">
                  <label className="signup-title-style ">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                  />
                </div>
                <div className="form-group">
                  <label className="signup-title-style ">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>

                <div className="form-group">
                  <label className="signup-title-style">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>
                <div className="d-flex flex-column align-items-center">
                  <BtnComponent name="Create Account" />
                  <p className="forgot-password text-right mt-4">
                    Already registered{' '}
                    <a className="color-link" href="/login">
                      sign in?
                    </a>
                  </p>
                </div>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
