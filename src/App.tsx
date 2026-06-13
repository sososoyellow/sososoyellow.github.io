import { BrowserRouter, Routes, Route } from "react-router-dom";
import TargetCursor from "./components/TargetCursor";
import { Layout } from "./components/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      {/* Global custom cursor — targets any element with .cursor-target */}
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
