import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoute from "./Routes/AdminRoute";
import TurfRoute from "./Routes/TurfRoute";
import UserRoute from "./Routes/UserRoute";
import { Context } from "./Context/SearchContext";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<UserRoute />} />
          <Route path="/turf/*" element={<TurfRoute />}></Route>
          <Route path="/admin/*" element={<AdminRoute/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
