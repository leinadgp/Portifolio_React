import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Container, Menu, Li } from './styles'

function Header() {
  const [changeBackground, setChangeBackground] = useState(false)
  const { pathname } = useLocation()

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 150) {
      setChangeBackground(true)
    }
    if (changeBackground && window.pageYOffset <= 150) {
      setChangeBackground(false)
    }
  }

  return (
    <Container $changeBackground={changeBackground}>
      <Menu>
        <Li $isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>
        <Li $isActive={pathname.includes('/projetos')}>
          <Link to="/projetos">Projetos</Link>
        </Li>
        <Li $isActive={pathname.includes('/sobre')}>
          <Link to="/sobre">Sobre</Link>
        </Li>
        <Li $isActive={pathname.includes('/contato')}>
          <Link to="/contato">Contato</Link>
        </Li>
        <Li $isActive={pathname.includes('/certificados')}>
          <Link to="/certificados">Certificados</Link>
        </Li>
      </Menu>
    </Container>
  )
}
export default Header
