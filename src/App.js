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
  const [inputData, setInputData] = useState('');
  const [numberOfWord, setNumberOfWord] = useState(0);

  const onInputChange = (e) => {

    setInputData(e.target.value);
  };

  useEffect(() => {
    const count = setTimeout(() => {
      setNumberOfWord(
        inputData === true
          ? inputData.trim().replace(/\s\s+/g, ' ').split(' ').length
          : 0
      );
    }, 500);

    return () => {
      clearTimeout(count);
    };
  }, [inputData]);

  return (
    <div className='App'>
      
        <p>Số chữ: {numberOfWord} </p>
        <textarea type='text' onChange={onInputChange} value={inputData} />
      
    </div>
  );
}
}
