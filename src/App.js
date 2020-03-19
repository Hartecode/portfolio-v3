import React from 'react';
import './App.css';
import Layout from './components/layout/layout';
import StarField from './components/StarField/StarField';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <Layout>
      <StarField></StarField>
      <Landing></Landing>
    </Layout>
  );
}

export default App;
