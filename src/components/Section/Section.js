import React from 'react'
import './Section.css'



const Section = React.forwardRef(({title, children}, ref) => (
  <section ref={ref} className="container contentBox">
    <h2 className="sectionTitle">{title}</h2>
    {children}
  </section>
))

export default Section