import { Route } from "react-router";
import Home1 from "./components/pages/Home1";
import Home2 from "./components/pages/Home2";
import { BrowserRouter, Routes } from "react-router";
import PageLayout from "./components/layouts/PageLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
          <Route path="/" element={<Home1 />} />
          <Route path="/Home2" element={<Home2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
