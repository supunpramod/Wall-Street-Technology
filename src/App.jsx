import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Loader from "./components/pages/Loader";

// Lazy imports
const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Services = lazy(() => import("./components/sections/Services"));
const Industries = lazy(() => import("./components/sections/Industries"));
const Technologies = lazy(() => import("./components/sections/Technologies"));
const Contact = lazy(() => import("./components/pages/Contact"));
const NotFound = lazy(() => import("./components/pages/NotFound"));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          {/* Suspense wrapper for loading animation */}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
