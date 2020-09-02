import React from 'react';
import './App.css';
import Counter from './components/counter';
function App() {
  let counterNumber = 5;
  return (
    <div className="App">
     <Counter />
     <p className="text-center copyright">Developed by <a href={http://suhaybka.ml/} target={_blank}>Suhaybka</a></p>
    </div>
  );
}

export default App;
