import React from 'react';
import './App.scss';
import Routes from './routes';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Routes />
    </div>
  );
}

export default App;
