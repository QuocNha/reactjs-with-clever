import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  // const renderHeader = (<Header/>);
  const renderHome = <Home/>;
  return (
    <div className="App">
      {/* {renderHeader} */}
      {renderHome}
    </div>
  );
}

export default App;
