import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TurfRoute from "./Routes/TurfRoute";
import UserRoute from "./Routes/UserRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<UserRoute />} />
          <Route path="/turf/*" element={<TurfRoute />}></Route>
          <Route path="/*" element={'Not found'} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
