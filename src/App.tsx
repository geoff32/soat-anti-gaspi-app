import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Offers from './pages/offers/Offers';
import Home from './pages/Home';
import CreateOffer from './pages/createOffer/CreateOffer';
import { ErrorBoundary, Layout } from './components';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/createOffer" element={<CreateOffer />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
