import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import EventsPage from './pages/Events';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import LogoutPage from './pages/Logout';
import SignUp from './pages/SignUp';
import HomePage from './pages/Home';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Container>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/events" component={EventsPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/logout" component={LogoutPage} />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
