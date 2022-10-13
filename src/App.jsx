import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Heading from './components/heading';
import Home from './pages/Home';
import Result from './pages/Result';

function App() {
  return (
    <div className="App">
      <Heading />
      <div className="container"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
