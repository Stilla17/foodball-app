import React from 'react'
import Line from '../Component/Line/Line'
import Navbar from '../Component/Navbar/Navbar'
import Section from '../Component/Main/Section'
import Counter from '../Counter/Counter'

function Layout({ children }) {
  return (
    <>
      <Line />
      <Section />
      <Navbar />
      <Counter />
    </>
  )
}

export default Layoutw
