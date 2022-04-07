import logo from "./logo.svg";
import "./App.css";
import Page from "./components/Page";
import BackToTop from "./components/BackToTop";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Page />
      <BackToTop />
      <Input />
    </div>
  );
}

export default App;

function Input() {
  const [Input,setInput] = useState("");
  return <textarea></textarea>;
}
