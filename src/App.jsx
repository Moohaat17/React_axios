import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewUsers from "./Pages/CRUD/ViewUsers";
import CreateUser from "./Pages/CRUD/CreateUser";
import Header from "./Layout/Header"; 

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<ViewUsers />} />
          <Route path="/CreateUser" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
