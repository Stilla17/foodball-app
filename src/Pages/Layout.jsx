import React from 'react'
import Line from '../Component/Line/Line'
import Navbar from '../Component/Navbar/Navbar'
import Section from '../Component/Main/Section'
import Counter from '../Counter/Counter'
import Swithcer from '../Switcher/Swithcer'
import Field from '../Fields/Field'

function Layout({ children }) {
  return (
    <>
      <div className='flex'>
        <Line />
        <Section />
      </div>
      <div className='flex flex-col w-[100%]'>
        <Navbar />
        <div className=''>
          <Counter />
          <Swithcer />
          <Field />
        </div>
      </div>
    </>
  )
}

export default Layout;