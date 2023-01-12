import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Tweet from "./components/Tweet";

function App() {
  return (
    <div>
      <Nav />
      <div className="body-style">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Home />
              </>
            }
          />

          <Route
            path="/tweets"
            exact
            element={
              <>
                <Tweet />{" "}
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
