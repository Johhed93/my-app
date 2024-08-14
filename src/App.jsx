import "./App.css";
import InputForm from "./components/inputWithForm";
import { Routes, Route } from "react-router-dom";
import InputWithoutForm from "./components/inputWithoutForm";
import Navbar from "./components/navbar";
import Home from "./components/pages/home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inputWithoutForm" element={<InputWithoutForm />} />
        <Route path="/inputWithForm" element={<InputForm />} />
      </Routes>
    </div>
  );
}

export default App;
