import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import EventsPage from './pages/Events';
import ProfilePage from './pages/Profile';
import HomePage from './pages/Home';
import VenuesPage from './pages/Venue';
import RSVPPage from './pages/Invitation-RSVP';
import NewReservationPage from './pages/NewReservation';
import Loading from './components/Loading';
import GuestsPage from './pages/Guests';
import { useAuth0 } from '@auth0/auth0-react';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <NavigationBar />
      <Route exact path="/" component={HomePage} />
      <PrivateRoute exact path="/events" component={EventsPage} />
      <PrivateRoute exact path="/profile" component={ProfilePage} />
      <PrivateRoute exact path="/venues" component={VenuesPage} />
      <Route exact path="/RSVP" component={RSVPPage} />
      <PrivateRoute
        exact
        path="/events/new"
        component={NewReservationPage}
      />
      <PrivateRoute exact path="/guests" component={GuestsPage} />
      <Footer />
    </Router>
  );
};

export default App;
