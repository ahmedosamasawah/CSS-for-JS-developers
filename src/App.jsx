import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import Introduction from "./pages/01-Module 0 Fundamentals Recap/01-Introduction";
import AnatomyOfStyleRule from "./pages/01-Module 0 Fundamentals Recap/02-Anatomy of Style Rule";
import MediaQueries from "./pages/01-Module 0 Fundamentals Recap/03-Media Queries";
import Selectors from "./pages/01-Module 0 Fundamentals Recap/04-Selectors";
import PseudoClasses from "./pages/01-Module 0 Fundamentals Recap/05-Pseudo Classes";
import PseudoElements from "./pages/01-Module 0 Fundamentals Recap/06-Pseudo Elements";
import Combinators from "./pages/01-Module 0 Fundamentals Recap/07-Combinators";
import Exercise from "./pages/01-Module 0 Fundamentals Recap/08-Exercise";
import Units from "./pages/01-Module 0 Fundamentals Recap/09-Units";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/AnatomyOfStyleRule" element={<AnatomyOfStyleRule />} />
        <Route path="/MediaQueries" element={<MediaQueries />} />
        <Route path="/Selectors" element={<Selectors />} />
        <Route path="/PseudoClasses" element={<PseudoClasses />} />
        <Route path="/PseudoElements" element={<PseudoElements />} />
        <Route path="/Combinators" element={<Combinators />} />
        <Route path="/Exercise" element={<Exercise />} />
        <Route path="/Units" element={<Units />} />
      </Routes>
    </div>
  );
}

export default App;
