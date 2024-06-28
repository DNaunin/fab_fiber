import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import DropDownMenu from './components/DropDownMenu';

function App() {
  const handleSubmit = (value: string) => {
    console.log('Submitted value:', value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Form onSubmit={handleSubmit} />
        <DropDownMenu />
      </header>
    </div>
  );
}

export default App;
