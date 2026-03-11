import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import FindJobs from "./pages/FindJobs/FindJobs";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<FindJobs />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App