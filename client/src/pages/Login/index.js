import React from 'react';
import Email from '../../components/Email';
import Password from '../../components/Password';
import BtnComponent from '../../components/Button';
import { Card, Container, Row, Col} from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Container fluid className="pt-5">
      <Row>
        <Col className="col-3"></Col>
        <Col className="col-6">
          <Card>
            <Email />
            <Password />
            <BtnComponent />
          </Card>
        </Col>
        <Col className="col-3"></Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
