import Toolbar from './components/Toolbar/Toolbar.tsx';
import {Route, Routes} from 'react-router-dom';
import AboutPage from './containers/AboutPage/AboutPage.tsx';
import EventsPage from './containers/EventsPage/EventsPage.tsx';
import PageNoFoundPicture from '../src/images/404PageNotFound.jpg';
import ContactsPage from './containers/ContactsPage/ContactsPage.tsx';
import './styles.css';


function App() {

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main>


        <Routes>
          <Route path="/about" element={(
            <AboutPage />
          )}/>
          <Route path="/events" element={(
            <EventsPage />
          )}/>
          <Route path="/contacts" element={(
            <ContactsPage />
          )}/>
          <Route path="*" element={(
            <div className="container-fluid pic-container">
              <img
                className="pic-notfound"
                src={PageNoFoundPicture}
                alt="Page Not Found" />
            </div>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
