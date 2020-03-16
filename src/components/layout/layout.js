import React from 'react'
import Header from '../Header/Header'

const Layout = ({
  children
}) => {
  
  return (
  <React.Fragment>
    <Header></Header>
    {children}
    <footer>
      <div>©2020 Panda Ipsum</div>
      <div>Created and operated by <a href="https://www.hartecode.com/">Sean Harte</a></div>
    </footer>
  </React.Fragment>
)
}

export default Layout