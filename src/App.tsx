import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";

const App = () => {
  // const navigate = useNavigate();

  return (
    <div className="h-full min-h-svh">
      <div className="absolute h-svh w-full bg-foreground"></div>
      <div className="relative">
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="/project/gpt3" element={<div />} /> */}
          </Route>
        </Routes>
      </div>
    </div>
  );
};
export default App;
