import React, {useRef} from 'react';
import './App.css';
import Layout from './components/layout/layout';
import StarField from './components/StarField/StarField';
import Landing from './components/Landing/Landing';

function App() {
  const bioRef = useRef()
  const projRef = useRef()

  const onGoToBio = () => {
    bioRef.current.scrollIntoView({behavior: "smooth"})
  }

  const onGoToProject = () => {
    projRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <Layout onGoToBio={onGoToBio} onGoToProject={onGoToProject}>
      <StarField></StarField>
      <Landing bioRef={bioRef} projRef={projRef}></Landing>
    </Layout>
  );
}

export default App;
