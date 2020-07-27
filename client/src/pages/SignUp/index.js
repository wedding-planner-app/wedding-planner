// import React from 'react';
import { Card, Container } from 'react-bootstrap';
// import user from './user.png';
import './style.css';
// import BtnComponent from '../../components/Button';
// import Email from '../../components/Email';
// import Password from '../../components/Password';
// import TextComponent from '../../components/Text';

import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <Container fluid className="pt-5">
        <Card className="bgSignUpComponent">
          <form>
            <h3>Sign Up</h3>
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
            >
              Sign Up
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="#">sign in?</a>
            </p>
          </form>
        </Card>
      </Container>
    );
  }
}

// const SignUp = () => {
//   return (
//     <Container fluid className="pt-5">
//       <Row>
//         <Col className="col-6">
//           <Card className="bgSignUpComponent  bg-light">
//             <Card.Header className="text-center">
//               <Card.Title className="signup-title-style">
//                 <h3>SignUp</h3>
//               </Card.Title>
//             </Card.Header>
//             <Col className="custom pt-3">
//               <Card.Img
//                 className="signup-img-style"
//                 variant="top"
//                 src={user}
//               />
//             </Col>
//             <TextComponent />
//             <Email />
//             <Password />
//             <BtnComponent />
//           </Card>
//         </Col>
//         <Col className="col-3"></Col>
//       </Row>
//     </Container>
//   );
// };

// export default SignUp;
