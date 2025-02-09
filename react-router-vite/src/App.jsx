// This line imports the Routes and Route components from react-router-dom
import { Routes, Route } from "react-router-dom";

// This line imports the Navbar component
import Navbar from "./components/Navbar";

// These lines import the Home, About, and Contact page components
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// This is the App component
// This line creates a functional component named App
function App() {
  // This line returns the JSX for the App component
  return (
    <>
      {/* This line inserts the Navbar component */}
      <Navbar />

      {/* This line creates a container div */}
      <div className="container">
        {/* This line creates the Routes component */}
        <Routes>
          {/* This line creates a Route component that displays the Home component when the path is / */}
          <Route path="/" element={<Home />} />

          {/* This line creates a Route component that displays the About component when the path is /about */}
          <Route path="/about" element={<About />} />

          {/* This line creates a Route component that displays the Contact component when the path is /contact */}
          <Route path="/contact" element={<Contact />} />

          {/* This line creates a Route component that displays a 404 Not Found message when the path is not found */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

// This line exports the App component
export default App;
