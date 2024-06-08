import React from 'react'
import Section from '../Components/component/Section'
import SectionTwoj from '../Components/CompanentTwo/SectionTwoj'
import Menu from '../Components/Menu/Menu'

function Layout({ children }) {
    return (
        <div>
            <Section />
            <SectionTwoj />
            <Menu />
        </div>
    )
}

export default Layout
