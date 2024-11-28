import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ListView from "./pages/ListView";
import DetailView from "./pages/DetailView";
import CommonLayout from "./components/CommonLayout";
import AppRepoDetails from "./components/RepoDetails";
import { useRepo } from "./context/RepoContext";
import { useEffect } from "react";
import axios from "axios";

const GET_REPOS_API_URL = "https://api.github.com/orgs/godaddy/repos";

function App() {
  const { setRepos } = useRepo();
  useEffect(() => {
    const fetchRepos = async () => {
      const response = await axios.get(GET_REPOS_API_URL);
      setRepos(response.data);
    };
    fetchRepos();
  }, [setRepos]);
  return (
    <div className="App">
      <Router>
        <CommonLayout>
          <Routes>
            <Route path="/" element={<ListView />} />
            <Route path="/about" element={<AppRepoDetails />} />
            <Route path="/repo/:repoId" element={<DetailView />} />
          </Routes>
        </CommonLayout>
      </Router>
    </div>
  );
}

export default App;
