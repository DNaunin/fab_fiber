import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'

function App() {
  const handleSubmit = (value: string) => {
    console.log('Submitted value:', value);
  };
  return (
    <div className="App">
      <header className="App-header">
       <a>
          Find out fiber contents
        </a>
        <Form onSubmit={handleSubmit} />
      </header>
    </div>
  );
}

export default App;
