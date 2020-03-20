import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({
  onGoToBio,
  onGoToProject,
  children
}) => {
  
  return (
  <React.Fragment>
    <Header onGoToBio={onGoToBio} onGoToProject={onGoToProject}></Header>
    {children}
    <Footer></Footer>
  </React.Fragment>
)
}

export default Layout