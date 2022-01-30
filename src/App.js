import Title from "./components/Title";
import './App.css'
import Content from "./components/Content";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Title/>
      <Routes>
        <Route path="/" element={<Content/>} />
      </Routes>
    </div>
  );
}

export default App;
