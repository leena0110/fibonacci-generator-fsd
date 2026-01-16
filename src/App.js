import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState('');
  const [fibonacci, setFibonacci] = useState([]);
  const [steps, setSteps] = useState([]);

  const generateFibonacci = () => {
    const n = parseInt(count);
    if (n <= 0 || n > 20) {
      alert('Please enter a number between 1 and 20');
      return;
    }

    const fib = [];
    const stepArray = [];
    
    for (let i = 0; i < n; i++) {
      if (i === 0) {
        fib.push(0);
        stepArray.push(`F(0) = 0`);
      } else if (i === 1) {
        fib.push(1);
        stepArray.push(`F(1) = 1`);
      } else {
        fib.push(fib[i-1] + fib[i-2]);
        stepArray.push(`F(${i}) = F(${i-1}) + F(${i-2}) = ${fib[i-1]} + ${fib[i-2]} = ${fib[i]}`);
      }
    }
    
    setFibonacci(fib);
    setSteps(stepArray);
  };

  const resetAll = () => {
    setCount('');
    setFibonacci([]);
    setSteps([]);
  };

  return (
    <div
        className="App"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/program-bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
      <div className="container">
        <h1>Fibonacci Series Generator</h1>
        <p className="subtitle">Each number is the sum of the two preceding ones</p>
        
        <div className="formula">
          <p>Formula: F(n) = F(n-1) + F(n-2)</p>
          <p>Starting with F(0) = 0, F(1) = 1</p>
        </div>
        
        <div className="input-section">
          <div className="input-group">
            <label>Enter number of terms (1-20):</label>
            <div className="input-with-button">
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                min="1"
                max="20"
                placeholder="e.g., 10"
              />
              <button onClick={generateFibonacci} className="generate-btn">
                Generate
              </button>
              <button onClick={resetAll} className="reset-btn">
                Reset
              </button>
            </div>
          </div>
        </div>

        {fibonacci.length > 0 && (
          <div className="result-section">
            <h2>Fibonacci Series (First {count} terms):</h2>
            <div className="fibonacci-grid">
              {fibonacci.map((num, index) => (
                <div key={index} className="fib-number">
                  <div className="fib-index">F({index})</div>
                  <div className="fib-value">{num}</div>
                </div>
              ))}
            </div>
            
            <div className="summary">
              <p>Last term: {fibonacci[fibonacci.length-1]}</p>
              <p>Sum of all terms: {fibonacci.reduce((a, b) => a + b, 0)}</p>
            </div>
          </div>
        )}

        {steps.length > 0 && (
          <div className="steps-section">
            <h3>Step-by-step Calculation:</h3>
            <div className="steps-container">
              {steps.map((step, index) => (
                <div key={index} className="step">
                  <span className="step-number">Step {index}:</span>
                  <span className="step-calculation">{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="examples">
          <h3>Example Sequence:</h3>
          <p>0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...</p>
        </div>
      </div>
    </div>
  );
}

export default App;