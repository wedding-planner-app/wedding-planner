import React from 'react';
import Email from '../../components/Email';
import Password from '../../components/Password';
import { Card } from 'react-bootstrap';

const LoginPage = () => {
  return (
  <Card>
    <Email />
    <Password />
  </Card>
  )
};

export default LoginPage;
