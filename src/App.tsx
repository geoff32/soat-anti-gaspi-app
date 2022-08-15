import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Offers from "./pages/offers/Offers";
import Home from "./pages/Home";
import CreateOffer from "./pages/createOffer/CreateOffer";
import { ErrorBoundary, Layout } from "./components";
import ConfirmOffer from "./pages/confirmOffer/ConfirmOffer";
import DeleteOffer from "./pages/deleteOffer/DeleteOffer";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/createOffer" element={<CreateOffer />} />
            <Route path="/confirmOffer/:offerId" element={<ConfirmOffer />} />
            <Route path="/deleteOffer/:offerId" element={<DeleteOffer />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
