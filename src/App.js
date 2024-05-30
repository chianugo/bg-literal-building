import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Search from "./components/Search";
import Account from "./components/Account";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/contribute" element={<h2>Contribute Page</h2>} />
        <Route path="/search" element={<Search />} />
        <Route path="/blog" element={<h2>Blog Page</h2>} />
        <Route path="/account" element={<Account />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
