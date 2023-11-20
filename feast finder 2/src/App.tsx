import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login2 from './Login2';
import First from './First';

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
      <Route path="/" element={<Login2 />} />
      <Route path="/first" element={<First />} />
      </Routes>
    </Router>
  );
}

export default App;