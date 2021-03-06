import React from "react"

import { Container, Menu } from "semantic-ui-react"

import "semantic-ui-less/semantic.less"
import "./header.less"

import MadMinutesLogo from "./MadMinutesLogo"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }) => (
  <header>
    {/* <Menu fixed="top"> */}
    <Container>
      <MadMinutesLogo />
      {/* <Menu.Item as="a" header> */}
      {/* </Menu.Item> */}
    </Container>
    {/* </Menu> */}
  </header>
)

export default Header
