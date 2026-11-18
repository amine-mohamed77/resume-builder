
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import CreateResume from "./Components/CreateResume";
import { MyResumesPage, TemplatesPage, SettingsPage } from "./Components/NavigationPages";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <main className="main-content">
          <Header />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/my-resumes" element={<MyResumesPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/create-resume" element={<CreateResume />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
