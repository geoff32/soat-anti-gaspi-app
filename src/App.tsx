import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import Offers from './pages/Offers';
import Home from './pages/Home';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
