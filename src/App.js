import './App.css';
import luisPazDevLogo from './img/luispazdev.png';
import Button from './components/Button';
import Result from './components/Result';
import ClearBtn from './components/ClearBtn';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  function addInput (val) {
    setInput(input + val);
  };

  function calResult () {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Invalid')
    }
  };

  return (
    <div className='App'>
      <div className='container-logo'>
        <img
        className='luispazdev-logo'
        src={luisPazDevLogo}
        alt='logo' />
      </div>
      <div className='container-calculator'>
        <Result input={input}/>
        <div className='row'>
          <Button addClick={addInput}>1</Button>
          <Button addClick={addInput}>2</Button>
          <Button addClick={addInput}>3</Button>
          <Button addClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button addClick={addInput}>4</Button>
          <Button addClick={addInput}>5</Button>
          <Button addClick={addInput}>6</Button>
          <Button addClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button addClick={addInput}>7</Button>
          <Button addClick={addInput}>8</Button>
          <Button addClick={addInput}>9</Button>
          <Button addClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button addClick={calResult}>=</Button>
          <Button addClick={addInput}>0</Button>
          <Button addClick={addInput}>.</Button>
          <Button addClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearBtn setClear={() => setInput('')} />
        </div>
      </div>
    </div>
  );
};

export default App;
