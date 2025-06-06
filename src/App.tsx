import { Route } from "react-router";
import Home1 from "./components/pages/Home1";
import Home2 from "./components/pages/Home2";
import Home3 from "./components/pages/Home3";
import PAGES from "./components/pages/PAGES";
import FaqData from "./components/pages/FaqData";
import Services from "./components/pages/Services";
import { BrowserRouter, Routes } from "react-router";
import OurHistory from "./components/pages/OurHistory";
import PageLayout from "./components/layouts/PageLayout";
import OurTeamMember from "./components/pages/OurTeamMember";
import HarvestConcepts from "./components/pages/HarvestConcepts";
import TeamMemberDetail from "./components/pages/TeamMemberDetail";
import PortfolioGridCol3 from "./components/pages/PortfolioGridCol3";
import PortfolioGridCol2 from "./components/pages/PortfolioGridCol2";
import PortfolioGridCol4 from "./components/pages/PortfolioGridCol4";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home1 />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/home3" element={<Home3 />} />
            <Route path="/about" element={<PAGES />} />
            <Route path="/faq" element={<FaqData />} />
            <Route path="/history" element={<OurHistory />} />
            <Route path="/team" element={<OurTeamMember />} />
            <Route path="/services" element={<Services />} />
            <Route path="/concepts" element={<HarvestConcepts />} />
            <Route path="/portfolio" element={<PortfolioGridCol3 />} />
            <Route path="/team-detail" element={<TeamMemberDetail />} />
            <Route path="/portfolioCol" element={<PortfolioGridCol2 />} />
            <Route path="/PortfolioGridCol" element={<PortfolioGridCol4 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
