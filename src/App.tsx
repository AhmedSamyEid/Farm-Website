import { Route } from "react-router";
import Home1 from "./components/pages/Home1";
import Home2 from "./components/pages/Home2";
import Home3 from "./components/pages/Home3"
import PAGES from "./components/pages/PAGES"
import { BrowserRouter, Routes } from "react-router";
import PageLayout from "./components/layouts/PageLayout";
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
