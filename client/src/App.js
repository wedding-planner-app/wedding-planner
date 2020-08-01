import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
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

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <NavigationBar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/events" component={EventsPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/venues" component={VenuesPage} />
      <Route exact path="/RSVP" component={RSVPPage} />
      <Route
        exact
        path="/NewReservation"
        component={NewReservationPage}
      />
      <Route exact path="/guests" component={GuestsPage} />
      <Footer />
    </Router>
  );
};

export default App;
