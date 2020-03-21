import React, { useState, useRef, useEffect } from 'react'
import './Image.css'

const Image = ({src, alt, round}) =>  {
  const [load, setLoad] = useState(false)
  const imgRef = useRef()

  const runImageLazyLoad = () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1
    }
    if (IntersectionObserver) {
      const lazyLoad = elm => {
        const io = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                setLoad(true)
                observer.disconnect()
              }
            });
          }, options);
        io.observe(elm)
      }
      [imgRef.current].forEach(lazyLoad)
    } else {
      setLoad(true)
    }
  }

  useEffect(() => {
    runImageLazyLoad()
  }) 

  return (
    <React.Fragment>
      <img
        className={`image-comp ${load ? 'fadeIn' : ''} ${round ? 'round' : ''}`}
        ref={imgRef}
        src={load ? src : ''}
        alt={alt} />
    </React.Fragment>
  );
}

export default Image
