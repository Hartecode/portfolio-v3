import React, {useRef, useEffect, useState} from 'react';
import './App.css';
import Layout from './components/layout/layout';
import StarField from './components/StarField/StarField';
import Landing from './components/Landing/Landing';

function App() {
  const [stickHeader, setStickHeader] = useState(false);
  const bioRef = useRef()
  const projRef = useRef()

  const onGoToBio = () => {
    bioRef.current.scrollIntoView({behavior: "smooth"})
  }

  const onGoToProject = () => {
    projRef.current.scrollIntoView({behavior: "smooth"})
  }

  const showScroll = () => {
    const bioTop = bioRef.current.offsetTop;
    const scrollTop = window.scrollY;

    if (scrollTop >= bioTop) {
      console.log('sticky')
      if (!stickHeader) setStickHeader(true)
    } else {
      console.log('not sticky')
      if (stickHeader) setStickHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', showScroll, {passive: true});
  });

  return (
    <Layout stickHeader={stickHeader} onGoToBio={onGoToBio} onGoToProject={onGoToProject}>
      <StarField></StarField>
      <Landing bioRef={bioRef} projRef={projRef}></Landing>
    </Layout>
  );
}

export default App;
